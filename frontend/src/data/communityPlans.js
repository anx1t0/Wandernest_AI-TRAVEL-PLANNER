export const communityPlans = [
  {
    id: "tokyo-5-days",
    title: "Tokyo, Japan",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
    highlights: `Explore Tokyo's dynamic blend of ultra-modern skyscrapers and ancient shinto temples. This 7-day journey takes you through Shinjuku and Shibuya, Asakusa's historic streets, Akihabara's gaming hubs, interactive digital art museums, a day trip to Mt. Fuji, and shopping in high-end Ginza.`,
    weather: {
      conditions: "Spring (March to May) and Autumn (September to November) offer mild temperatures around 15-22°C (59-72°F) with gorgeous cherry blossoms or vibrant autumn foliage.",
      bestTime: "October is highly recommended for stable, pleasant autumn weather and stunning fall foliage throughout Tokyo's parks."
    },
    budget: {
      total: "$1,600 - $2,400",
      dailyAverage: "$150/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$720 - $1080" },
        { name: "Food & Dining", percent: 25, cost: "$400 - $600" },
        { name: "Transport", percent: 15, cost: "$240 - $360" },
        { name: "Activities", percent: 15, cost: "$240 - $360" }
      ],
      tiers: [
        { name: "Budget", desc: "Capsule hotels, convenience store meals (7-Eleven), subway passes.", cost: "$70/day" },
        { name: "Mid-Range", desc: "3-star business hotels, sit-down izakayas, occasional bullet trains.", cost: "$160/day" },
        { name: "Luxury", desc: "5-star luxury hotels, high-end Kaiseki dining, private tour guides.", cost: "$400+/day" }
      ],
      tips: [
        "Buy a Pasmo or Suica card for seamless train and bus transit across Tokyo.",
        "Eat at standing noodle shops and convenience stores (7-Eleven, FamilyMart, Lawson) for delicious, inexpensive meals."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Suica or Pasmo Card (Physical or Apple Wallet)",
          "Universal Travel Adapter (Type A/B)",
          "Pocket Wi-Fi or eSIM for reliable navigation",
          "Comfortable walking shoes (expect 15k+ steps/day)"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Comfortable socks (easy to take off at temples and restaurants)",
          "Layered clothing (weather can change throughout the day)"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport (with at least 6 months validity)",
          "Visit Japan Web registration QR codes"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Neon Shinjuku",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive at Narita/Haneda Airport. Catch N'EX Monorail straight to Shinjuku and check into hotel.", icon: "coffee" },
          { time: "Afternoon", desc: "Head up Shinjuku Metropolitan Government Building for free panoramic skyline views.", icon: "sun" },
          { time: "Evening", desc: "Dine in Omoide Yokocho (Memory Lane), enjoying charcoal-grilled yakitori skewers.", icon: "utensils" },
          { time: "Night", desc: "Explore futuristic Kabukicho and grab a drink in the miniature bars of Golden Gai.", icon: "moon" }
        ],
        food: "Omoide Yokocho for freshly grilled yakitori and local draft beer.",
        stay: "Shinjuku Granbell Hotel or similar in central Shinjuku.",
        optional: ["Visit the famous giant Godzilla Head above the Gracery Hotel."],
        tip: "Golden Gai bars often charge a small cover fee ($5-$10); look for signs indicating 'No Cover Charge' if budgeting."
      },
      {
        day: 2,
        title: "Historic Asakusa & Geeky Akihabara",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Walk through iconic Kaminarimon and down Nakamise Shopping Street to explore Senso-ji, Tokyo's oldest temple.", icon: "coffee" },
          { time: "Afternoon", desc: "Cross Sumida River and ascend Tokyo Skytree, the tallest structure in Japan.", icon: "sun" },
          { time: "Evening", desc: "Dive into Akihabara (Electric Town), browsing multi-story retro video game and anime shops.", icon: "utensils" }
        ],
        food: "Traditional Soba noodles in Asakusa or rich Tsukemen ramen in Akihabara.",
        stay: "Same as Day 1.",
        optional: ["Take a scenic cruise down the Sumida River in a futuristic glass boat."],
        tip: "Senso-ji Temple is less crowded early in the morning, which is perfect for peaceful photography."
      },
      {
        day: 3,
        title: "Harajuku Fashion & Shibuya Scramble",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Stroll Meiji Jingu Shrine in a tranquil, dense forest, then explore takeshita street.", icon: "coffee" },
          { time: "Afternoon", desc: "Shop in Harajuku and Omotesando, then join the sea of people crossing Shibuya Scramble Crossing.", icon: "sun" },
          { time: "Evening", desc: "Head to Shibuya Sky observatory deck at sunset for spectacular outdoor views of Tokyo.", icon: "utensils" }
        ],
        food: "Gyoza Lou in Harajuku for amazing, cheap pan-fried dumplings.",
        stay: "Same as Day 1.",
        optional: ["Shop at the massive Nintendo Tokyo and Pokémon Center Shibuya inside Shibuya PARCO."],
        tip: "Shibuya Sky tickets sell out weeks in advance; make sure to pre-book your sunset time-slot online!"
      },
      {
        day: 4,
        title: "Mount Fuji & Lake Kawaguchiko",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take an early highway express bus from Shinjuku Station to the beautiful Lake Kawaguchiko at the base of Mt. Fuji.", icon: "coffee" },
          { time: "Afternoon", desc: "Climb steps to Chureito Pagoda for the postcard view of the red pagoda framed against Mt. Fuji.", icon: "sun" },
          { time: "Evening", desc: "Relax by the shores of the lake or soak in an outdoor thermal hot spring (onsen) overlooking the mountain.", icon: "utensils" }
        ],
        food: "Warm, hearty Houtou noodles, a local specialty flat-noodle stew in a miso-based broth.",
        stay: "Same as Day 1.",
        optional: ["Rent a bicycle to ride around Lake Kawaguchiko."],
        tip: "Check the live weather camera for Mt. Fuji before departing, as cloud cover can often obscure the mountain."
      },
      {
        day: 5,
        title: "Digital Art & Modern Waterfront Odaiba",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Travel to Toyosu and lose yourself in teamLab Planets, an immersive, interactive digital art museum.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Tsukiji Outer Market, tasting fresh Uni (sea urchin) and Tamagoyaki from local vendors.", icon: "sun" },
          { time: "Evening", desc: "Cross Rainbow Bridge to Odaiba, admire the giant Unicorn Gundam statue, and enjoy sunset over Tokyo Bay.", icon: "utensils" }
        ],
        food: "Incredibly fresh sushi platters at local seafood stalls in Tsukiji Outer Market.",
        stay: "Same as Day 1.",
        optional: ["Relax at Odaiba Seaside Park overlooking the miniature Statue of Liberty replica."],
        tip: "teamLab Planets requires tickets to be booked months in advance and requires walking barefoot through water."
      },
      {
        day: 6,
        title: "Ginza Luxury Shopping & Imperial Palace",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Walk through the beautiful East Gardens of the Imperial Palace, the former site of Edo Castle.", icon: "coffee" },
          { time: "Afternoon", desc: "Stroll down Ginza's high-end shopping district, visiting massive flagship stores like Uniqlo and Ginza Six.", icon: "sun" },
          { time: "Evening", desc: "Head to a subterranean Izakaya in Shinbashi for dinner, joining the local salarymen after work.", icon: "utensils" }
        ],
        food: "Tempura or Tonkatsu (fried pork cutlet) at a highly rated Ginza diner.",
        stay: "Same as Day 1.",
        optional: ["Visit the historic Kabukiza Theatre for a traditional Kabuki performance segment."],
        tip: "On weekends, Ginza's main street is closed to vehicle traffic, creating a massive, pleasant pedestrian walking zone."
      },
      {
        day: 7,
        title: "Day Trip to Kamakura & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Take a 1-hour train ride to Kamakura, a historic seaside town famous for its giant outdoor bronze Buddha statue.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk along the sandy beach of Yuigahama or browse the local shops of Komachi-dori street.", icon: "sun" },
          { time: "Evening", desc: "Return to Tokyo, retrieve your bags, and catch the airport monorail for your departure flight.", icon: "utensils" }
        ],
        food: "Freshly prepared seafood bowls (Kaisen-don) in seaside Kamakura.",
        stay: "Departure.",
        optional: ["Visit Hasedera temple, nested in beautiful green hills."],
        tip: "Store your heavy luggage in lockers at Shinjuku or Tokyo Station before heading to Kamakura for seamless travel."
      }
    ]
  },
  {
    id: "paris-5-days",
    title: "Paris, France",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    highlights: `Indulge in the culinary and cultural wonders of Paris. Climb the Eiffel Tower, admire masterpieces at the Louvre, stroll through Montmartre, explore Versailles, and enjoy a day trip to Disneyland Paris.`,
    weather: {
      conditions: "Spring (April to June) and Fall (September to November) feature crisp, pleasant days with temperatures averaging 12-20°C (54-68°F).",
      bestTime: "May is perfect for walking along the Seine amidst blooming gardens and enjoying sidewalk cafes."
    },
    budget: {
      total: "$1,800 - $2,700",
      dailyAverage: "$180/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$810 - $1215" },
        { name: "Food & Dining", percent: 30, cost: "$540 - $810" },
        { name: "Transport", percent: 10, cost: "$180 - $270" },
        { name: "Activities", percent: 15, cost: "$270 - $405" }
      ],
      tiers: [
        { name: "Budget", desc: "Shared hostels, bakery baguettes, Paris Metro cards, walking.", cost: "$85/day" },
        { name: "Mid-Range", desc: "Boutique hotels, traditional bistros, museum passes.", cost: "$190/day" },
        { name: "Luxury", desc: "5-star historic hotels, Michelin dining, private tour guides.", cost: "$450+/day" }
      ],
      tips: [
        "Purchase the Paris Museum Pass to save on entrance fees and skip ticket lines.",
        "Avoid eating right next to major tourist sites; walk 2-3 streets away for better quality and half the price."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Reusable tote shopping bag",
          "Comfortable, stylish walking shoes",
          "Compact umbrella or raincoat"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Chic Parisian-style layers (trench coat, scarf)",
          "Evening wear for dinner cruises"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport",
          "Eiffel Tower pre-booked time-slot ticket"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Historic Heart & Eiffel Tower",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Check into your boutique hotel in Saint-Germain. Grab a fresh croissant at a local bakery.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk across Pont des Arts to Tuileries Garden. Stroll through the park to Place de la Concorde.", icon: "sun" },
          { time: "Evening", desc: "Head to Champ de Mars to stand beneath the Eiffel Tower. Climb to the summit for sunset views.", icon: "utensils" },
          { time: "Night", desc: "Enjoy a twilight cruise along the Seine River, watching the Eiffel Tower sparkle with lights.", icon: "moon" }
        ],
        food: "Café de Flore for hot chocolate and classic croque-monsieur.",
        stay: "Hotel Crystal or similar in Saint-Germain.",
        optional: ["Visit the Musée de l'Orangerie to view Monet's giant Water Lilies."],
        tip: "The Eiffel Tower sparkles for 5 minutes at the beginning of every hour after sunset."
      },
      {
        day: 2,
        title: "Louvre Museum & Notre Dame",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Enter the Louvre Museum early through the glass pyramid to view the Mona Lisa and Venus de Milo.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk down historic Île de la Cité to marvel at Notre-Dame Cathedral and the stunning stained glass of Sainte-Chapelle.", icon: "sun" },
          { time: "Evening", desc: "Stroll through the beautiful, symmetric Place des Vosges in the historic Marais district.", icon: "utensils" }
        ],
        food: "L'As du Fallafel in the Marais for the world's best, highly-celebrated falafel pita.",
        stay: "Same as Day 1.",
        optional: ["Browse the legendary Shakespeare and Company English bookstore."],
        tip: "Pre-book your Louvre tickets weeks in advance to avoid long pyramid queues."
      },
      {
        day: 3,
        title: "Artistic Montmartre & Sacré-Cœur",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Explore bohemian Montmartre. Climb winding, cobbled streets past charming houses and windmills.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit the iconic white-domed Sacré-Cœur Basilica perched atop the highest hill in Paris for sweeping views.", icon: "sun" },
          { time: "Evening", desc: "Stroll through the lively Place du Tertre, where painters set up easels, then explore nearby vintage shops.", icon: "utensils" }
        ],
        food: "La Maison Rose in Montmartre for traditional French cuisine in a photogenic pink villa.",
        stay: "Same as Day 1.",
        optional: ["Watch a cabaret show at the legendary Moulin Rouge in nearby Pigalle."],
        tip: "Be mindful of street vendors around the steps of Sacré-Cœur who try to tie friendship bracelets on your wrist."
      },
      {
        day: 4,
        title: "Palace of Versailles Day Trip",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take the RER C train from central Paris directly to the opulent Palace of Versailles.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour the breathtaking Hall of Mirrors, the King's Chambers, and stroll through the vast, immaculate gardens.", icon: "sun" },
          { time: "Evening", desc: "Rent a rowing boat on the Grand Canal or explore the rustic, charming Queen's Hamlet.", icon: "utensils" }
        ],
        food: "La Flottille along the Grand Canal in Versailles for a delightful French lunch with a view.",
        stay: "Same as Day 1.",
        optional: ["Visit the Grand Trianon and Petit Trianon palaces."],
        tip: "Versailles is closed on Mondays, so plan your week accordingly! Book passport tickets with timed entry."
      },
      {
        day: 5,
        title: "Musée d'Orsay & Shopping in Marais",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Visit the stunning Musée d'Orsay, housed in a former railway station, to admire works by Van Gogh and Monet.", icon: "coffee" },
          { time: "Afternoon", desc: "Spend your afternoon boutique shopping and gallery-hopping in the trendy Marais district.", icon: "sun" },
          { time: "Evening", desc: "Walk through the Luxembourg Gardens, resting on the iconic green metal chairs by the fountain.", icon: "utensils" }
        ],
        food: "Le Comptoir de La Relais for classic French bistro dishes cooked to gourmet perfection.",
        stay: "Same as Day 1.",
        optional: ["Climb the Arc de Triomphe for panoramic views of the twelve radiating avenues."],
        tip: "Luxembourg Gardens is a great place to buy a baguette, some cheese, and wine for a classic Parisian picnic."
      },
      {
        day: 6,
        title: "Disneyland Paris Magic Day",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Take the RER A train directly to Disneyland Paris (Marne-la-Vallée) and enjoy the magical castle park.", icon: "coffee" },
          { time: "Afternoon", desc: "Ride classic attractions like Space Mountain, Big Thunder Mountain, and explore Adventureland.", icon: "sun" },
          { time: "Evening", desc: "Watch the spectacular Disney Illuminations fireworks show over Sleeping Beauty Castle.", icon: "utensils" }
        ],
        food: "A themed restaurant inside the park or Disney Village.",
        stay: "Same as Day 1.",
        optional: ["Visit Walt Disney Studios Park next door."],
        tip: "Buy tickets online in advance, as tickets are not sold at the theme park entrance gates."
      },
      {
        day: 7,
        title: "Left Bank Literary & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Stroll the Latin Quarter, exploring the Panthéon and the quiet courtyard of the Sorbonne University.", icon: "coffee" },
          { time: "Afternoon", desc: "Browse the historic green booksellers (Bouquinistes) stalls lining the river banks of the Seine.", icon: "sun" },
          { time: "Evening", desc: "Check out of your hotel, enjoy a final cafe espresso, and head to Charles de Gaulle Airport for your flight.", icon: "utensils" }
        ],
        food: "Café de la Mairie for a local Parisian lunch menu.",
        stay: "Departure.",
        optional: ["Take photos at the beautiful Fontaine Saint-Michel."],
        tip: "Pre-book the CDGIA airport taxi or train to avoid last minute traffic rush."
      }
    ]
  },
  {
    id: "rome-4-days",
    title: "Rome, Italy",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
    highlights: `Step back in time to the Roman Empire. Stand inside the Colosseum, tour the Vatican, throw a coin in Trevi, taste handmade pasta, and take a day trip to the historic ruins of Ostia Antica.`,
    weather: {
      conditions: "Spring (April to June) and Fall (September to October) have lovely sunshine and comfortable temperatures around 18-25°C (64-77°F).",
      bestTime: "September offers warm, sunny days, reduced crowds, and pleasant evening breezes."
    },
    budget: {
      total: "$1,300 - $1,900",
      dailyAverage: "$130/day",
      categories: [
        { name: "Accommodation", percent: 40, cost: "$520 - $760" },
        { name: "Food & Dining", percent: 35, cost: "$455 - $665" },
        { name: "Transport", percent: 10, cost: "$130 - $190" },
        { name: "Activities", percent: 15, cost: "$195 - $285" }
      ],
      tiers: [
        { name: "Budget", desc: "Hostels, pizza al taglio (by the slice), public transit or walking.", cost: "$65/day" },
        { name: "Mid-Range", desc: "Charming guesthouses, local trattorias, skip-the-line group tours.", cost: "$140/day" },
        { name: "Luxury", desc: "Historic boutique hotels, fine dining, private Vatican night tours.", cost: "$350+/day" }
      ],
      tips: [
        "Rome is highly walkable; pack comfortable shoes and save heavily on transport costs.",
        "Fill up your water bottle at the city's historic public fountains ('Nasoni') for free, ice-cold drinking water."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Modest clothing for church visits (shoulders & knees covered)",
          "Reusable water bottle (to fill at public fountains)",
          "High SPF sunscreen and sun hat"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Breathable linen shirts and light trousers",
          "Comfortable sneakers with good arch support"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport",
          "Vatican Museum timed-entry digital tickets"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Ancient Rome & Colosseum",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Walk straight into the mighty Colosseum. Explore the arena floor where gladiators once fought.", icon: "coffee" },
          { time: "Afternoon", desc: "Climb Palatine Hill to see the ruins of imperial palaces, then walk down into the historic Roman Forum.", icon: "sun" },
          { time: "Evening", desc: "Walk past Victor Emmanuel II Monument and climb up to Campidoglio for views over the illuminated Forum.", icon: "utensils" }
        ],
        food: "Luzi Trattoria near the Colosseum for classic Cacio e Pepe pasta.",
        stay: "Charming B&B in the Monti district, steps away from the Colosseum.",
        optional: ["Take an underground tour of the Colosseum to see the gladiator dungeons."],
        tip: "Avoid tourist-trap restaurants immediately bordering the Colosseum. Monti district has fantastic local spots."
      },
      {
        day: 2,
        title: "Vatican Treasures & St. Peter's",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Cross the Tiber River to the Vatican City. View masterpieces like Michelangelo's Sistine Chapel ceiling.", icon: "coffee" },
          { time: "Afternoon", desc: "Enter St. Peter's Basilica, the largest church in the world. Climb to the top of the Dome for views.", icon: "sun" },
          { time: "Evening", desc: "Cross historic Ponte Sant'Angelo and stroll through the elegant streets around Piazza Navona.", icon: "utensils" }
        ],
        food: "Pizzeria Da Baffetto for thin, Roman-style wood-fired pizza.",
        stay: "Same as Day 1.",
        optional: ["Visit Castel Sant'Angelo, a fortress once used by Popes as a refuge."],
        tip: "Vatican City enforces a strict dress code. Ensure your knees and shoulders are covered."
      },
      {
        day: 3,
        title: "Baroque Beauties & Pasta Class",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Visit Trevi Fountain early to throw a coin over your shoulder. Continue to the Pantheon, an architectural marvel.", icon: "coffee" },
          { time: "Afternoon", desc: "Climb the Spanish Steps, then walk through the lush gardens of Villa Borghese for beautiful viewpoints.", icon: "sun" },
          { time: "Evening", desc: "Participate in a hands-on pasta and tiramisu making class led by an Italian chef in a traditional apartment.", icon: "utensils" }
        ],
        food: "Your own hand-rolled pasta, paired with local red wine during the cooking class.",
        stay: "Same as Day 1.",
        optional: ["Visit Galleria Borghese for Bernini sculptures and Caravaggio paintings."],
        tip: "Throwing a coin in Trevi Fountain means you'll return to Rome!"
      },
      {
        day: 4,
        title: "Trastevere & Historic Markets",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Explore the bustling outdoor food market of Campo de' Fiori, tasting fresh cheeses and balsamic vinegar.", icon: "coffee" },
          { time: "Afternoon", desc: "Cross the river into Trastevere, Rome's most bohemian neighborhood. Wander through its narrow lanes.", icon: "sun" },
          { time: "Evening", desc: "Relax by the fountain in Piazza di Santa Maria in Trastevere as musicians perform.", icon: "utensils" }
        ],
        food: "Da Enzo al 29 in Trastevere for Carbonara and crispy artichokes.",
        stay: "Same as Day 1.",
        optional: ["Hike up Gianicolo Hill for a breathtaking sunset panorama over the entire city of Rome."],
        tip: "Da Enzo al 29 does not take dinner reservations; arrive 30 minutes before opening to get a table."
      },
      {
        day: 5,
        title: "Ostia Antica Ruins Excursion",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Take a short 30-minute commuter train ride from Rome to the sprawling ruins of Ostia Antica, Rome's ancient seaport.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through exceptionally preserved ancient taverns, baths, apartments, and the grand open-air theater.", icon: "sun" },
          { time: "Evening", desc: "Return to Rome and enjoy a relaxed evening in the trendy Testaccio neighborhood.", icon: "utensils" }
        ],
        food: "Felice a Testaccio for Rome's absolute best, highly-celebrated Tonnarelli Cacio e Pepe.",
        stay: "Same as Day 1.",
        optional: ["Visit the Testaccio market during the afternoon for street eats."],
        tip: "Ostia Antica is heavily shaded by pine trees, making it a very pleasant walking alternative to the sun-baked Roman Forum."
      },
      {
        day: 6,
        title: "Appian Way & Catacombs",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Walk or rent a bicycle to travel the Appian Way (Via Appia Antica), Rome's oldest and most strategic historic military road.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the dark, mysterious underground chambers of the Catacombs of St. Callixtus with a guide.", icon: "sun" },
          { time: "Evening", desc: "Dine at a rustic countryside restaurant along the ancient cobbled highway.", icon: "utensils" }
        ],
        food: "L'Archeologia along the Appian Way for refined Roman cooking in a historic garden.",
        stay: "Same as Day 1.",
        optional: ["Explore the towering stone ruins of the Villa of the Quintilii."],
        tip: "Appian Way is closed to automobile traffic on Sundays, making it the perfect day for cycling."
      },
      {
        day: 7,
        title: "Tivoli Gardens & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Take a morning bus or train to Tivoli. Tour the spectacular Villa d'Este, famous for its magnificent Renaissance fountain gardens.", icon: "coffee" },
          { time: "Afternoon", desc: "Return to Rome, retrieve your packed bags from your B&B, and catch the Leonardo Express train to Fiumicino Airport.", icon: "sun" }
        ],
        food: "Sibilla in Tivoli for traditional dining next to ancient Roman temple ruins.",
        stay: "Departure.",
        optional: ["Visit Hadrian's Villa (Villa Adriana) in Tivoli if time permits."],
        tip: "The Leonardo Express train runs every 15 minutes and takes only 32 minutes straight to the airport terminal."
      }
    ]
  },
  {
    id: "nyc-5-days",
    title: "New York City, USA",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
    highlights: `Experience the buzzing, electric energy of the Big Apple. Climb the Empire State, picnic in Central Park, watch a Broadway show, walk the Brooklyn Bridge, sail past Liberty, and spend a day at Coney Island's beaches.`,
    weather: {
      conditions: "Spring (April to June) and Fall (September to November) are beautiful, featuring crisp days around 12-22°C (54-72°F).",
      bestTime: "October is widely considered the best month, offering stunning fall foliage in Central Park and cool walking weather."
    },
    budget: {
      total: "$2,200 - $3,400",
      dailyAverage: "$200/day",
      categories: [
        { name: "Accommodation", percent: 50, cost: "$1100 - $1700" },
        { name: "Food & Dining", percent: 25, cost: "$550 - $850" },
        { name: "Transport", percent: 10, cost: "$220 - $340" },
        { name: "Activities", percent: 15, cost: "$330 - $510" }
      ],
      tiers: [
        { name: "Budget", desc: "Hostels in Brooklyn/Queens, dollar-slice pizza, MetroCard, free sights.", cost: "$100/day" },
        { name: "Mid-Range", desc: "Midtown hotels, sit-down dinners, Broadway rush/TKTS tickets.", cost: "$220/day" },
        { name: "Luxury", desc: "5-star luxury suites, Michelin dining, private helicopter tours.", cost: "$600+/day" }
      ],
      tips: [
        "Get a 7-day Unlimited Ride MetroCard for easy, unlimited subway transit.",
        "Use 'Broadway Roulette' or queue at the TKTS booth in Times Square for half-price theater tickets."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Sturdy, broken-in walking shoes (essential for concrete pavements)",
          "High capacity power bank for long days",
          "Hand sanitizer & pocket tissues"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Smart casual outfits (Broadway and dining appropriate)",
          "Rainwear / light umbrella"
        ]
      },
      {
        category: "Documents",
        items: [
          "Government ID / Passport",
          "Digital Broadway tickets"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Midtown Marvels & Times Square",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in NYC, check into hotel. Grab a classic New York bagel with cream cheese and lox.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Grand Central Terminal, admire the architecture, and walk up Fifth Avenue.", icon: "sun" },
          { time: "Evening", desc: "Climb Top of the Rock deck at Rockefeller Center for views of the Empire State Building at sunset.", icon: "utensils" },
          { time: "Night", desc: "Walk into Times Square as the sun goes down to experience the blinding neon billboards.", icon: "moon" }
        ],
        food: "Joe's Pizza for a classic, perfect New York street slice.",
        stay: "Pod 39 Hotel or similar in Midtown East.",
        optional: ["Visit the New York Public Library Rose Main Reading Room."],
        tip: "Avoid eating in Times Square itself; walk a few avenues west to Hell's Kitchen for amazing food."
      },
      {
        day: 2,
        title: "Central Park & Museum Mile",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Rent a bicycle or walk through Central Park, visiting iconic Bow Bridge and Bethesda Terrace.", icon: "coffee" },
          { time: "Afternoon", desc: "Spend hours exploring the Metropolitan Museum of Art (The Met), viewing royal treasures.", icon: "sun" },
          { time: "Evening", desc: "Walk down elegant Upper East Side and grab a cookie at Levain Bakery.", icon: "utensils" }
        ],
        food: "Shake Shack in the Upper East Side for delicious, quick burgers.",
        stay: "Same as Day 1.",
        optional: ["Visit the Museum of Modern Art (MoMA) to see Starry Night."],
        tip: "The Met is massive; grab a map and pick 2-3 galleries (like the Temple of Dendur) to focus on."
      },
      {
        day: 3,
        title: "Brooklyn Bridge & DUMBO",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Walk across the iconic Brooklyn Bridge early from Manhattan to Brooklyn, enjoying skyline views.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore DUMBO, snapping the famous photo of the Manhattan Bridge, then stroll along the waterfront park.", icon: "sun" },
          { time: "Evening", desc: "Take the subway to Williamsburg, exploring vintage flea markets and street art.", icon: "utensils" }
        ],
        food: "Juliana's Pizza in DUMBO for coal-fired brick oven pizza.",
        stay: "Same as Day 1.",
        optional: ["Ride the historic Jane's Carousel by the water in DUMBO."],
        tip: "Walking the Brooklyn Bridge is best done early (before 9:00 AM) to avoid heavy tourist crowds."
      },
      {
        day: 4,
        title: "Statue of Liberty & Financial District",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Head to Battery Park and board the ferry to Liberty Island to view the Statue of Liberty up close.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through Wall Street, snap a photo with Charging Bull, and visit the 9/11 Memorial Pools.", icon: "sun" },
          { time: "Evening", desc: "Ascend One World Observatory deck, then explore the futuristic Oculus transit hub.", icon: "utensils" }
        ],
        food: "Katz's Delicatessen on the Lower East Side for a legendary hot pastrami sandwich.",
        stay: "Same as Day 1.",
        optional: ["Take the free Staten Island Ferry at sunset for excellent views."],
        tip: "Katz's Deli is cash-only; be sure to keep your ticket safe as you enter, as losing it results in a heavy fee!"
      },
      {
        day: 5,
        title: "High Line, Chelsea & Broadway Show",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Walk the High Line, a beautiful elevated park built on a historic freight rail line.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Chelsea Market for lunch, then walk past the architectural honeycomb structure of Vessel.", icon: "sun" },
          { time: "Evening", desc: "Dine in the theater district before heading to a Broadway theater to watch a world-class live musical.", icon: "utensils" }
        ],
        food: "Los Tacos No. 1 in Chelsea Market for the best, most authentic street tacos.",
        stay: "Same as Day 1.",
        optional: ["Visit the Whitney Museum of American Art at the southern base of the High Line."],
        tip: "Enter Broadway digital ticket lotteries online 24-48 hours before the show for a chance to win $40 seats!"
      },
      {
        day: 6,
        title: "SoHo Shopping & Greenwich Village Speakeasies",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Walk the cast-iron historic district of SoHo, browsing boutique shops and art galleries.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Greenwich Village, tracing paths of jazz legends, and relax in Washington Square Park.", icon: "sun" },
          { time: "Evening", desc: "Participate in a walking tour of historic prohibition-era speakeasies behind hidden bookcases.", icon: "utensils" }
        ],
        food: "Minetta Tavern in the Village for its world-famous, decadent Black Label Burger.",
        stay: "Same as Day 1.",
        optional: ["Catch a late-night stand-up comedy show at the Comedy Cellar."],
        tip: "Book the Comedy Cellar table reservations weeks in advance, as slots sell out nightly."
      },
      {
        day: 7,
        title: "Coney Island Fun & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Take the Q subway line down to Coney Island. Stroll along the ocean boardwalk and grab a classic Nathan's hot dog.", icon: "coffee" },
          { time: "Afternoon", desc: "Ride the legendary wooden Cyclone roller coaster at Luna Park, then walk on the sandy beach.", icon: "sun" },
          { time: "Evening", desc: "Catch the subway back, retrieve your bags from the hotel lobby, and catch a taxi to JFK Airport.", icon: "utensils" }
        ],
        food: "Nathan's Famous on Coney Island for original crinkle-cut fries and hot dogs.",
        stay: "Departure.",
        optional: ["Visit the New York Aquarium next to the boardwalk."],
        tip: "Taxis to JFK have a flat fare from Manhattan; allow at least 1.5 hours transit time during rush hour."
      }
    ]
  },
  {
    id: "bali-5-days",
    title: "Bali, Indonesia",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    highlights: `Discover the tropical paradise of Bali. Immerse in Ubud's temples, relax on Seminyak's beaches, witness Uluwatu's sunset fire dance, climb Mt. Batur at sunrise, and sail to Nusa Penida's pristine cliffs.`,
    weather: {
      conditions: "Dry season (April to October) offers warm, sunny days around 27-31°C (80-88°F). Wet season (November to March) has high humidity and heavy tropical rain showers.",
      bestTime: "June is ideal for perfect tropical beach weather and lower humidity before the peak summer crowds arrive."
    },
    budget: {
      total: "$800 - $1,400",
      dailyAverage: "$70/day",
      categories: [
        { name: "Accommodation", percent: 40, cost: "$320 - $560" },
        { name: "Food & Dining", percent: 30, cost: "$240 - $420" },
        { name: "Transport", percent: 15, cost: "$120 - $210" },
        { name: "Activities", percent: 15, cost: "$120 - $210" }
      ],
      tiers: [
        { name: "Budget", desc: "Homestays, eating at local Warungs, renting a scooter.", cost: "$35/day" },
        { name: "Mid-Range", desc: "Private pool villas, trendy cafes, guided day tours.", cost: "$80/day" },
        { name: "Luxury", desc: "5-star luxury resorts, fine-dining, private yacht charters.", cost: "$250+/day" }
      ],
      tips: [
        "Rent a scooter for cheap, fast travel, but only if you have an international license.",
        "Eat at local 'Warungs' to enjoy authentic Nasi Goreng or Mie Goreng for under $3."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Reef-safe biodegradable sunscreen",
          "High-strength mosquito repellent",
          "Sarong for temple visits",
          "Waterproof dry bag"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Breathable cotton/linen clothes",
          "Flip flops and light hiking sneakers"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport",
          "eVisa/Visa on Arrival confirmation"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Cultural Heart of Ubud",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Bali, check into your jungle-facing villa in Ubud. Enjoy a fresh coconut by the pool.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through sacred Ubud Monkey Forest, observing monkeys in their moss-covered stone temple habitat.", icon: "sun" },
          { time: "Evening", desc: "Stroll around Ubud Palace and shop for hand-woven rattan bags at the Ubud Art Market.", icon: "utensils" }
        ],
        food: "Sun Sun Warung in Ubud for traditional Balinese Nasi Campur.",
        stay: "Alila Ubud or a private luxury pool villa.",
        optional: ["Take an evening yoga class at the world-famous Yoga Barn."],
        tip: "Secure your sunglasses and phones before entering the Monkey Forest; the monkeys are quick!"
      },
      {
        day: 2,
        title: "Rice Terraces & Water Temples",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Wake up early to visit Tegallalang Rice Terraces. Walk down the green steps and snap photos.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit Tirta Empul holy water temple, and participate in a spiritual purification ritual in the spring pools.", icon: "sun" },
          { time: "Evening", desc: "Stop by scenic Tegenungan Waterfall, walking down to the base to feel the cool mist.", icon: "utensils" }
        ],
        food: "Sari Organik for organic, farm-to-table dining overlooking serene rice fields.",
        stay: "Same as Day 1.",
        optional: ["Take a Balinese cooking class at an organic farm."],
        tip: "Rent a temple sash and sarong at Tirta Empul to participate in the water ritual."
      },
      {
        day: 3,
        title: "Nusa Penida Island Adventure",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Take a fast speedboat from Sanur Harbor to the rugged island of Nusa Penida.", icon: "coffee" },
          { time: "Afternoon", desc: "Peer down at the jaw-dropping T-Rex shaped cliff at Kelingking Beach.", icon: "sun" },
          { time: "Evening", desc: "Visit Angel's Billabong (infinity pool) and Broken Beach, marveling at the natural stone arch.", icon: "utensils" }
        ],
        food: "Penida Espresso for healthy smoothie bowls and local Indonesian dishes.",
        stay: "Same as Day 1.",
        optional: ["Go snorkeling with giant Manta Rays at Manta Point."],
        tip: "Hiring a private car and driver in Nusa Penida is highly recommended over riding scooters."
      },
      {
        day: 4,
        title: "Uluwatu Cliffs & Kecak Dance",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Travel south. Relax on the stunning white sands of Padang Padang Beach.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit the dramatic Uluwatu Temple, perched on a sheer cliff face 70 meters above the ocean.", icon: "sun" },
          { time: "Evening", desc: "Watch the sunset Kecak Fire Dance, a traditional performance held in a cliffside amphitheater.", icon: "utensils" },
          { time: "Night", desc: "Head to Jimbaran Bay for a romantic seafood dinner served directly on the sandy beach.", icon: "moon" }
        ],
        food: "Jimbaran Beach Club for a fresh seafood feast of grilled snapper and prawns.",
        stay: "Same as Day 1.",
        optional: ["Visit Single Fin beach club in Uluwatu for surfing views."],
        tip: "Arrive at the Uluwatu amphitheater by 5:00 PM to secure a seat, as it sells out daily!"
      },
      {
        day: 5,
        title: "Seminyak Beaches & Sunset Cocktails",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Check out of Ubud. Spend your morning shopping at stylish boutiques in Seminyak.", icon: "coffee" },
          { time: "Afternoon", desc: "Relax by the beach under a colorful umbrella, listening to the crashing waves.", icon: "sun" },
          { time: "Evening", desc: "Head to Potato Head Beach Club, relaxing on a daybed with tropical cocktails as the sun sets.", icon: "utensils" }
        ],
        food: "Sisterfields Cafe for gourmet Australian-style brunch and coffee.",
        stay: "Amadea Resort & Villas or similar boutique resort in Seminyak.",
        optional: ["Treat yourself to a luxurious 2-hour Balinese massage at a professional spa."],
        tip: "Grab a beanbag chair at Double Six Beach for a more relaxed sunset beer experience."
      },
      {
        day: 6,
        title: "Mount Batur Sunrise Volcano Trek",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Wake up at 2:00 AM. Hike up Mount Batur volcano in the dark, reaching the summit for a stunning sunrise above the clouds.", icon: "coffee" },
          { time: "Afternoon", desc: "Soak in the local Toya Devasya hot springs, resting your tired muscles while enjoying mountain views.", icon: "sun" },
          { time: "Evening", desc: "Head back to Seminyak and enjoy a quiet, relaxed dinner at a garden restaurant.", icon: "utensils" }
        ],
        food: "Naughty Nuri's Seminyak for legendary, delicious flame-grilled pork ribs.",
        stay: "Same as Day 5.",
        optional: ["Visit a local civet Luwak coffee plantation in Kintamani."],
        tip: "Pack a light windbreaker and headlamp, as the summit of Mt. Batur can get windy and cold before sunrise."
      },
      {
        day: 7,
        title: "Canggu Hippie Vibe & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Explore the bohemian hipster town of Canggu, viewing street art and walking black sand beaches.", icon: "coffee" },
          { time: "Afternoon", desc: "Grab a final smoothie bowl and head to Ngurah Rai International Airport for departure.", icon: "sun" }
        ],
        food: "The Lawn Canggu for beachfront lunch and fresh tropical juices.",
        stay: "Departure.",
        optional: ["Surf lessons at Batu Bolong beach."],
        tip: "Leave for the airport 3-4 hours early, as traffic on the roads of Canggu and Kuta can be heavy."
      }
    ]
  },
  {
    id: "barcelona-5-days",
    title: "Barcelona, Spain",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
    highlights: `Experience the vibrant Catalan capital. Marvel at Antoni Gaudi's masterworks, including Sagrada Familia and Park Guell, explore the Gothic Quarter, relax on beaches, and visit Montserrat.`,
    weather: {
      conditions: "Spring (May to June) and Fall (September to October) offer beautiful sunny days around 20-25°C (68-77°F).",
      bestTime: "June is highly recommended for warm beach weather and energetic summer festivals like Primavera Sound."
    },
    budget: {
      total: "$1,500 - $2,300",
      dailyAverage: "$140/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$675 - $1035" },
        { name: "Food & Dining", percent: 30, cost: "$450 - $690" },
        { name: "Transport", percent: 10, cost: "$150 - $230" },
        { name: "Activities", percent: 15, cost: "$225 - $345" }
      ],
      tiers: [
        { name: "Budget", desc: "Shared dorms, supermarket tapas, T-casual Metro cards.", cost: "$70/day" },
        { name: "Mid-Range", desc: "Boutique apartments, traditional tapas bars, Gaudi entrance tickets.", cost: "$150/day" },
        { name: "Luxury", desc: "5-star hotels on Passeig de Gracia, upscale dining, private yacht charters.", cost: "$350+/day" }
      ],
      tips: [
        "Buy the 'T-casual' travel card for discounted public transit rides.",
        "Be extremely vigilant against pickpockets on La Rambla and in crowded metro stations."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Anti-theft daypack or cross-body bag",
          "Quick-dry beach towel & swimwear",
          "Rechargeable battery pack"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Lightweight, stylish summer outfits",
          "Comfortable sneakers for heavy walking"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport",
          "Sagrada Familia skip-the-line digital tickets"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Gaudi's Masterpieces",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Check into central hotel. Head straight to monumental Sagrada Familia, Gaudi's unfinished basilica.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk down Passeig de Gràcia to marvel at organic facades of Casa Batlló and La Pedrera.", icon: "sun" },
          { time: "Evening", desc: "Stroll La Rambla, tasting fresh fruit juices and ham at La Boqueria Market.", icon: "utensils" }
        ],
        food: "El Nacional on Passeig de Gràcia for a stunning multi-concept Spanish dining experience.",
        stay: "Hotel H10 Metropolitan or similar near Plaça de Catalunya.",
        optional: ["Climb one of the towers of the Sagrada Familia for views."],
        tip: "Sagrada Familia tickets sell out weeks in advance; make sure to pre-book online!"
      },
      {
        day: 2,
        title: "Historic Gothic Quarter",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Lose yourself in the narrow, labyrinthine streets of the Gothic Quarter, discovering hidden medieval squares.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit Gothic Cathedral of Barcelona and walk past the historic bridge on Carrer del Bisbe.", icon: "sun" },
          { time: "Evening", desc: "Explore the trendy El Born district, visiting the Picasso Museum, then relax in Plaça Reial.", icon: "utensils" },
          { time: "Night", desc: "Enjoy a late-night tapas crawling tour, hopping from one traditional bar to another.", icon: "moon" }
        ],
        food: "El Xampanyet in El Born for fresh anchovies and sparkling cava.",
        stay: "Same as Day 1.",
        optional: ["Visit the historic Basilica of Santa Maria del Mar."],
        tip: "In Spain, it is customary to stand at the bar for a quick tapa and drink before moving on."
      },
      {
        day: 3,
        title: "Park Güell & Sunset View",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Explore colorful Park Güell, taking photos with the famous mosaic dragon.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through bohemian Gràcia, known for quiet plazas and local shops.", icon: "sun" },
          { time: "Evening", desc: "Take a taxi up to Bunkers del Carmel, an old military bunker offering 360-degree sunset views.", icon: "utensils" }
        ],
        food: "La Pubilla in Gràcia for an exceptional lunch menu of traditional Catalan dishes.",
        stay: "Same as Day 1.",
        optional: ["Visit the Gaudi House Museum inside Park Güell."],
        tip: "Bring a jacket and some snacks to the Bunkers del Carmel, as it can get windy."
      },
      {
        day: 4,
        title: "Montjuïc Hill & Olympic Ring",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take the funicular up Montjuïc Hill. Walk around the historic Montjuïc Castle.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the Olympic Stadium from the 1992 Games and the Joan Miró Foundation museum.", icon: "sun" },
          { time: "Evening", desc: "Walk down to the National Art Museum of Catalonia and watch the Magic Fountain show.", icon: "utensils" }
        ],
        food: "Quimet & Quimet in Poble Sec for legendary, gourmet canned tapas served on bread.",
        stay: "Same as Day 1.",
        optional: ["Take the Montjuïc Cable Car for aerial views."],
        tip: "Check operating hours for the Magic Fountain show online beforehand, as schedules vary."
      },
      {
        day: 5,
        title: "Barceloneta Beach & Sea Breeze",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Spend a relaxing morning on the golden sands of Barceloneta Beach or walking the boardwalk.", icon: "coffee" },
          { time: "Afternoon", desc: "Indulge in a classic, giant pan of seafood Paella at a beachfront restaurant.", icon: "sun" },
          { time: "Evening", desc: "Walk through Ciutadella Park, admiring the monumental waterfall fountain.", icon: "utensils" }
        ],
        food: "7 Portes for some of the most historic, authentic seafood Paella in Barcelona.",
        stay: "Same as Day 1.",
        optional: ["Visit the Barcelona Aquarium near Port Vell."],
        tip: "Always order Paella for lunch rather than dinner; it is a heavy dish that locals eat in the afternoon."
      },
      {
        day: 6,
        title: "Montserrat Mountain Sanctuary",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Take an early commuter train to the jagged mountain peaks of Montserrat, visiting the multi-century old monastery.", icon: "coffee" },
          { time: "Afternoon", desc: "Listen to the famous boys' choir (L'Escolania) and hike up paths for breathtaking panoramic valley views.", icon: "sun" },
          { time: "Evening", desc: "Return to Barcelona and relax with refreshing Sangria at an outdoor square.", icon: "utensils" }
        ],
        food: "Restaurant Abat Cisneros in Montserrat for traditional mountain cuisine.",
        stay: "Same as Day 1.",
        optional: ["Take the Sant Joan funicular to the mountain summit."],
        tip: "Arrive at the basilica by noon if you wish to see and touch the famous statue of the Black Madonna."
      },
      {
        day: 7,
        title: "Sitges Beach Day & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Take a 30-minute train south to the charming, artistic coastal town of Sitges.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through the beautiful white-washed houses, browse local galleries, and relax on the beach.", icon: "sun" },
          { time: "Evening", desc: "Return to Barcelona, head to the airport, and catch your return flight home.", icon: "utensils" }
        ],
        food: "La Nansa in Sitges for traditional coastal rice dishes.",
        stay: "Departure.",
        optional: ["Visit the historic Maricel Museum overlooking the sea."],
        tip: "Sitges is highly popular; purchase your train ticket early to avoid station queue lines."
      }
    ]
  },
  {
    id: "cairo-egypt-4-days",
    title: "Cairo & Giza, Egypt",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&q=80&w=800",
    highlights: `Embark on an ancient, magical journey. Stand before the Pyramids and Sphinx, view King Tut's treasures, sail the Nile in a felucca, and explore historical Alexandria along the Mediterranean shore.`,
    weather: {
      conditions: "Cool season (November to March) offers wonderful sightseeing weather around 18-24°C (64-75°F).",
      bestTime: "December and January are ideal for comfortable daytime temperatures perfect for exploring massive ruins."
    },
    budget: {
      total: "$1,100 - $1,600",
      dailyAverage: "$90/day",
      categories: [
        { name: "Accommodation", percent: 40, cost: "$440 - $640" },
        { name: "Food & Dining", percent: 25, cost: "$275 - $400" },
        { name: "Transport", percent: 15, cost: "$165 - $240" },
        { name: "Activities", percent: 20, cost: "$220 - $320" }
      ],
      tiers: [
        { name: "Budget", desc: "Local guesthouses, street food (Koshary), public transit or Uber.", cost: "$45/day" },
        { name: "Mid-Range", desc: "4-star hotels with pyramid views, local restaurants, hired private day drivers.", cost: "$100/day" },
        { name: "Luxury", desc: "5-star historic Nile-view hotels, luxury Nile cruises, private Egyptologist guides.", cost: "$250+/day" }
      ],
      tips: [
        "Use Uber for traveling around Cairo; it is extremely cheap and avoids fare disputes.",
        "Always carry small cash bills of Egyptian Pounds (EGP) for tipping ('Baksheesh'), which is custom."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Wide-brimmed sun hat & high SPF sunscreen",
          "Comfortable, closed-toe walking shoes",
          "Light scarf or shawl"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Loose, breathable, modest clothing",
          "Light jacket for cooler desert nights"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport (valid for at least 6 months)",
          "eVisa printout or $25 cash for Visa on Arrival"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Giza Pyramids & Sphinx",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Cairo, check into your hotel overlooking the Pyramids. Start your adventure early at the Giza Plateau.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit panoramic viewpoint for photos, take a camel ride, and visit the mysterious Great Sphinx.", icon: "sun" },
          { time: "Evening", desc: "Relax at a rooftop restaurant, watching the sun set behind the ancient stone monuments.", icon: "utensils" },
          { time: "Night", desc: "Watch the Pyramids Sound and Light Show, observing the ancient structures illuminated.", icon: "moon" }
        ],
        food: "Abou Shakra near the Pyramids for mixed grilled kebabs and kofta.",
        stay: "Steigenberger Pyramids Cairo or similar.",
        optional: ["Go inside the Great Pyramid (requires separate ticket)."],
        tip: "Be prepared for aggressive street vendors. A firm, polite 'La, Shukran' is highly effective."
      },
      {
        day: 2,
        title: "Museum Treasures & Citadel",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Explore the legendary Egyptian Museum in Tahrir Square, viewing King Tut's solid gold mask.", icon: "coffee" },
          { time: "Afternoon", desc: "Ascend to the Citadel of Saladin and tour the spectacular Great Mosque of Muhammad Ali.", icon: "sun" },
          { time: "Evening", desc: "Walk through Al-Azhar Park, offering sweeping views of the city at sunset.", icon: "utensils" }
        ],
        food: "Koshary Abou Tarek for Cairo's most famous bowl of Koshary.",
        stay: "Same as Day 1.",
        optional: ["Explore the National Museum of Egyptian Civilization (NMEC)."],
        tip: "Koshary is a delicious, filling, and incredibly cheap vegan dish that is an Egyptian staple."
      },
      {
        day: 3,
        title: "Islamic Cairo & Khan el-Khalili",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Wander through old Coptic Cairo, visiting the Hanging Church and Ben Ezra Synagogue.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Islamic Cairo, walking down Al-Muizz Street past magnificent medieval mosques.", icon: "sun" },
          { time: "Evening", desc: "Get lost in the vibrant alleys of the historic Khan el-Khalili bazaar, shopping for spices.", icon: "utensils" },
          { time: "Night", desc: "Sit in the historic El Fishawy Cafe, sipping traditional mint tea.", icon: "moon" }
        ],
        food: "Naghib Mahfouz Cafe inside Khan el-Khalili for upscale Egyptian dishes.",
        stay: "Same as Day 1.",
        optional: ["Climb the minarets of Bab Zuweila gate for views of the old city."],
        tip: "Haggling is mandatory in Khan el-Khalili. Start by offering 50% of the asking price."
      },
      {
        day: 4,
        title: "Alexandria Historical Day Trip",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take an early 2-hour train north to Alexandria, the legendary city founded by Alexander the Great along the Mediterranean.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the grand Bibliotheca Alexandrina, the Citadel of Qaitbay, and the Roman Amphitheater.", icon: "sun" },
          { time: "Evening", desc: "Walk the scenic sea corniche before taking the evening return train back to Cairo.", icon: "utensils" }
        ],
        food: "Fish Market in Alexandria for freshly caught Mediterranean seafood served overlooking the water.",
        stay: "Same as Day 1.",
        optional: ["Visit the Catacombs of Kom El Shoqafa."],
        tip: "The train between Cairo and Alexandria is very comfortable; book first-class seats online beforehand."
      },
      {
        day: 5,
        title: "Saqqara & Step Pyramids Excursion",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Drive south to Saqqara, the massive ancient burial ground containing the famous Step Pyramid of Djoser.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the ancient ruins of Memphis, Egypt's first capital, viewing the giant statue of Ramesses II.", icon: "sun" },
          { time: "Evening", desc: "Return to Cairo and relax with a twilight walk through the trendy Zamalek neighborhood.", icon: "utensils" }
        ],
        food: "Zooba in Zamalek for modern, gourmet twists on traditional Egyptian street food.",
        stay: "Same as Day 1.",
        optional: ["Go inside the Red Pyramid at nearby Dahshur."],
        tip: "Saqqara has far fewer tourists than Giza, allowing for a much more peaceful and spiritual exploration."
      },
      {
        day: 6,
        title: "Nile Sunset Felucca & Dinner Cruise",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Visit the massive Mosque of Sultan Hassan, a masterpiece of Mamluk architecture.", icon: "coffee" },
          { time: "Afternoon", desc: "Take a private sunset cruise down the historic Nile River on a traditional wooden felucca.", icon: "sun" },
          { time: "Evening", desc: "Enjoy a luxury dinner cruise on a Nile yacht, featuring traditional belly dance and Tanoura Sufi performers.", icon: "utensils" }
        ],
        food: "Farewell dinner buffet of hot mezze and grilled meats aboard the Nile cruise ship.",
        stay: "Same as Day 1.",
        optional: ["Ascend the landmark Cairo Tower for 360-degree city views."],
        tip: "Feluccas can be hired directly from the docks in Garden City; negotiate a fixed hourly rate before boarding."
      },
      {
        day: 7,
        title: "El-Moez Street & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Do some last minute souvenir shopping for Egyptian cotton and spices in historic lanes.", icon: "coffee" },
          { time: "Afternoon", desc: "Check out of your hotel, enjoy a final cup of Turkish coffee, and head to Cairo Airport.", icon: "sun" }
        ],
        food: "Felfela for classic Egyptian taameya (falafel) and ful mudammas.",
        stay: "Departure.",
        optional: ["Visit the Museum of Islamic Art if time permits."],
        tip: "Arrive at Cairo Airport 3 hours early, as security checks are highly rigorous."
      }
    ]
  },
  // ==================== NEW 10 INDIAN DESTINATIONS (ALL UPGRADED TO 7 DAYS) ====================
  {
    id: "taj-mahal-4-days",
    title: "Agra & Taj Mahal, UP",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
    highlights: `Witness the architectural majesty of the Taj Mahal—the world's ultimate monument to love. Explore Agra, Fatehpur Sikri, the bird sanctuary at Bharatpur, and the sacred towns of Mathura & Vrindavan.`,
    weather: {
      conditions: "Winter (October to March) offers beautiful, mild days around 12-25°C (54-77°F).",
      bestTime: "November to February is highly recommended for cool, pleasant sightseeing and clear views."
    },
    budget: {
      total: "$600 - $950",
      dailyAverage: "$45/day",
      categories: [
        { name: "Accommodation", percent: 40, cost: "$240 - $380" },
        { name: "Food & Dining", percent: 30, cost: "$180 - $285" },
        { name: "Transport", percent: 15, cost: "$90 - $140" },
        { name: "Activities", percent: 15, cost: "$90 - $145" }
      ],
      tiers: [
        { name: "Budget", desc: "Boutique backpacker hostels, street food (Petha), auto-rickshaws.", cost: "$20/day" },
        { name: "Mid-Range", desc: "3-star heritage hotels, Mughlai garden restaurants, pre-paid taxis.", cost: "$50/day" },
        { name: "Luxury", desc: "5-star hotels with private Taj views, fine-dining, private historians.", cost: "$150+/day" }
      ],
      tips: [
        "Pre-book the Taj Mahal tickets online to avoid massive early morning queues.",
        "Taj Mahal is closed on Fridays, so ensure your itinerary accounts for this!"
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Comfortable walking shoes (long paved walks)",
          "Rechargeable hand fan",
          "Sun hat and high SPF sunscreen"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Loose, modest cotton clothes",
          "Light scarf for dust and head cover"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / Government ID card",
          "Online pre-booked monument entry tickets"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Agra & Yamuna Sunset",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Agra via the Gatimaan Express from New Delhi. Check into hotel and enjoy hot masala chai.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore bustling Sadar Bazaar, viewing marble-inlay handicrafts.", icon: "sun" },
          { time: "Evening", desc: "Head to Mehtab Bagh (Moonlight Garden) on the opposite river bank for sunset views of the Taj Mahal.", icon: "utensils" }
        ],
        food: "Pinch of Spice for rich Butter Chicken and garlic naans.",
        stay: "Howard Plaza The Fern or similar in Taj Ganj area.",
        optional: ["Watch the Mohabbat-the-Taj theatrical dance show in the evening."],
        tip: "Taj Ganj has many rooftop restaurants that offer spectacular budget views of the Taj."
      },
      {
        day: 2,
        title: "The Taj Mahal Sunrise & Agra Fort",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Wake up at 5:00 AM. Enter the East Gate at sunrise to watch white marble turn soft pink.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour the massive red-sandstone Agra Fort, exploring the royal palaces of Shah Jahan.", icon: "sun" },
          { time: "Evening", desc: "Visit the delicate Tomb of I'timad-ud-Daulah, affectionately known as the 'Baby Taj'.", icon: "utensils" }
        ],
        food: "Mama Chicken Mama Franky House for legendary Mughlai rolls and kebabs.",
        stay: "Same as Day 1.",
        optional: ["Hire a professional photographer inside the monument gates."],
        tip: "No large bags or tripods are allowed inside the Taj Mahal security gates."
      },
      {
        day: 3,
        title: "Fatehpur Sikri Ghost City",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Take a short drive to Fatehpur Sikri, the magnificent empty red-stone city built by Emperor Akbar.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour Buland Darwaza (world's highest gate) and the white-marble shrine of Salim Chishti.", icon: "sun" },
          { time: "Evening", desc: "Return to Agra and explore local artisan spice markets.", icon: "utensils" }
        ],
        food: "Esphahan at The Oberoi Amarvilas for premium, classical fine-dining.",
        stay: "Same as Day 1.",
        optional: ["Visit Akbar's Tomb in nearby Sikandra."],
        tip: "Tie a red thread at Salim Chishti's tomb while making a wish, which is a local tradition."
      },
      {
        day: 4,
        title: "Mathura & Vrindavan Day Trip",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take a 45-minute drive to Mathura, the sacred birthplace of Lord Krishna along the Yamuna River.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit the grand Krishna Janmabhoomi temple and continue to the peaceful Prem Mandir in Vrindavan.", icon: "sun" },
          { time: "Evening", desc: "Witness the beautiful, energetic evening prayer singing (Bhajans) at ISKCON Temple.", icon: "utensils" }
        ],
        food: "Brijwasi Mithai Wala in Mathura for local specialty milk sweets (Peda) and hot kachoris.",
        stay: "Same as Day 1.",
        optional: ["Take a scenic rowboat ride along the Vishram Ghat in Mathura."],
        tip: "Monkeys in Vrindavan are extremely quick; do not wear glasses or carry open food bags."
      },
      {
        day: 5,
        title: "Keoladeo Bird Sanctuary (Bharatpur)",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Cross the state border into Rajasthan to visit the UNESCO-listed Keoladeo National Park in Bharatpur.", icon: "coffee" },
          { time: "Afternoon", desc: "Hire a bicycle or cycle-rickshaw guide to ride through wetlands, spotting hundreds of rare migratory birds.", icon: "sun" },
          { time: "Evening", desc: "Return to Agra and enjoy a relaxing dinner at a quiet heritage hotel.", icon: "utensils" }
        ],
        food: "The Salt Cafe for modern multi-cuisine dishes and city views.",
        stay: "Same as Day 1.",
        optional: ["Visit the historic Lohagarh Fort in Bharatpur."],
        tip: "Hiring a certified cycle-rickshaw puller who doubles as a skilled bird-spotter is highly recommended."
      },
      {
        day: 6,
        title: "Local Weaving & Cooking Class",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Visit a local social enterprise where rural women are taught traditional Zardozi embroidery and rug weaving.", icon: "coffee" },
          { time: "Afternoon", desc: "Participate in a hands-on home cooking class, learning the secrets of rich Mughlai curry spices.", icon: "sun" },
          { time: "Evening", desc: "Relax by the hotel pool or take a stroll through the lush Taj Nature Walk forest paths.", icon: "utensils" }
        ],
        food: "Your own freshly prepared Mughlai dinner made during the cooking session.",
        stay: "Same as Day 1.",
        optional: ["Visit the historic Jama Masjid in Agra's old quarters."],
        tip: "Taj Nature Walk offers excellent, uncrowded distant views of the Taj Mahal surrounded by greenery."
      },
      {
        day: 7,
        title: "Agra to Delhi Gateway",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Enjoy a slow, late breakfast and pack your bags. Buy some sweet local Petha for your friends.", icon: "coffee" },
          { time: "Afternoon", desc: "Board the Gatimaan Express train back to New Delhi for your departure flight.", icon: "sun" }
        ],
        food: "Sheroes Hangout, a unique café run entirely by brave survivors of acid attacks, offering tasty food.",
        stay: "Departure.",
        optional: ["Stop at the Crafts Museum in Delhi if time permits."],
        tip: "A visit to Sheroes Hangout is highly recommended for heartwarming hospitality and supporting a great social cause."
      }
    ]
  },
  {
    id: "jaipur-4-days",
    title: "Jaipur, Rajasthan",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
    highlights: `Immerse yourself in the royal heritage of Jaipur, Rajasthan's legendary 'Pink City'. Tour the Hawa Mahal, ascend Amber Fort, explore Jantar Mantar, Nahargarh Fort, and take day trips to Pushkar and Ajmer.`,
    weather: {
      conditions: "Dry desert climate. Winter (October to March) is beautiful and warm with temperatures averaging 15-28°C (59-82°F) and cool nights.",
      bestTime: "December is fantastic for enjoying camel festivals, clear blue skies, and comfortable outdoor weather."
    },
    budget: {
      total: "$700 - $1,100",
      dailyAverage: "$50/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$315 - $495" },
        { name: "Food & Dining", percent: 25, cost: "$175 - $275" },
        { name: "Transport", percent: 15, cost: "$105 - $165" },
        { name: "Activities", percent: 15, cost: "$105 - $165" }
      ],
      tiers: [
        { name: "Budget", desc: "Charming backpacker havelis, local dhabas, e-rickshaws.", cost: "$25/day" },
        { name: "Mid-Range", desc: "Restored heritage palaces (Havelis), multi-cuisine diners, hired drivers.", cost: "$60/day" },
        { name: "Luxury", desc: "5-star royal palaces (Rambagh Palace), private guides, bespoke jewelry shopping.", cost: "$200+/day" }
      ],
      tips: [
        "Buy the 'Jaipur Composite Ticket' which grants entry to Amber Fort, Albert Hall, and Hawa Mahal at a discount.",
        "Shop for block-print bedsheets and blue pottery in Bapu Bazaar, haggling politely."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Polarized sunglasses (intense desert glare)",
          "Wide-brimmed sun hat or cap",
          "Wet wipes and hand sanitizer"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Brightly colored linen/cotton clothes",
          "Light cardigan for cool desert nights"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Cash (INR) for street shopping"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "The Pink City Gates & Hawa Mahal",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Jaipur, check into a restored heritage Haveli. Have a breakfast of Pyaaz Kachori.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk historic pink streets of old city and stand before Hawa Mahal, photographing its windows.", icon: "sun" },
          { time: "Evening", desc: "Explore astronomical marvel of Jantar Mantar, viewing the world's largest sundial.", icon: "utensils" }
        ],
        food: "LMB in Johri Bazaar for authentic Rajasthani sweets and snacks.",
        stay: "Umaid Bhawan Hotel or similar heritage Haveli.",
        optional: ["Watch a Bollywood movie at the legendary Art Deco theater Raj Mandir."],
        tip: "Cross the street from Hawa Mahal to the Wind View Cafe for the best elevated view."
      },
      {
        day: 2,
        title: "Amber Fort & Jal Mahal",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Drive to hilltop Amber Fort. Ascend stone ramparts and marvel at Sheesh Mahal.", icon: "coffee" },
          { time: "Afternoon", desc: "Stop to snap photos of Jal Mahal, floating in the middle of Man Sagar Lake.", icon: "sun" },
          { time: "Evening", desc: "Dine at Chokhi Dhani Rajasthani village resort, featuring folk dances and camel rides.", icon: "utensils" }
        ],
        food: "Rajasthani Thali featuring Dal Baati Churma served with generous amounts of ghee.",
        stay: "Same as Day 1.",
        optional: ["Visit the imposing Jaigarh Fort nearby, home to the world's largest cannon."],
        tip: "Visit Chokhi Dhani hungry, as the Rajasthani hosts will feed you enthusiastically!"
      },
      {
        day: 3,
        title: "City Palace & Albert Hall",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Tour the opulent City Palace, viewing royal weapons and the famous Peacock Gate.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit Albert Hall Museum displaying local art and an Egyptian mummy.", icon: "sun" },
          { time: "Evening", desc: "Hike up Nahargarh Fort at sunset for spectacular views over the glowing city.", icon: "utensils" }
        ],
        food: "Tapri The Tea House for modern fusion snacks and ginger tea.",
        stay: "Same as Day 1.",
        optional: ["Explore the blue pottery studios of local artisans."],
        tip: "Nahargarh sunset viewpoint is highly popular; arrive early to secure a spot."
      },
      {
        day: 4,
        title: "Pushkar Holy Lake Excursion",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take a 2.5-hour drive to Pushkar, one of the oldest cities in India nestled around a holy lake.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit the rare Brahma Temple and walk along the 52 stone bathing ghats.", icon: "sun" },
          { time: "Evening", desc: "Watch the gorgeous sunset over the desert hills, then return to Jaipur.", icon: "utensils" }
        ],
        food: "Halwai stalls in Pushkar for delicious Malpua (sweet pancakes) and Rabri.",
        stay: "Same as Day 1.",
        optional: ["Take a short camel ride in the desert dunes of Pushkar."],
        tip: "Remove your shoes far before approaching the holy ghats of Pushkar lake."
      },
      {
        day: 5,
        title: "Ajmer Sharif Dargah Pilgrimage",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Drive to Ajmer and visit the highly sacred Sufi shrine of Ajmer Sharif Dargah.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk past the stunning Ana Sagar Lake and view the historic Adhai Din Ka Jhonpra mosque.", icon: "sun" },
          { time: "Evening", desc: "Return to Jaipur and spend a relaxed evening at your Haveli pool.", icon: "utensils" }
        ],
        food: "Saffron restaurant for Mughlai chicken and fresh roomali rotis.",
        stay: "Same as Day 1.",
        optional: ["Explore the Taragarh Fort in Ajmer if energy permits."],
        tip: "Keep your head covered with a scarf when entering the Ajmer Sharif shrine."
      },
      {
        day: 6,
        title: "Block Print Workshops & Galta Ji",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Visit the block-printing village of Sanganer, creating your own colorful cotton scarf.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Galta Ji Temple (The Monkey Temple) nested in a picturesque mountain pass.", icon: "sun" },
          { time: "Evening", desc: "Snack on street treats in Bapu Bazaar and shop for traditional Mojari leather shoes.", icon: "utensils" }
        ],
        food: "Niros Restaurant for classic Lal Maas (spicy Rajasthani mutton mutton curry).",
        stay: "Same as Day 1.",
        optional: ["Visit the Patrika Gate for a stunning colorful photography backdrop."],
        tip: "Patrika Gate is highly photogenic; visit at sunrise for empty columns and perfect lighting."
      },
      {
        day: 7,
        title: "Amer Palace & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Visit the quiet, majestic stepwell Panna Meena Ka Kund near Amber Fort.", icon: "coffee" },
          { time: "Afternoon", desc: "Grab a final Rajasthani sweet lassi and head to Jaipur Airport for your departure.", icon: "sun" }
        ],
        food: "Caffe Palladio for a beautifully designed, retro-chic European lunch setting.",
        stay: "Departure.",
        optional: ["Pick up last minute block-print fabrics in Bapu Bazaar."],
        tip: "Verify your gate terminal in advance; Jaipur Airport gets busy during the afternoon peak hours."
      }
    ]
  },
  {
    id: "kerala-5-days",
    title: "Kerala Backwaters & Hills",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800",
    highlights: `Unwind in God's Own Country. Munnar tea gardens, Periyar elephant sanctuary, Alleppey backwater houseboats, and the dramatic sea cliffs of Varkala.`,
    weather: {
      conditions: "Tropical climate. Hill stations like Munnar are cool around 15-22°C (59-72°F) year-round. Coastal backwaters are warm and humid.",
      bestTime: "October to March is ideal, offering cool hill weather and sunny, pleasant conditions."
    },
    budget: {
      total: "$700 - $1,100",
      dailyAverage: "$65/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$315 - $495" },
        { name: "Food & Dining", percent: 25, cost: "$175 - $275" },
        { name: "Transport", percent: 20, cost: "$140 - $220" },
        { name: "Activities", percent: 10, cost: "$70 - $110" }
      ],
      tiers: [
        { name: "Budget", desc: "Tea estate homestays, sharing houseboats with others, local buses.", cost: "$30/day" },
        { name: "Mid-Range", desc: "Boutique jungle resorts, private 1-bedroom houseboats, private taxi.", cost: "$75/day" },
        { name: "Luxury", desc: "5-star tea valley resorts, premium luxury backwater cruises, Ayurvedic spas.", cost: "$180+/day" }
      ],
      tips: [
        "A private taxi is the most reliable way to traverse Kerala's winding mountain roads.",
        "Overnight houseboat rentals include all 3 meals; let them know your preferences."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Powerful mosquito repellent (crucial for backwaters)",
          "Lightweight raincoat / umbrella",
          "Motion sickness pills"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Breathable cotton beachwear",
          "Warm fleece or sweater for Munnar nights"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Houseboat vouchers"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Kochi & Colonial Fort",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive at Cochin Airport. Check into your boutique hotel in historic Fort Kochi.", icon: "coffee" },
          { time: "Afternoon", desc: "Stroll Fort Kochi, viewing colonial churches and giant Chinese Fishing Nets.", icon: "sun" },
          { time: "Evening", desc: "Watch a Kathakali Dance drama performance, observing actors put on green makeup.", icon: "utensils" }
        ],
        food: "Kashi Art Cafe for fresh organic salad and local coffee in a garden gallery.",
        stay: "Eighth Bastion or similar in Fort Kochi.",
        optional: ["Take a ferry across to Ernakulam for shopping."],
        tip: "Arrive at the Kathakali theater 45 mins before the show to watch the fascinating makeup process."
      },
      {
        day: 2,
        title: "Munnar's Sprawling Tea Gardens",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Take a scenic drive up winding roads to Munnar, stopping at waterfalls.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit Tata Tea Museum to learn tea processing, then walk among tea valley hills.", icon: "sun" },
          { time: "Evening", desc: "Watch a sunset view over Mattupetty Dam, listening to mountain wind echoes.", icon: "utensils" }
        ],
        food: "Saravana Bhavan for highly-affordable, piping-hot south Indian Ghee Dosas.",
        stay: "Windermere Estate or similar in Munnar.",
        optional: ["Hike up to Echo Point to shout your name across the lake."],
        tip: "Munnar can get chilly at night, even in summer, so carry a light sweater."
      },
      {
        day: 3,
        title: "Periyar Wildlife Sanctuary",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Drive to Thekkady (Periyar). Tour spice garden, learning black pepper growth.", icon: "coffee" },
          { time: "Afternoon", desc: "Take boat cruise on Periyar Lake, searching for wild elephants along water shores.", icon: "sun" },
          { time: "Evening", desc: "Watch a Kalaripayattu performance—the oldest martial art in the world.", icon: "utensils" }
        ],
        food: "Ambadi Restaurant for local specialty dishes like Kerala Parotta and curry.",
        stay: "Spice Village or similar near Periyar forest.",
        optional: ["Go on a guided night-trek in Periyar jungle."],
        tip: "Buy fresh spice packets from shops in Thekkady for cheap souvenirs."
      },
      {
        day: 4,
        title: "Alleppey Houseboat Cruise",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Drive down to Alleppey. Board your private Kettuvallam (houseboat).", icon: "coffee" },
          { time: "Afternoon", desc: "Relax as houseboat glides past peaceful palm groves and narrow backwater canals.", icon: "sun" },
          { time: "Evening", desc: "Watch sunset over glassy waters, then anchor in a quiet lagoon for dinner.", icon: "utensils" }
        ],
        food: "Pearl Spot fish cooked in banana leaves by your personal boat chef.",
        stay: "Private luxury houseboat floating on Vembanad Lake.",
        optional: ["Rent a canoe to explore narrow, shallow canals."],
        tip: "Houseboat air conditioners usually run only during the night to conserve fuel."
      },
      {
        day: 5,
        title: "Varkala Cliff Beaches",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Disembark houseboat and drive south to the dramatic red cliffs of Varkala Beach.", icon: "coffee" },
          { time: "Afternoon", desc: "Relax on the sand below the cliffs, watching paragliders fly along the breeze.", icon: "sun" },
          { time: "Evening", desc: "Dine at a clifftop cafe, looking down at the crashing Arabian Sea waves.", icon: "utensils" }
        ],
        food: "Darjeeling Cafe on the Varkala Cliff for fresh seafood and mocktails.",
        stay: "Clifftop boutique resort in Varkala.",
        optional: ["Take a yoga session on the beach at sunrise."],
        tip: "Varkala Cliff can get crowded at sunset; walk north to Black Beach for a quieter view."
      },
      {
        day: 6,
        title: "Varkala Surf & Temple Visit",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Take a surfing lesson in the gentle waves of Varkala Beach.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit the 2,000-year-old Janardanaswamy Temple, a major Hindu pilgrimage site.", icon: "sun" },
          { time: "Evening", desc: "Enjoy a final seafood barbecue al fresco on the Varkala cliffside pathways.", icon: "utensils" }
        ],
        food: "The Temple Tree for delicious organic fusion dining.",
        stay: "Same as Day 5.",
        optional: ["Take a half-day trip to Kappil Lake where backwaters meet the sea."],
        tip: "Janardanaswamy temple has a strict dress code; dress modestly when visiting."
      },
      {
        day: 7,
        title: "Kochi Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Drive back from Varkala to Kochi, viewing coastal Kerala scenery.", icon: "coffee" },
          { time: "Afternoon", desc: "Stop at Lulu Mall for last-minute shopping and head to Kochi Airport for departure.", icon: "sun" }
        ],
        food: "Local diner for traditional Kerala banana leaf lunch.",
        stay: "Departure.",
        optional: ["Pick up local banana chips as a final snack souvenir."],
        tip: "Allow at least 4 hours driving time between Varkala and Cochin Airport."
      }
    ]
  },
  {
    id: "goa-4-days",
    title: "Goa Beach Escape",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    highlights: `Soak up the sun in Goa, India's ultimate beach destination. Vagator beaches, historic Old Goa churches, Dudhsagar waterfalls, spices, and South Goa Palolem peace.`,
    weather: {
      conditions: "Tropical maritime climate. October to May is sunny, warm, and dry around 28-34°C (82-93°F).",
      bestTime: "November to February is perfect for vibrant beach shacks and night markets."
    },
    budget: {
      total: "$500 - $900",
      dailyAverage: "$40/day",
      categories: [
        { name: "Accommodation", percent: 40, cost: "$200 - $360" },
        { name: "Food & Dining", percent: 35, cost: "$175 - $315" },
        { name: "Transport", percent: 15, cost: "$75 - $135" },
        { name: "Activities", percent: 10, cost: "$50 - $90" }
      ],
      tiers: [
        { name: "Budget", desc: "Beach hostels, local shacks, renting a gearless scooter.", cost: "$20/day" },
        { name: "Mid-Range", desc: "Boutique pool resorts, beach shacks, rental cars.", cost: "$45/day" },
        { name: "Luxury", desc: "5-star luxury beachfront resorts (Taj), upscale fine dining, private yacht cruises.", cost: "$150+/day" }
      ],
      tips: [
        "Rent a gearless scooter for around $5/day; it is the most convenient way to navigate Goa's small lanes.",
        "North Goa is lively with water sports; South Goa is quiet and peaceful."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Waterproof sunscreen (high SPF)",
          "Comfortable beach flip-flops",
          "Dry bag for boat trips"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Light swimwear and beach cover-ups",
          "Breathable linen shirts and shorts"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Driving license (for scooters)"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "North Goa Beaches & Sunset Fort",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Goa, check into Vagator resort. Enjoy a chilled coconut by the sea.", icon: "coffee" },
          { time: "Afternoon", desc: "Relax on sandy Anjuna Beach, listening to music from nearby shacks.", icon: "sun" },
          { time: "Evening", desc: "Hike up Fort Aguada at sunset for panoramic views over the Arabian Sea.", icon: "utensils" }
        ],
        food: "Curlies Beach Shack for pork vindaloo and garlic naan.",
        stay: "Boutique pool resort near Vagator.",
        optional: ["Go parasailing or jet-skiing at Calangute Beach."],
        tip: "Anjuna beach has rocky patches; walk slightly North to Vagator for softer sand."
      },
      {
        day: 2,
        title: "Portuguese Heritage in Old Goa",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Explore Old Goa. Marvel at Basilica of Bom Jesus, housing St. Francis Xavier.", icon: "coffee" },
          { time: "Afternoon", desc: "Cross to Se Cathedral, and stroll through the colorful Fontainhas in Panaji.", icon: "sun" },
          { time: "Evening", desc: "Take a sunset cruise along the Mandovi River, watching traditional folk dances.", icon: "utensils" }
        ],
        food: "Viva Panjim in Fontainhas for traditional Goan fish curry.",
        stay: "Same as Day 1.",
        optional: ["Visit the historic Reis Magos Fort."],
        tip: "Fontainhas has beautiful pastel-colored houses; dress respectfully when visiting."
      },
      {
        day: 3,
        title: "Dudhsagar Waterfall & Spice Farm",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Take a day trip to Dudhsagar Waterfalls, watching water cascade down 310 meters.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour Sahakari Spice Farm, enjoying an organic buffet lunch served on banana leaves.", icon: "sun" },
          { time: "Evening", desc: "Return to the beach. Dine on tables set up directly on the sand with candles.", icon: "utensils" }
        ],
        food: "Thalassa in Siolim for Greek food overlooking a spectacular sunset view.",
        stay: "Same as Day 1.",
        optional: ["Explore the massive Arpora Saturday Night Market (seasonal)."],
        tip: "Dudhsagar requires renting a forest-approved 4x4 jeep from the Collem booking gate."
      },
      {
        day: 4,
        title: "South Goa Peace (Palolem Beach)",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Check out of North Goa. Drive south to pristine, white sand Palolem Beach.", icon: "coffee" },
          { time: "Afternoon", desc: "Rent a kayak in the calm bay waters, or walk the crescent beach path.", icon: "sun" },
          { time: "Evening", desc: "Relax at a beach cottage balcony, watching the gentle tide come in.", icon: "utensils" }
        ],
        food: "Dropadi on Palolem beach for butter garlic lobster and fresh mocktails.",
        stay: "Cozy beach hut in Palolem Beach.",
        optional: ["Take a dolphin-spotting boat trip from Palolem Beach."],
        tip: "Palolem Beach has much cleaner, calmer water which is excellent for swimming."
      },
      {
        day: 5,
        title: "Cola Beach & Hidden Lagoon",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Drive to Cola Beach, a hidden gem featuring a sweet-water lagoon right next to the sea.", icon: "coffee" },
          { time: "Afternoon", desc: "Swim in the calm lagoon or sunbathe on the empty, golden sandy beach.", icon: "sun" },
          { time: "Evening", desc: "Dine at a local beach resort, watching a peaceful sunset without crowds.", icon: "utensils" }
        ],
        food: "Blue Lagoon Restaurant for fresh fish and local Indian curry.",
        stay: "Same as Day 4.",
        optional: ["Visit the nearby Cabo de Rama Fort for cliff views."],
        tip: "The road down to Cola Beach is unpaved and bumpy; drive slowly and carefully."
      },
      {
        day: 6,
        title: "Cabo de Rama & Sunset Drinks",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Explore the ruins of Cabo de Rama Fort, a historic clifftop fortress with dramatic ocean views.", icon: "coffee" },
          { time: "Afternoon", desc: "Relax at Patnem Beach, a quiet beach adjacent to Palolem.", icon: "sun" },
          { time: "Evening", desc: "Enjoy sunset cocktails at a beachfront bar, listening to acoustic musicians.", icon: "utensils" }
        ],
        food: "Home Restaurant on Patnem Beach for premium organic salads and seafood.",
        stay: "Same as Day 4.",
        optional: ["Go on a yoga session at a local beachfront shala."],
        tip: "South Goa is perfect for digital detox; internet connectivity at beach huts can be limited."
      },
      {
        day: 7,
        title: "Departure from Goa",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Enjoy a final sunrise beach walk, followed by breakfast of banana pancakes.", icon: "coffee" },
          { time: "Afternoon", desc: "Buy local Goan cashew nuts and head to Dabolim Airport for your departure flight.", icon: "sun" }
        ],
        food: "Beachfront shack for fresh coconut juice and vegetable pakoras.",
        stay: "Departure.",
        optional: ["Visit a local feni distillery museum if time permits."],
        tip: "Allow at least 1.5 hours travel time from South Goa to Dabolim Airport."
      }
    ]
  },
  {
    id: "ladakh-5-days",
    title: "Leh-Ladakh Adventure",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800",
    highlights: `Embark on a high-altitude adventure. Monasteries, Khardung La pass (5,359m), Nubra Valley dunes, Bactrian camels, Pangong Tso Lake, and spectacular Tso Moriri.`,
    weather: {
      conditions: "High-altitude mountain desert. Summer (June to September) offers warm days around 15-25°C (59-77°F) with freezing nights.",
      bestTime: "July and August are ideal, offering fully open roads and pleasant temperatures."
    },
    budget: {
      total: "$800 - $1,300",
      dailyAverage: "$75/day",
      categories: [
        { name: "Accommodation", percent: 35, cost: "$280 - $455" },
        { name: "Food & Dining", percent: 20, cost: "$160 - $260" },
        { name: "Transport", percent: 35, cost: "$280 - $455" },
        { name: "Activities", percent: 10, cost: "$80 - $130" }
      ],
      tiers: [
        { name: "Budget", desc: "Local homestays, simple Tibetan kitchens, public Sumo taxis.", cost: "$30/day" },
        { name: "Mid-Range", desc: "Charming hotels in Leh, private Swiss tents, hired local 4x4.", cost: "$80/day" },
        { name: "Luxury", desc: "Luxury glamping sites, high-end mountain resorts, private customized tours.", cost: "$180+/day" }
      ],
      tips: [
        "A minimum of 24-48 hours of rest is mandatory upon arrival to prevent altitude sickness.",
        "Only post-paid mobile connections (Airtel, Jio) work in Ladakh."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Diamox pills for altitude sickness",
          "High SPF sunscreen & lip balm",
          "Warm insulated thermos flask"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Heavy down jacket or windbreaker",
          "Thermal layers and heavy gloves"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Printed copies of Inner Line Permits (ILP)"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Rest",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Fly into Leh Airport. Check into your hotel and spend the morning lying down to acclimate.", icon: "coffee" },
          { time: "Afternoon", desc: "Drink ginger-honey-lemon tea to combat thin air. Take a gentle walk in Leh Market.", icon: "sun" },
          { time: "Evening", desc: "Visit Shanti Stupa, a white-domed Buddhist monument, watching sunset over the valley.", icon: "utensils" }
        ],
        food: "Tibetan Kitchen in Leh for warm, comforting Thukpa and momos.",
        stay: "Hotel Singge Palace or similar in Leh.",
        optional: ["Explore the ruins of the historic Leh Palace."],
        tip: "Avoid drinking alcohol or exercising heavily on Day 1. Rest is the key."
      },
      {
        day: 2,
        title: "Monasteries & Confluence",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Visit spectacular Thiksey Monastery, nested on a hill.", icon: "coffee" },
          { time: "Afternoon", desc: "Drive to Magnetic Hill and visit Sangam, the confluence of Indus and Zanskar rivers.", icon: "sun" },
          { time: "Evening", desc: "Enjoy a slow evening back in Leh, resting before heading to higher passes.", icon: "utensils" }
        ],
        food: "Chopsticks Noodle Bar for delicious Asian-fusion dishes in Leh.",
        stay: "Same as Day 1.",
        optional: ["Go white-water rafting on the cold Zanskar River."],
        tip: "Wear modest clothing and remove shoes when entering monastery prayer halls."
      },
      {
        day: 3,
        title: "Nubra Valley via Khardung La",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Drive to Khardung La pass, one of the highest motorable roads at 5,359m.", icon: "coffee" },
          { time: "Afternoon", desc: "Descend into Nubra Valley. Ride Bactrian camels through the sand dunes of Hunder.", icon: "sun" },
          { time: "Evening", desc: "Check into a Swiss tent camp. Enjoy a bonfire under a clear starry sky.", icon: "utensils" }
        ],
        food: "Hot buffet meals served inside the dining tent at the campsite.",
        stay: "Hunder Resort Swiss Tents or similar in Nubra.",
        optional: ["Visit the massive 32-meter Buddha statue at Diskit Monastery."],
        tip: "Limit your stay at the summit of Khardung La to 15 minutes to avoid headaches."
      },
      {
        day: 4,
        title: "Pangong Tso Lake via Shyok",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Drive from Nubra along the rugged Shyok River, heading towards Pangong Lake.", icon: "coffee" },
          { time: "Afternoon", desc: "Arrive at Pangong Tso at 4,250 meters. Watch the lake change colors.", icon: "sun" },
          { time: "Evening", desc: "Walk along the lake shore, taking photos in the crisp, cold mountain breeze.", icon: "utensils" }
        ],
        food: "Freshly prepared lentil curry and hot rice served at the lakeside camp.",
        stay: "Pangong Inn Swiss Tents or similar lakeside camp.",
        optional: ["Take photos at the famous '3 Idiots' yellow scooter spot."],
        tip: "Pangong Lake gets incredibly cold; ensure you wear heavy layers."
      },
      {
        day: 5,
        title: "Travel to Tso Moriri Lake",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Take a highly scenic, rugged drive south towards Tso Moriri, a peaceful high-altitude lake.", icon: "coffee" },
          { time: "Afternoon", desc: "Arrive at Korzok village and view the deep blue, uncrowded waters of Tso Moriri.", icon: "sun" },
          { time: "Evening", desc: "Stroll along the wetlands, observing rare black-necked cranes and wildlife.", icon: "utensils" }
        ],
        food: "Local homestay buffet of hot vegetables and flatbreads.",
        stay: "Cozy village homestay in Korzok.",
        optional: ["Visit the historic Korzok Monastery by the lake."],
        tip: "Tso Moriri has basic facilities; prepare for a rustic, authentic homestay experience."
      },
      {
        day: 6,
        title: "Return to Leh via Tanglang La",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Drive back to Leh crossing Tanglang La pass, the second highest motorable pass.", icon: "coffee" },
          { time: "Afternoon", desc: "Arrive back in Leh. Spend your afternoon buying apricot jams and pashmina shawls.", icon: "sun" },
          { time: "Evening", desc: "Have a final celebratory dinner and pack your bags.", icon: "utensils" }
        ],
        food: "Gesmo Restaurant for excellent yak-cheese pizza and organic tea.",
        stay: "Hotel Singge Palace in Leh.",
        optional: ["Visit the Hall of Fame war museum."],
        tip: "Pack your bags early, as flights out of Leh always depart in the early morning."
      },
      {
        day: 7,
        title: "Departure from Leh",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Enjoy a final cup of butter tea and check out of your Leh hotel.", icon: "coffee" },
          { time: "Afternoon", desc: "Head to Kushok Bakula Rimpochee Airport for your morning flight back to Delhi.", icon: "sun" }
        ],
        food: "Airport café for quick snacks.",
        stay: "Departure.",
        optional: ["View the spectacular Himalayan peaks from your window seat."],
        tip: "Secure a window seat on the left side when flying out of Leh for the best mountain views."
      }
    ]
  },
  {
    id: "varanasi-3-days",
    title: "Spiritual Varanasi, UP",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80&w=800",
    highlights: `Experience the spiritual heart of India. Ganges Ganga Aarti, sunrise rowboats, Sarnath deer parks, Ramnagar Fort, local weaver colonies, and classical music ashrams.`,
    weather: {
      conditions: "Subtropical climate. Winter (October to March) is pleasant and cool around 12-24°C (54-75°F).",
      bestTime: "November to February is ideal for morning boat rides and comfortable alley walks."
    },
    budget: {
      total: "$500 - $800",
      dailyAverage: "$35/day",
      categories: [
        { name: "Accommodation", percent: 35, cost: "$175 - $280" },
        { name: "Food & Dining", percent: 30, cost: "$150 - $240" },
        { name: "Transport", percent: 15, cost: "$75 - $120" },
        { name: "Activities", percent: 20, cost: "$100 - $160" }
      ],
      tiers: [
        { name: "Budget", desc: "Riverside hostels, street-food (Kachori Sabzi), walking.", cost: "$15/day" },
        { name: "Mid-Range", desc: "Charming heritage guesthouses on ghats, sit-down cafes, private boats.", cost: "$40/day" },
        { name: "Luxury", desc: "Historic luxury palace hotels (BrijRama Palace), private customized guides.", cost: "$120+/day" }
      ],
      tips: [
        "Varanasi is best explored on foot; narrow alleys are too small for any vehicles.",
        "Varanasi is a sacred Hindu city; avoid meat and alcohol in the old ghat areas."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Comfortable walking shoes (rickety alleys)",
          "Mosquito repellent (necessary near river)",
          "Hand sanitizer & pocket tissues"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Loose, highly modest cotton clothing",
          "Light shawl or scarf for temples"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Cash (INR) for small purchases"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Ganga Aarti & River Ghats",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Varanasi. Check into your heritage guesthouse along the river.", icon: "coffee" },
          { time: "Afternoon", desc: "Wander through old city alleys, discovering ancient shrines.", icon: "sun" },
          { time: "Evening", desc: "Board a wooden boat to witness the spectacular Ganga Aarti ceremony at Dashashwamedh Ghat.", icon: "utensils" }
        ],
        food: "Blue Lassi Shop for iconic, hand-churned fruit lassis served in clay kulhads.",
        stay: "Ganpati Guest House or similar right on the river bank.",
        optional: ["Explore the historic Vishwanath Temple lane."],
        tip: "Secure a seat on a boat by 5:30 PM to get a prime view of the Aarti."
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Sarnath",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Wake up at 5:00 AM for a peaceful rowboat cruise. Observe pilgrims bathing along the ghats.", icon: "coffee" },
          { time: "Afternoon", desc: "Drive to Sarnath, the quiet deer park where Lord Buddha preached his first sermon.", icon: "sun" },
          { time: "Evening", desc: "Walk through Manikarnika, witnessing ancient cremation pyres along the river.", icon: "utensils" }
        ],
        food: "Deena Chat Bhandar for Tamatar Chat and Golgappas.",
        stay: "Same as Day 1.",
        optional: ["Visit the Sarnath Archaeological Museum."],
        tip: "Manikarnika Ghat is a sacred place; taking photos of funeral pyres is strictly forbidden."
      },
      {
        day: 3,
        title: "Ramnagar Fort & Vyas Temple",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Take a boat across to Ramnagar Fort, a 17th-century red sandstone fortress displaying royal weapons.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the ancient Vyas Temple on the fort grounds, looking down at the wide river bend.", icon: "sun" },
          { time: "Evening", desc: "Return to old Varanasi, snacking on piping hot street-side sweets.", icon: "utensils" }
        ],
        food: "Local street stalls in Kachori Gali for hot Kachori Sabzi and sweet Jalebis.",
        stay: "Same as Day 1.",
        optional: ["Explore old bazaars buying traditional copper objects."],
        tip: "Auto-rickshaws cannot enter narrow lanes; ask to be dropped at Godowlia Crossing."
      },
      {
        day: 4,
        title: "Varanasi Silk Weaver Colonies",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Visit Sarai Mohana, a famous weavers' village where beautiful Banarasi silk sarees are hand-woven.", icon: "coffee" },
          { time: "Afternoon", desc: "Observe the intricate jacquard card patterns and learn how gold/silver threads are spun.", icon: "sun" },
          { time: "Evening", desc: "Return to the ghats for a quiet evening boat ride, floating flower lamps down the river.", icon: "utensils" }
        ],
        food: "Brown Bread Bakery for organic European breads and local cheeses.",
        stay: "Same as Day 1.",
        optional: ["Visit a local music ashram in the evening."],
        tip: "Support local weavers by buying directly from their cooperative outlets instead of middleman shops."
      },
      {
        day: 5,
        title: "Vindhyachal Temple Day Trip",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Take a 1.5-hour drive to Vindhyachal, a highly sacred Shakti Peeth temple located on the Ganges banks.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour the hilltop Ashtabhuja Temple and explore quiet local villages.", icon: "sun" },
          { time: "Evening", desc: "Return to Varanasi, enjoying classical flute music on your hotel terrace.", icon: "utensils" }
        ],
        food: "Local dhaba for simple wood-fired roti and dal.",
        stay: "Same as Day 1.",
        optional: ["Visit the scenic Chunar Fort overlooking the river."],
        tip: "Dress extremely conservatively when visiting pilgrimage temples in Vindhyachal."
      },
      {
        day: 6,
        title: "BHU Campus & New Kashi Vishwanath",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Visit the massive, green campus of Banaras Hindu University (BHU), exploring the Bharat Kala Bhavan museum.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour the towering red-sandstone New Vishwanath Temple (Birla Temple) inside the university grounds.", icon: "sun" },
          { time: "Evening", desc: "Dine at a rooftop restaurant overlooking the Assi Ghat evening cultural programs.", icon: "utensils" }
        ],
        food: "Pizzeria Vatika Cafe at Assi Ghat for excellent wood-fired apple pie and pizzas.",
        stay: "Same as Day 1.",
        optional: ["Attend the Subah-e-Banaras morning music program at Assi Ghat."],
        tip: "Assi Ghat is known for peaceful mornings; rise at 5:30 AM to catch the morning classical music and yoga."
      },
      {
        day: 7,
        title: "Ghats Walking & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Take a final 3-mile walk along the stone ghats, saying goodbye to the holy river.", icon: "coffee" },
          { time: "Afternoon", desc: "Check out of your guesthouse and head to Lal Bahadur Shastri Airport for departure.", icon: "sun" }
        ],
        food: "Local sweet shop for Rabri and warm milk.",
        stay: "Departure.",
        optional: ["Buy some clay kulhad cups as a rustic souvenir."],
        tip: "Book an airport taxi at least 3 hours before your flight to navigate Varanasi's city traffic."
      }
    ]
  },
  {
    id: "mumbai-3-days",
    title: "Mumbai, Maharashtra",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=800",
    highlights: `Dive into Mumbai, the 'City of Dreams'. Gateway of India, Elephanta caves, Marine Drive, Haji Ali causeways, Bandra cafes, Kanheri stone caves, and a day trip to Lonavala hill station.`,
    weather: {
      conditions: "Warm, tropical coastal climate. Winter (November to February) is warm and pleasant around 24-32°C (75-90°F).",
      bestTime: "December and January offer the most comfortable weather for walking historic streets."
    },
    budget: {
      total: "$800 - $1,300",
      dailyAverage: "$50/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$360 - $585" },
        { name: "Food & Dining", percent: 30, cost: "$240 - $390" },
        { name: "Transport", percent: 15, cost: "$120 - $195" },
        { name: "Activities", percent: 10, cost: "$80 - $130" }
      ],
      tiers: [
        { name: "Budget", desc: "Shared hostels, street food (Vada Pav), riding local trains.", cost: "$20/day" },
        { name: "Mid-Range", desc: "Central business hotels, trendy cafes, Uber taxis.", cost: "$55/day" },
        { name: "Luxury", desc: "5-star historic hotels (Taj Mahal Palace), fine dining, private tours.", cost: "$180+/day" }
      ],
      tips: [
        "Use yellow-and-black taxis or ridesharing apps; they are metered and very reliable.",
        "Avoid riding local trains during peak rush hours."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Compact umbrella (coastal weather)",
          "Comfortable light walking sneakers",
          "Power bank"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Lightweight, breathable cotton outfits",
          "Smart casual wear for lounge bars"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Cash (INR) for street snacks"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Colonial Colaba & Gateway",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Mumbai. Check into Colaba hotel. Stroll to Gateway of India.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk Grand Victorian streets, viewing CST Terminus and Kala Ghoda.", icon: "sun" },
          { time: "Evening", desc: "Walk the curved boardwalk of Marine Drive as streetlights flicker on at sunset.", icon: "utensils" }
        ],
        food: "Leopold Cafe for historic, lively diner vibes and cold beer.",
        stay: "Hotel Suba Palace or similar in Colaba.",
        optional: ["Have high tea at the legendary Taj Mahal Palace Hotel."],
        tip: "Grab a spot on the concrete sea wall at Marine Drive to enjoy the ocean breeze."
      },
      {
        day: 2,
        title: "Elephanta Caves & Dabbawalas",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Take ferry from Gateway to Elephanta Island. Explore 5th-century rock-cut Shiva cave temples.", icon: "coffee" },
          { time: "Afternoon", desc: "Return to Colaba. Head to Churchgate Station at noon to witness Dabbawalas sorting lunches.", icon: "sun" },
          { time: "Evening", desc: "Visit Dhobi Ghat, the world's largest open-air laundry, watching dhobis wash clothes.", icon: "utensils" }
        ],
        food: "Street stalls near Chowpatty Beach for amazing Sev Puri and Pav Bhaji.",
        stay: "Same as Day 1.",
        optional: ["Visit the historic Mani Bhavan (Gandhi's house)."],
        tip: "Elephanta Caves are closed on Mondays; plan your week accordingly."
      },
      {
        day: 3,
        title: "Haji Ali & Bandra Cafe Scene",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Walk causeway into ocean to visit Haji Ali Dargah mosque.", icon: "coffee" },
          { time: "Afternoon", desc: "Drive over Bandra-Worli Sea Link to trendy Bandra, viewing boutique shops.", icon: "sun" },
          { time: "Evening", desc: "Have dinner at a hipster Bandra eatery, followed by sunset drinks at a clifftop bar.", icon: "utensils" }
        ],
        food: "Bademiya in Colaba for late-night charcoal-grilled seekh kebabs.",
        stay: "Same as Day 1.",
        optional: ["Walk past houses of Bollywood superstars on Carter Road."],
        tip: "Haji Ali causeway gets submerged during high tide; check tide schedules beforehand."
      },
      {
        day: 4,
        title: "Kanheri Caves in National Park",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Travel north to Sanjay Gandhi National Park. Rent a bicycle to ride through forests.", icon: "coffee" },
          { time: "Afternoon", desc: "Climb steps to Kanheri Caves, 109 ancient rock-cut Buddhist temples carved into basalt cliffs.", icon: "sun" },
          { time: "Evening", desc: "Enjoy a quiet boating session in the national park lake, then return to south Mumbai.", icon: "utensils" }
        ],
        food: "Swati Snacks for gourmet local Gujarati and Maharashtrian vegetarian plates.",
        stay: "Same as Day 1.",
        optional: ["Take a short safari ride in the park's tiger reserve."],
        tip: "Rent a bicycle at the national park entrance gate; it is much faster than walking to the caves."
      },
      {
        day: 5,
        title: "Lonavala Hill Station Day Trip",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Take an early 2-hour drive via the Expressway up to Lonavala, a beautiful hill station in the Western Ghats.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the ancient Karla Caves and Bhaja Caves, viewing historic stone pillars and stupas.", icon: "sun" },
          { time: "Evening", desc: "Enjoy sunset views from Tiger's Point, then return down to Mumbai.", icon: "utensils" }
        ],
        food: "Cooper's Fudge in Lonavala for their legendary chocolate walnut fudge.",
        stay: "Same as Day 1.",
        optional: ["Visit the scenic Bushi Dam waterfall."],
        tip: "Monsoon (July-Sept) is the absolute best time for Lonavala, as the hills turn vibrant emerald green."
      },
      {
        day: 6,
        title: "Chhatrapati Shivaji Museum & Art District",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Spend hours exploring the magnificent Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum).", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through the Kala Ghoda Art District, visiting contemporary art galleries and boutiques.", icon: "sun" },
          { time: "Evening", desc: "Dine at an upscale restaurant, enjoying a farewell cocktail to the City of Dreams.", icon: "utensils" }
        ],
        food: "Trishna for Mumbai's famous, world-class Butter Garlic Crab.",
        stay: "Same as Day 1.",
        optional: ["Visit the Jehangir Art Gallery in Kala Ghoda."],
        tip: "Trishna's crab is priced by weight; ask your waiter to show you the crab size before placing the order."
      },
      {
        day: 7,
        title: "Colaba Causeway & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Do some last minute bargain shopping for leather bags and jewelry along Colaba Causeway.", icon: "coffee" },
          { time: "Afternoon", desc: "Check out of your hotel, catch a metered taxi, and head to Chhatrapati Shivaji Airport.", icon: "sun" }
        ],
        food: "Britannia & Co. for iconic, historic Parsi Berry Pulav and Caramel Custard.",
        stay: "Departure.",
        optional: ["Walk around the majestic Oval Maidan viewing cricket matches."],
        tip: "Allow at least 1.5 hours travel time from South Mumbai to the international airport terminal."
      }
    ]
  },
  {
    id: "kashmir-4-days",
    title: "Kashmir Valley Paradise",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=800",
    highlights: `Discover God's Own Paradise—Kashmir. Wooden houseboats on Dal Lake, Mughal terraced gardens, Gulmarg snow slopes & Gondola rides, Pahalgam saffron valleys, and Sonamarg glaciers.`,
    weather: {
      conditions: "Sub-alpine climate. Cool summers around 15-28°C (59-82°F). Winter is freezing with heavy snowfall.",
      bestTime: "April to October for green blooming valleys; December to February for winter snow sports."
    },
    budget: {
      total: "$800 - $1,300",
      dailyAverage: "$60/day",
      categories: [
        { name: "Accommodation", percent: 45, cost: "$360 - $585" },
        { name: "Food & Dining", percent: 20, cost: "$160 - $260" },
        { name: "Transport", percent: 20, cost: "$160 - $260" },
        { name: "Activities", percent: 15, cost: "$120 - $195" }
      ],
      tiers: [
        { name: "Budget", desc: "Standard homestays, sharing local Sumo taxis, local bakeries.", cost: "$25/day" },
        { name: "Mid-Range", desc: "Wooden houseboats, private hired taxi, Gondola ski passes.", cost: "$65/day" },
        { name: "Luxury", desc: "Super-deluxe houseboats, mountain resorts (Khyber), private ski guides.", cost: "$160+/day" }
      ],
      tips: [
        "Houseboat prices include breakfast and dinner; bargain politely.",
        "Pre-book Gulmarg Gondola tickets online days in advance."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Heavy woolens / gloves (essential for snow)",
          "Lip balm and heavy moisturizer",
          "Thermal innerwear"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Heavy jackets and sweaters",
          "Woolen caps and comfortable socks"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card (checkpoints are highly frequent)",
          "Printed Gondola passes"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Houseboat Stay & Dal Lake Shikara",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Fly into Srinagar. Check into deluxe, wooden houseboat floating on Dal Lake.", icon: "coffee" },
          { time: "Afternoon", desc: "Relax with hot saffron Kahwa tea on the houseboat balcony.", icon: "sun" },
          { time: "Evening", desc: "Take a romantic Shikara boat cruise, visiting floating vegetable markets.", icon: "utensils" }
        ],
        food: "Mughal Darbar in Srinagar for Rogan Josh and Rista.",
        stay: "Wangnoo Sheraton Houseboat or similar.",
        optional: ["Visit a local carpet weaving demonstration workshop."],
        tip: "Nigeen Lake is much quieter and less crowded than Dal Lake."
      },
      {
        day: 2,
        title: "Mughal Gardens in Srinagar",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Tour terraced Mughal Gardens—Shalimar Bagh and Nishat Bagh built by Jahangir.", icon: "coffee" },
          { time: "Afternoon", desc: "Walk through Chashme Shahi royal springs and view tulip gardens (seasonal).", icon: "sun" },
          { time: "Evening", desc: "Watch sunset over valley from the hilltop Shankaracharya Temple.", icon: "utensils" }
        ],
        food: "Ahdoos, a legendary restaurant operating since 1918, serving Kashmiri cuisine.",
        stay: "Same as Day 1.",
        optional: ["Hike up to the ancient ruins of Pari Mahal."],
        tip: "Shankaracharya Temple has strict security; no mobile phones are allowed."
      },
      {
        day: 3,
        title: "Gulmarg Snowy Slopes & Gondola",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Drive to Gulmarg. Board Gondola cable car, ascending up to Phase 2 (4,200m).", icon: "coffee" },
          { time: "Afternoon", desc: "Enjoy sliding down snow slopes on sledges, or hire professional gear for skiing.", icon: "sun" },
          { time: "Evening", desc: "Walk around quiet, snowy golf course and visit historic St. Mary's church.", icon: "utensils" }
        ],
        food: "The Khyber Cloves for warm meals in a cozy alpine setting.",
        stay: "Pine Palace Resort or similar in Gulmarg.",
        optional: ["Rent snowmobiles to ride across the frozen valley meadows."],
        tip: "Always hire a local sledge puller or guide through the official office at fixed rates."
      },
      {
        day: 4,
        title: "Pahalgam Valley of Shepherds",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take a 2.5-hour drive to Pahalgam, passing sprawling purple saffron fields along the highway.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour the breathtaking Betaab Valley (named after the Bollywood film) and Aru Valley.", icon: "sun" },
          { time: "Evening", desc: "Enjoy a quiet walk along the rushing Lidder River, listening to mountain streams.", icon: "utensils" }
        ],
        food: "Dana Pani in Pahalgam for excellent, warm vegetarian North Indian dishes.",
        stay: "Hotel Heevan or a river-facing resort in Pahalgam.",
        optional: ["Hire a pony to ride up to the scenic Baisaran Meadow (Mini Switzerland)."],
        tip: "Buy authentic local saffron packets from government-approved farms along the Pampore highway."
      },
      {
        day: 5,
        title: "Sonamarg Glaciers Exploration",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Take a scenic drive to Sonamarg (Meadow of Gold), famous for its spectacular alpine glaciers.", icon: "coffee" },
          { time: "Afternoon", desc: "Take a pony ride up to the Thajiwas Glacier, playing in the eternal ice and snow pack.", icon: "sun" },
          { time: "Evening", desc: "Dine at a local mountain cabin, watching twilight fall over rugged rocky peaks.", icon: "utensils" }
        ],
        food: "Hotel Glacier Heights restaurant for warm local lamb curry and fresh rotis.",
        stay: "Same as Day 4.",
        optional: ["Explore the quiet, scenic Nilagrad river confluence."],
        tip: "Sonamarg roads can get blocked by snow in winter; verify road status before departing."
      },
      {
        day: 6,
        title: "Dachigam National Park Wildlife",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Return to Srinagar and take a guided trek in Dachigam National Park, looking for Hangul (Kashmir Stag).", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the peaceful Shalimar Mughal gardens again for a relaxed afternoon walk.", icon: "sun" },
          { time: "Evening", desc: "Enjoy a final Shikara boat ride at sunset, watching lotus sellers and floating markets.", icon: "utensils" }
        ],
        food: "Stream Restaurant in Srinagar for delicious trout fish and local curries.",
        stay: "Wangnoo Sheraton Houseboat in Srinagar.",
        optional: ["Visit the historic Jamia Masjid in Old Srinagar city."],
        tip: "Secure a permit for Dachigam park from the wildlife office in Srinagar a day beforehand."
      },
      {
        day: 7,
        title: "Srinagar departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Buy sweet Kashmiri walnuts, apples, and pashmina shawls in local markets.", icon: "coffee" },
          { time: "Afternoon", desc: "Check out of your houseboat and head to Srinagar Airport for your return flight.", icon: "sun" }
        ],
        food: "Local bakery for fresh traditional Kashmiri breads and butter.",
        stay: "Departure.",
        optional: ["Pick up local saffron tea packets as a final souvenir."],
        tip: "Srinagar Airport has multiple security checks; arrive at least 3 hours before your flight."
      }
    ]
  },
  {
    id: "hampi-3-days",
    title: "Hampi Ruins, Karnataka",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1600100395420-405076cfdec5?auto=format&fit=crop&q=80&w=800",
    highlights: `Step into an epic, boulder-strewn landscape. Hampi's Vijayanagara ruins, Virupaksha temple, Stone Chariot, coracle boat rides, Hippie Island, and day trips to Badami Caves.`,
    weather: {
      conditions: "Dry, rocky climate. Winter (October to March) is dry and warm around 18-30°C (64-86°F).",
      bestTime: "November to January is perfect for comfortable walking among massive outdoor ruins."
    },
    budget: {
      total: "$400 - $700",
      dailyAverage: "$30/day",
      categories: [
        { name: "Accommodation", percent: 35, cost: "$140 - $245" },
        { name: "Food & Dining", percent: 30, cost: "$120 - $210" },
        { name: "Transport", percent: 20, cost: "$80 - $140" },
        { name: "Activities", percent: 15, cost: "$60 - $105" }
      ],
      tiers: [
        { name: "Budget", desc: "Cozy guesthouses, local cafes, renting a bicycle.", cost: "$15/day" },
        { name: "Mid-Range", desc: "Heritage resorts near ruins, auto-rickshaw tours, hired local guide.", cost: "$35/day" },
        { name: "Luxury", desc: "5-star luxury resorts (Evolve Back), private customized vehicle, private historians.", cost: "$150+/day" }
      ],
      tips: [
        "Renting a bicycle ($2/day) or scooter is highly recommended to traverse ruins.",
        "Take a coracle boat ride across the river; it is highly unique."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Comfortable walking shoes with excellent grip (climbing dry boulders)",
          "Sun umbrella / wide sun hat",
          "Refillable water bottle"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Loose, breathable cotton/linen clothes",
          "Comfortable walking sandals"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / ID card",
          "Online monument entry passes"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Sacred Center & Virupaksha",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive in Hampi. Check into guesthouse and have idli breakfast.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour Virupaksha Temple, Hampi's oldest active temple.", icon: "sun" },
          { time: "Evening", desc: "Climb up Hemakuta Hill at sunset, viewing spectacular ruins nested in valleys.", icon: "utensils" }
        ],
        food: "Mango Tree Restaurant for delicious south Indian meals served on banana leaves.",
        stay: "Cozy boutique guesthouse near the river.",
        optional: ["Visit the massive stone statues of Sasivekalu Ganesha."],
        tip: "Hemakuta Hill is highly popular at sunset; climb higher to avoid crowds."
      },
      {
        day: 2,
        title: "Royal Center & Stone Chariot",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Visit Vittala Temple, marveling at the legendary stone chariot and musical pillars.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the Royal Center, viewing Lotus Mahal and Elephant Stables.", icon: "sun" },
          { time: "Evening", desc: "Take a round coracle boat ride on the Tungabhadra River, spinning gently.", icon: "utensils" }
        ],
        food: "Chillout Cafe for wood-fired pizzas and fresh organic juices.",
        stay: "Same as Day 1.",
        optional: ["Visit the underground Shiva temple."],
        tip: "Tapping the musical pillars is restricted to protect the monument."
      },
      {
        day: 3,
        title: "Hippie Island & Paddy Fields",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Cross the river to the 'Hippie Island' side (Anegundi). Rent a scooter.", icon: "coffee" },
          { time: "Afternoon", desc: "Ride scooters through spectacular green paddy fields and boulder heaps.", icon: "sun" },
          { time: "Evening", desc: "Climb the 575 steps of Anjanadri Hill (Hanuman temple) for stunning sunset views.", icon: "utensils" }
        ],
        food: "Laughing Buddha Cafe for river views and falafel platters.",
        stay: "Same as Day 1.",
        optional: ["Explore the ancient historic village of Anegundi."],
        tip: "Keep all food inside your backpack at Anjanadri Hill to avoid monkeys."
      },
      {
        day: 4,
        title: "Badami Cave Temples Excursion",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take a 2.5-hour day trip drive to Badami, the ancient capital of the Chalukya dynasty.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore the 4 spectacular rock-cut cave temples carved into red sandstone cliffs.", icon: "sun" },
          { time: "Evening", desc: "Walk along Agastya Lake, photographing the ancient Bhutanatha Temple, then return to Hampi.", icon: "utensils" }
        ],
        food: "Local restaurant in Badami for traditional Karnataka thali meals.",
        stay: "Same as Day 1.",
        optional: ["Visit the nearby archaeological museum in Badami."],
        tip: "The Badami caves are steep; wear shoes with good grip and carry water."
      },
      {
        day: 5,
        title: "Pattadakal & Aihole Monuments",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Drive to Pattadakal, a UNESCO World Heritage site displaying beautiful 7th-century temples.", icon: "coffee" },
          { time: "Afternoon", desc: "Explore Aihole, known as the 'Cradle of Indian Temple Architecture' with over 120 temples.", icon: "sun" },
          { time: "Evening", desc: "Return to Hampi and enjoy a quiet, relaxed dinner along the riverside pathways.", icon: "utensils" }
        ],
        food: "Gopi Guesthouse rooftop restaurant for healthy Indian dishes and sweet lassi.",
        stay: "Same as Day 1.",
        optional: ["Visit the Durga Temple in Aihole, famous for its unique apsidal layout."],
        tip: "Hire a local guide in Pattadakal to explain the unique blend of North and South Indian temple designs."
      },
      {
        day: 6,
        title: "Zenana Enclosure & Lotus Palace",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Walk through the walled Zenana Enclosure, exploring the beautifully symmetric Lotus Mahal.", icon: "coffee" },
          { time: "Afternoon", desc: "Visit the massive Queen's Bath and the adjacent Mahanavami Dibba platform ruins.", icon: "sun" },
          { time: "Evening", desc: "Dine at a local organic farm cafe, enjoying traditional millet roti and fresh vegetables.", icon: "utensils" }
        ],
        food: "Happy Hampi Cafe for healthy organic dishes and local fruit shakes.",
        stay: "Same as Day 1.",
        optional: ["Take a bicycle ride to the quiet, ruined Octagonal Bath."],
        tip: "Zenana enclosure has beautiful manicured green lawns, perfect for a relaxing afternoon rest."
      },
      {
        day: 7,
        title: "Hampi Bazaar & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Stroll the historic ruined arches of Hampi Bazaar, buying handmade clay replicas.", icon: "coffee" },
          { time: "Afternoon", desc: "Cross the river, retrieve your bags, and head to Hospet Railway Station or Hubli Airport.", icon: "sun" }
        ],
        food: "Local sweet shop for hot Jalebis and tea.",
        stay: "Departure.",
        optional: ["Visit the historic King's Balance monument."],
        tip: "Hospet station (30 mins drive) has overnight trains connecting directly to Bangalore and Goa."
      }
    ]
  },
  {
    id: "darjeeling-4-days",
    title: "Darjeeling & Gangtok Hills",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    highlights: `Ascend into the mist-covered foothills of the Himalayas. Tiger Hill sunrise over Mt. Kanchenjunga, steam Toy Train joyrides, organic tea gardens, Gangtok monasteries, and Tsomgo Lake.`,
    weather: {
      conditions: "Cool alpine climate. Summer (April to June) is delightful around 15-22°C (59-72°F). Winter is very cold.",
      bestTime: "October and November offer crisp, crystal-clear Himalayan views and highly stable, sunny weather."
    },
    budget: {
      total: "$700 - $1,100",
      dailyAverage: "$50/day",
      categories: [
        { name: "Accommodation", percent: 40, cost: "$280 - $440" },
        { name: "Food & Dining", percent: 25, cost: "$175 - $275" },
        { name: "Transport", percent: 20, cost: "$140 - $220" },
        { name: "Activities", percent: 15, cost: "$105 - $165" }
      ],
      tiers: [
        { name: "Budget", desc: "Cozy local homestays, eating momos and thukpa, sharing local Sumo taxis.", cost: "$22/day" },
        { name: "Mid-Range", desc: "Heritage hotels near Mall Road, private taxi, pre-booked toy train.", cost: "$55/day" },
        { name: "Luxury", desc: "5-star luxury tea estates (Windamere), private customized SUV tours.", cost: "$160+/day" }
      ],
      tips: [
        "Pre-book the Toy Train joy ride online weeks in advance.",
        "Rise early (4:00 AM) for Tiger Hill sunrise."
      ]
    },
    packing: [
      {
        category: "Essentials",
        items: [
          "Warm heavy jacket or layers (temperatures drop quickly)",
          "Motion sickness pills (winding mountain bends)",
          "Comfortable walking sneakers"
        ]
      },
      {
        category: "Clothing",
        items: [
          "Warm fleece, gloves, and woolen cap",
          "Light scarf / shawl"
        ]
      },
      {
        category: "Documents",
        items: [
          "Passport / Government ID card",
          "Inner Line Permit (Sikkim RAP)"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Darjeeling & Mall Road",
        date: "Day 1",
        schedule: [
          { time: "Morning", desc: "Arrive at Bagdogra Airport. Take a scenic drive up valleys and tea estates to Darjeeling.", icon: "coffee" },
          { time: "Afternoon", desc: "Check into historic heritage hotel. Walk the pedestrian-only Mall Road (Chowrasta).", icon: "sun" },
          { time: "Evening", desc: "Enjoy a hot pot of organic Darjeeling tea at a historic café, viewing valley lights.", icon: "utensils" }
        ],
        food: "Glenary's Bakery for fresh pastries and apple pie in a retro-British setting.",
        stay: "Elgin Darjeeling or similar heritage hotel.",
        optional: ["Visit the beautiful Observatory Hill temple behind the Mall."],
        tip: "Glenary's has a lovely ground-floor pub with live acoustic music on weekends."
      },
      {
        day: 2,
        title: "Tiger Hill Sunrise & Toy Train",
        date: "Day 2",
        schedule: [
          { time: "Morning", desc: "Wake up at 3:45 AM. Drive to Tiger Hill to watch sunrise paint Kanchenjunga in gold.", icon: "coffee" },
          { time: "Afternoon", desc: "Ride steam-powered Toy Train to Ghoom, visiting historic Ghoom Monastery.", icon: "sun" },
          { time: "Evening", desc: "Visit Himalayan Mountaineering Institute (HMI) and the Padmaja Naidu Zoo.", icon: "utensils" }
        ],
        food: "Kunga Restaurant for the best, most authentic Tibetan momos.",
        stay: "Same as Day 1.",
        optional: ["Take a ride on the Darjeeling Ropeway cable car."],
        tip: "Tiger Hill sunrise is best seen in clear winter months; check weather forecast the night before."
      },
      {
        day: 3,
        title: "Travel to Gangtok & Monasteries",
        date: "Day 3",
        schedule: [
          { time: "Morning", desc: "Drive along the Teesta River, crossing into Sikkim to reach Gangtok at 1,650m.", icon: "coffee" },
          { time: "Afternoon", desc: "Check into your hotel. Visit the grand Rumtek Monastery, the seat of the Kagyu sect.", icon: "sun" },
          { time: "Evening", desc: "Stroll along MG Marg, shopping for Sikkimese handicrafts and organic items.", icon: "utensils" }
        ],
        food: "Nimtho on MG Marg for authentic Sikkimese Thakali meals.",
        stay: "Hotel Mayfair Hill Resort or similar in Gangtok.",
        optional: ["Visit the Namgyal Institute of Tibetology."],
        tip: "Ensure your travel agent helps you secure the Sikkim permit (RAP) at Rangpo border."
      },
      {
        day: 4,
        title: "Tsomgo Lake & Yak Rides",
        date: "Day 4",
        schedule: [
          { time: "Morning", desc: "Take a morning drive to the high-altitude Tsomgo Lake at 3,753m, framed by mountains.", icon: "coffee" },
          { time: "Afternoon", desc: "Ride colorfully decorated yaks along the lake shore, taking spectacular photos.", icon: "sun" },
          { time: "Evening", desc: "Return to Gangtok, enjoying hot noodle bowls in local markets.", icon: "utensils" }
        ],
        food: "Baker's Cafe on MG Marg for excellent coffee and hot chocolate.",
        stay: "Same as Day 3.",
        optional: ["Visit the sacred Baba Mandir shrine near the lake."],
        tip: "Tsomgo Lake requires a special military permit; arrange this a day before."
      },
      {
        day: 5,
        title: "Nathula Pass Border Expedition",
        date: "Day 5",
        schedule: [
          { time: "Morning", desc: "Drive up to Nathula Pass at 4,310m, the historic Indo-China trade border pass.", icon: "coffee" },
          { time: "Afternoon", desc: "Stand next to the border fence, chatting with soldiers and viewing Tibetan plateaus.", icon: "sun" },
          { time: "Evening", desc: "Return to Gangtok and relax with a hot stone bath at your resort.", icon: "utensils" }
        ],
        food: "Mu Kimchi for authentic Korean dishes and local Sikkimese beer.",
        stay: "Same as Day 3.",
        optional: ["Visit the scenic Ban Jhakri Falls."],
        tip: "Nathula Pass permits are highly restricted and closed on Mon & Tue; plan accordingly."
      },
      {
        day: 6,
        title: "Kalimpong Hill Station Day Trip",
        date: "Day 6",
        schedule: [
          { time: "Morning", desc: "Take a 2-hour drive to the peaceful hill station of Kalimpong, nested in green ridges.", icon: "coffee" },
          { time: "Afternoon", desc: "Tour the Durpin Monastery, the historic Morgan House, and cactus nurseries.", icon: "sun" },
          { time: "Evening", desc: "Return to Gangtok for your farewell dinner, celebrating your Himalayan journey.", icon: "utensils" }
        ],
        food: "Orchid Restaurant for fresh organic local cuisine and hot thukpa.",
        stay: "Same as Day 3.",
        optional: ["Visit the local Deolo Hill viewpoint."],
        tip: "Kalimpong is much quieter than Darjeeling, offering a very peaceful mountain atmosphere."
      },
      {
        day: 7,
        title: "Siliguri & Departure",
        date: "Day 7",
        schedule: [
          { time: "Morning", desc: "Enjoy a final sunrise view of the snow peaks from your balcony.", icon: "coffee" },
          { time: "Afternoon", desc: "Drive down to Siliguri/Bagdogra Airport for your departure flight.", icon: "sun" }
        ],
        food: "Local highway diner for fresh momos and hot tea.",
        stay: "Departure.",
        optional: ["Stop at the Coronation Bridge for a quick photo view."],
        tip: "Allow at least 5 hours drive time from Gangtok to Bagdogra Airport due to hill traffic."
      }
    ]
  }
];
