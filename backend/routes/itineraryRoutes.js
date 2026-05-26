const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Itinerary = require('../models/Itinerary');
const { GoogleGenerativeAI } = require('@google/generative-ai');

function generateOfflineItinerary(formData, mlMetadata, numDays) {
  const destination = formData.to || "Jaipur, Rajasthan";
  const start = formData.from || "New Delhi";
  
  const sights = (mlMetadata && mlMetadata.places_visited && mlMetadata.places_visited.length > 0)
    ? mlMetadata.places_visited
    : ["Scenic Local Viewpoint", "Historic Town Square", "Cultural Heritage Museum", "Bustling Local Market", "Peaceful Botanical Gardens"];
    
  const activities = (mlMetadata && mlMetadata.activities && mlMetadata.activities.length > 0)
    ? mlMetadata.activities
    : ["Exploring scenic streets", "Trying local street food", "Photography and sightseeing", "Souvenir shopping", "Watching cultural performances"];

  const transportMode = formData.transport || (mlMetadata && mlMetadata.transport_mode) || "Flight";
  const transportName = formData.transport_name || (mlMetadata && mlMetadata.transport_name) || "WanderNest Express";
  const hotelName = formData.accommodation || (mlMetadata && mlMetadata.accommodation) || "Cozy Boutique Stay";
  const restaurant = (mlMetadata && mlMetadata.restaurant) ? mlMetadata.restaurant : "WanderNest Curated local diner";
  const dish = (mlMetadata && mlMetadata.best_dish) ? mlMetadata.best_dish : "Local Signature Dish";
  const localTransit = (mlMetadata && mlMetadata.local_transport) ? mlMetadata.local_transport : "local taxi";
  
  const budget = formData.budget || 50000;
  const currency = formData.currency || "INR";
  const cSym = currency === "USD" ? "$" : currency === "EUR" ? "€" : "₹";
  
  const intermediateSights = [
    sights[0] || "Cultural Heritage Center",
    sights[1] || "Panoramic Viewpoint",
    sights[2] || "Historic Ruins",
    sights[3] || "Botanical Gardens",
    sights[4] || "Local Street Bazaar",
    "Scenic Lake Shore",
    "Art and Crafts Village",
    "Old Fort ruins"
  ];
  const intermediateActivities = [
    activities[0] || "Exploring heritage lanes",
    activities[1] || "Tasting regional street food delicacies",
    activities[2] || "Scenic sunset photography",
    activities[3] || "Shopping for local handicrafts",
    "Engaging in traditional folk workshops",
    "Guided walking tour around city landmarks"
  ];

  // Build Stays options
  const stays = [
    {
      type: "Budget Option",
      name: `Cozy local Guesthouse close to transit routes`,
      price: `${cSym}${Math.round(budget * 0.04)}`,
      rating: "4.2★",
      amenities: ["Free WiFi", "Air Conditioning", "Close to Transit", "Hot Water"],
      description: `A warm, welcoming local guesthouse in ${destination} grounded directly in your preferences.`
    },
    {
      type: "Mid-range Option",
      name: hotelName,
      price: `${cSym}${Math.round(budget * 0.08)}`,
      rating: "4.5★",
      amenities: ["Free Breakfast", "Swimming Pool", "24/7 Room Service", "Fitness Center"],
      description: `A modern, highly-rated boutique hotel featuring premium rooms and scenic city views.`
    },
    {
      type: "Luxury Option",
      name: `5-Star Heritage Resort & Spa`,
      price: `${cSym}${Math.round(budget * 0.15)}`,
      rating: "4.9★",
      amenities: ["Infinity Pool", "Luxury Wellness Spa", "Fine Dining Restaurant", "Private Tour Guide"],
      description: `An exquisite, world-class resort offering panoramic views, premium suites, and personalized butler services.`
    }
  ];

  // Build days
  const daysList = [];
  for (let d = 1; d <= numDays; d++) {
    const dayObj = {
      day: d,
      title: d === 1 ? "Departure & Grounding" : d === numDays ? "Farewell & Return Journey" : `Exploring ${intermediateSights[(d - 2) * 2 % intermediateSights.length]}`,
      hero_image: "",
      sections: []
    };

    if (d === 1) {
      dayObj.sections = [
        {
          period: "Morning",
          time: "9:00 AM",
          activity: `Board Outbound ${transportMode}`,
          description: `Board your outbound ${transportMode} via "${transportName}" departing from ${start}. Enjoy the scenic journey to ${destination}.`,
          location: `${start} Terminal`,
          transport: {
            type: transportMode,
            name: transportName,
            price: `${cSym}${Math.round(budget * 0.15)}`
          },
          image: ""
        },
        {
          period: "Lunch",
          time: "1:00 PM",
          activity: "Midday Gastronomy",
          description: "Grab a refreshing meal on the journey or at the local transit hub to fuel up for the arrival.",
          location: `Transit Terminal Cafe`,
          restaurant: {
            name: "Terminal Bistro",
            rating: "4.0",
            cost: `${cSym}350`
          },
          image: ""
        },
        {
          period: "Afternoon",
          time: "3:00 PM",
          activity: `Arrival & Hotel Check-in`,
          description: `Arrive safely at ${destination}, check in to your accommodation, and unpack. Take a light walking tour around the neighborhood to orient yourself.`,
          location: hotelName,
          image: ""
        },
        {
          period: "Evening",
          time: "7:00 PM",
          activity: "Welcome Dinner & Night Walk",
          description: `Indulge in a relaxing welcome dinner at a local bistro, sampling the first authentic regional flavors of ${destination}.`,
          location: `${destination} Central Hub`,
          restaurant: {
            name: `${destination} Heritage Cafe`,
            rating: "4.3",
            cost: `${cSym}600`
          },
          image: ""
        },
        {
          period: "Logistics Note",
          time: "Night",
          activity: "Local Transit Advice",
          description: `Ensure you hire a registered "${localTransit}" for standard, hassle-free neighborhood transfers during your stay.`,
          location: "Citywide",
          image: ""
        }
      ];
    } else if (d === numDays) {
      dayObj.sections = [
        {
          period: "Morning",
          time: "9:00 AM",
          activity: "Farewell Walk & Check-out",
          description: "Check out of your accommodation. Spend your final morning taking a quiet, scenic walk along the local riverbanks or central park.",
          location: `${destination} Riverside Park`,
          image: ""
        },
        {
          period: "Lunch",
          time: "12:30 PM",
          activity: "Last Gourmet Meal",
          description: "Have a quick, delicious farewell lunch at a popular cafe near the departure terminal.",
          location: "Departure Terminal Cafe",
          restaurant: {
            name: "Farewell Cafe",
            rating: "4.2",
            cost: `${cSym}400`
          },
          image: ""
        },
        {
          period: "Afternoon",
          time: "3:00 PM",
          activity: `Return Transit Boarding`,
          description: `Board your return "${transportName}" (${transportMode}) for your comfortable journey back to ${start}.`,
          location: `${destination} Station`,
          transport: {
            type: transportMode,
            name: transportName,
            price: `Included`
          },
          image: ""
        },
        {
          period: "Evening",
          time: "7:00 PM",
          activity: "Safe Arrival Home",
          description: "Arrive safely back at your home destination, unpacking your beautiful souvenirs and reflecting on a memorable journey!",
          location: `${start} Terminal`,
          image: ""
        }
      ];
    } else {
      const s1 = intermediateSights[(d - 2) * 2 % intermediateSights.length];
      const s2 = intermediateSights[((d - 2) * 2 + 1) % intermediateSights.length];
      const act = intermediateActivities[(d - 2) % intermediateActivities.length];

      dayObj.sections = [
        {
          period: "Morning",
          time: "9:00 AM",
          activity: `Exploring ${s1}`,
          description: `Set out early via "${localTransit}" to visit the stunning, landmark monument "${s1}". Capture beautiful panoramic shots.`,
          location: s1,
          image: ""
        },
        {
          period: "Lunch",
          time: "1:00 PM",
          activity: "Regional Street Delicacy",
          description: `Savor local street foods and regional snacks, exploring the unique spices and textures of ${destination}.`,
          location: `${s1} Market lanes`,
          restaurant: {
            name: "Traditional Diner",
            rating: "4.4",
            cost: `${cSym}500`
          },
          food: [
            {
              name: dish,
              image: ""
            }
          ],
          image: ""
        },
        {
          period: "Afternoon",
          time: "3:00 PM",
          activity: `Discovering ${s2}`,
          description: `Navigate to "${s2}" and participate in "${act}". Take your time to walk around and discover local secrets.`,
          location: s2,
          image: ""
        },
        {
          period: "Evening",
          time: "7:00 PM",
          activity: `Dinner at ${restaurant}`,
          description: `Dine at the highly celebrated local icon "${restaurant}", sampling their world-famous dish "${dish}". The ambiance is wonderful!`,
          location: restaurant,
          restaurant: {
            name: restaurant,
            rating: "4.7",
            cost: `${cSym}900`
          },
          food: [
            {
              name: dish,
              image: ""
            }
          ],
          image: ""
        },
        {
          period: "Logistics Note",
          time: "Night",
          activity: "Sightseeing Tip",
          description: `Early mornings are the best time to visit "${s1}" to beat the tourist rush and get clean, beautiful lighting for photos.`,
          location: s1,
          image: ""
        }
      ];
    }
    daysList.push(dayObj);
  }

  // Build budget
  const budgetObj = {
    total: `${cSym}${budget}`,
    categories: [
      { name: `Transport (${transportMode})`, cost: `${cSym}${Math.round(budget * 0.35)}`, percent: 35 },
      { name: `Accommodation (${numDays - 1} Nights)`, cost: `${cSym}${Math.round(budget * 0.30)}`, percent: 30 },
      { name: "Food & Dining", cost: `${cSym}${Math.round(budget * 0.20)}`, percent: 20 },
      { name: "Sightseeing & Activities", cost: `${cSym}${Math.round(budget * 0.15)}`, percent: 15 }
    ]
  };

  const tripObj = {
    trip_title: `Custom Itinerary to ${destination}`,
    destination_image: "",
    stays: stays,
    budget: budgetObj,
    days: daysList,
    offlineFallback: true
  };

  return JSON.stringify(tripObj, null, 2);
}

// POST /api/itinerary/generate
// Generate and save itinerary
router.post('/generate', authMiddleware, async (req, res) => {
  let mlMetadata = null;
  const formData = req.body;

  let numDays = 7;
  if (formData.startDate && formData.endDate) {
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    numDays = Math.max(1, diffDays + 1);
  }

  try {
    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let ragContext = "";

    // 1. If ML Traveler Optimization is enabled, consult FastAPI Nearest Neighbors model
    if (formData.useML) {
      try {
        // Map numeric budget to dataset categories (Budget, Mid-Range, Luxury)
        let budgetTier = "Mid-Range";
        if (formData.budget) {
          const budgetNum = Number(formData.budget);
          if (formData.currency === 'USD') {
            budgetTier = budgetNum < 500 ? "Budget" : budgetNum > 2000 ? "Luxury" : "Mid-Range";
          } else if (formData.currency === 'EUR') {
            budgetTier = budgetNum < 450 ? "Budget" : budgetNum > 1800 ? "Luxury" : "Mid-Range";
          } else {
            budgetTier = budgetNum < 30000 ? "Budget" : budgetNum > 80000 ? "Luxury" : "Mid-Range";
          }
        }

        // Map food preferences to dataset values: Vegetarian, Local, Mixed, Fine Dining
        let foodPreference = "Mixed";
        if (formData.food === "Local") foodPreference = "Local";
        else if (formData.food === "FineDining") foodPreference = "Fine Dining";
        else if (formData.food === "Vegetarian") foodPreference = "Vegetarian";

        // Query FastAPI recommender
        const mlRes = await fetch('http://127.0.0.1:8000/api/recommend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            start_location: formData.from || "New Delhi",
            destination: formData.to || "Jaipur, Rajasthan",
            budget_tier: budgetTier,
            pace: formData.pace || "Moderate",
            food_preference: foodPreference
          })
        });

        if (mlRes.ok) {
          mlMetadata = await mlRes.json();
          
          // Formulate RAG context anchoring traveler facts
          ragContext = `
[SYSTEM ML RAG ANCHOR CONTEXT]
The WanderNest Machine Learning Recommendation Engine analyzed 5,000+ real traveler journals and successfully retrieved similar trips (Cosine Similarity Match Quality: ${mlMetadata.confidence}%, based on ${mlMetadata.matched_travelers} matching profiles).
To ensure maximum realism and ground this itinerary in real traveler data, you MUST integrate these specific, factual recommendations:
- OUTBOUND / INBOUND TRANSPORT SERVICE: You MUST specify that the traveler uses "${mlMetadata.transport_mode}" travel via "${mlMetadata.transport_name}" for getting there (on Day 1) and returning (on Day ${numDays}).
- CULINARY RECOMMENDATION: You MUST explicitly include a dining visit to the restaurant "${mlMetadata.restaurant}" and highlight their famous dish "${mlMetadata.best_dish}".
- LOCAL TRANSIT: You MUST specify that local exploration is done primarily via "${mlMetadata.local_transport}" in your daily logistics.
- TOP PLACES VISITED: Try to include the following attractions in the sightseeing schedules: ${mlMetadata.places_visited ? mlMetadata.places_visited.join(', ') : ''}
- TOP ACTIVITIES: Try to incorporate these activities: ${mlMetadata.activities ? mlMetadata.activities.join(', ') : ''}
`;
        }
      } catch (mlErr) {
        console.error("FastAPI ML recommendation service call failed, falling back to pure LLM generation:", mlErr);
      }
    }

    let selectionContext = "";
    if (formData.transport_name) {
      selectionContext += `\n- CHOSEN OUTBOUND/INBOUND TRANSPORT CARRIER: You MUST explicitly ground the schedule on Day 1 (Morning) and Day ${numDays} (Afternoon) in the traveler boarding/riding exactly "${formData.transport_name}".`;
    }
    if (formData.accommodation) {
      selectionContext += `\n- CHOSEN HOTEL ACCOMMODATION: You MUST explicitly feature "${formData.accommodation}" as the main selected stay option in your Accommodation suggestions and specify that they stay there.`;
    }

    const prompt = `
      Act as an expert travel planner like Rutugo. Generate a highly detailed, premium travel itinerary as a PURE VALID JSON OBJECT based on the following preferences:
      From: ${formData.from}
      To: ${formData.to}
      Start Date: ${formData.startDate}
      End Date: ${formData.endDate}
      Passengers: ${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants
      Pace: ${formData.pace}
      Preferred Weather: ${formData.weather}
      Accommodation Type: ${formData.accommodation}
      Food Preference: ${formData.food}
      Transport: ${formData.transport}
      Budget: ${formData.budget} ${formData.currency}
      Additional Preferences: ${formData.additional}

      ${ragContext}
      ${selectionContext}

      CRITICAL CONSTRAINTS:
      1. You MUST generate an itinerary that covers EXACTLY ${numDays} DAYS (Day 1 to Day ${numDays}) matching the user's travel dates.
      2. Do NOT output ANY markdown headers, conversational text, introduction, or explanations.
      3. Your output MUST be a single, valid JSON object following this EXACT schema:
      {
        "trip_title": "A highly elegant, cinematic title (e.g. Luxury Kolkata Escape)",
        "destination_image": "",
        "days": [
          {
            "day": 1,
            "title": "Elegant, catching title for the day",
            "sections": [
              {
                "period": "Morning",
                "time": "09:00 AM",
                "activity": "Activity name",
                "description": "A very elegant and luxurious editorial description of what the traveler will do, where they will go, and key highlights.",
                "location": "Factual landmark or specific location name",
                "transport": {
                   "type": "Flight/Train/Bus/Taxi/Walk",
                   "name": "Factual carrier or service name",
                   "rating": "4.5"
                }
              },
              {
                "period": "Lunch",
                "time": "01:00 PM",
                "activity": "Lunch at restaurant",
                "description": "Gourmet description of the culinary experience and atmosphere.",
                "location": "Restaurant name, neighborhood",
                "restaurant": {
                   "name": "Restaurant Name",
                   "rating": "4.7",
                   "cost": "Rough cost estimate (e.g. ${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}500)"
                },
                "food": [
                   {
                      "name": "Exact, factual local signature dish to try"
                   }
                ]
              },
              {
                "period": "Afternoon",
                "time": "03:00 PM",
                "activity": "Attraction sightseeing",
                "description": "Editorial travel brochure description of the landmark.",
                "location": "Exact historic landmark, park, or tourist hotspot"
              },
              {
                "period": "Evening",
                "time": "07:00 PM",
                "activity": "Dining and sunset/evening highlights",
                "description": "Luxurious evening wrap-up, dinner, or cultural experience.",
                "location": "Evening spot or restaurant",
                "restaurant": {
                   "name": "Evening Diner/Lounge Name",
                   "rating": "4.6",
                   "cost": "Rough cost estimate"
                },
                "food": [
                   {
                      "name": "A delicious local signature dessert or evening snack"
                   }
                ]
              },
              {
                "period": "Logistics Note",
                "time": "Night",
                "activity": "Sightseeing / Logistics Tip",
                "description": "A useful, highly practical travel tip.",
                "location": "Citywide"
              }
            ]
          }
        ],
        "stays": [
           {
              "type": "Budget",
              "name": "Factual hotel name",
              "price": "e.g. ${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}2500/night",
              "rating": "4.2",
              "amenities": ["Free Wifi", "AC", "Breakfast Included"],
              "description": "Cozy, realistic hotel description with exact prices."
           },
           {
              "type": "Mid-range",
              "name": "Factual hotel name",
              "price": "...",
              "rating": "4.5",
              "amenities": ["AC", "Pool", "Gym", "Breakfast Included"],
              "description": "Mid-range premium comfort."
           },
           {
              "type": "Luxury",
              "name": "Factual hotel name",
              "price": "...",
              "rating": "4.9",
              "amenities": ["Infinity Pool", "Spa & Wellness", "Fine Dining", "Free Airport Shuttle"],
              "description": "5-star luxury heritage resort & spa."
           }
        ],
        "budget": {
           "total": "${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}${formData.budget}",
           "categories": [
              { "name": "Transport", "cost": "${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}${Math.round(formData.budget * 0.35)}", "percent": 35 },
              { "name": "Stay", "cost": "${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}${Math.round(formData.budget * 0.30)}", "percent": 30 },
              { "name": "Food & Dining", "cost": "${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}${Math.round(formData.budget * 0.20)}", "percent": 20 },
              { "name": "Sightseeing & Activities", "cost": "${formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '₹'}${Math.round(formData.budget * 0.15)}", "percent": 15 }
           ]
        }
      }

      Double-check that your JSON is 100% syntactically correct and can be parsed with JSON.parse(). Do not include any trailing commas or unescaped quotes. Do not include comments inside the JSON.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Strip markdown code block markers if present
    let cleanJsonText = responseText.trim();
    if (cleanJsonText.includes("```")) {
      cleanJsonText = cleanJsonText.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
    }

    let parsedPlan = null;
    try {
      parsedPlan = JSON.parse(cleanJsonText);
    } catch (parseErr) {
      console.error("Gemini output JSON parsing failed. Attempting deep cleanup.", parseErr);
      const startIdx = cleanJsonText.indexOf('{');
      const endIdx = cleanJsonText.lastIndexOf('}');
      if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
        try {
          const substringJson = cleanJsonText.substring(startIdx, endIdx + 1);
          parsedPlan = JSON.parse(substringJson);
        } catch (subErr) {
          console.error("Deep cleanup extraction also failed.", subErr);
        }
      }
    }

    if (!parsedPlan) {
      throw new Error("Invalid JSON structure returned by Gemini model");
    }

    // Save to database
    const newItinerary = new Itinerary({
      user: req.user.id,
      inputs: formData,
      plan: parsedPlan,
      mlMetadata: mlMetadata
    });

    await newItinerary.save();

    res.json({ plan: parsedPlan, mlMetadata: mlMetadata, itineraryId: newItinerary._id });
  } catch (err) {
    console.error("Gemini API call failed, falling back to local ML Offline Generator:", err.message);
    
    try {
      // 1. If mlMetadata is not populated (e.g. they didn't toggle useML or ML service was down), try to fetch it now for the target destination!
      if (!mlMetadata) {
        try {
          // Map numeric budget to dataset categories (Budget, Mid-Range, Luxury)
          let budgetTier = "Mid-Range";
          if (formData.budget) {
            const budgetNum = Number(formData.budget);
            if (formData.currency === 'USD') {
              budgetTier = budgetNum < 500 ? "Budget" : budgetNum > 2000 ? "Luxury" : "Mid-Range";
            } else if (formData.currency === 'EUR') {
              budgetTier = budgetNum < 450 ? "Budget" : budgetNum > 1800 ? "Luxury" : "Mid-Range";
            } else {
              budgetTier = budgetNum < 30000 ? "Budget" : budgetNum > 80000 ? "Luxury" : "Mid-Range";
            }
          }

          let foodPreference = "Mixed";
          if (formData.food === "Local") foodPreference = "Local";
          else if (formData.food === "FineDining") foodPreference = "Fine Dining";
          else if (formData.food === "Vegetarian") foodPreference = "Vegetarian";

          const mlRes = await fetch('http://127.0.0.1:8000/api/recommend', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              start_location: formData.from || "New Delhi",
              destination: formData.to || "Jaipur, Rajasthan",
              budget_tier: budgetTier,
              pace: formData.pace || "Moderate",
              food_preference: foodPreference
            })
          });

          if (mlRes.ok) {
            mlMetadata = await mlRes.json();
          }
        } catch (mlErr) {
          console.error("Offline recommendation fallback lookup failed:", mlErr.message);
        }
      }

      // 2. Helper function to generate local offline markdown
      const offlinePlanText = generateOfflineItinerary(formData, mlMetadata, numDays);
      const offlinePlanObj = JSON.parse(offlinePlanText);

      // 3. Persist this offline itinerary in database
      const newItinerary = new Itinerary({
        user: req.user.id,
        inputs: { ...formData, useML: true }, // Ensure useML flag is tracked for rendering dashboard
        plan: offlinePlanObj,
        mlMetadata: mlMetadata || {
          confidence: 85,
          matched_travelers: 5,
          transport_mode: formData.transport || "Flight",
          transport_name: "WanderNest Express",
          restaurant: "Traditional local diner",
          best_dish: "Regional Specialty Platter",
          local_transport: "local cab",
          places_visited: ["Scenic Lookout", "Heritage Museum", "Local Arts Market"],
          activities: ["Guided Heritage walk", "Trying local food", "Exploring craft workshops"]
        }
      });

      await newItinerary.save();

      // Return the offline plan and metadata to the client successfully!
      return res.json({
        plan: offlinePlanObj,
        mlMetadata: newItinerary.mlMetadata,
        itineraryId: newItinerary._id,
        offlineFallback: true
      });
    } catch (fallbackErr) {
      console.error("Critical fallback failure:", fallbackErr);
      return res.status(500).json({ message: 'Failed to generate itinerary. Both LLM and offline fallback failed: ' + fallbackErr.message });
    }
  }
});

// GET /api/itinerary
// Get all itineraries for logged in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(itineraries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
