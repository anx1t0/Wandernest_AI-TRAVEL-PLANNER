import os
import csv
import random

# Ensure output directory exists
os.makedirs("c:\\Users\\__ankit_08\\OneDrive\\Desktop\\AI-TRAVEL-PLANNER\\ml_service", exist_ok=True)

# List of 20 realistic starting points
STARTING_POINTS = [
    "New Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai", 
    "Hyderabad", "Pune", "Ahmedabad", "New York", "London", 
    "Paris", "Tokyo", "Singapore", "Dubai", "San Francisco", 
    "Los Angeles", "Sydney", "Toronto", "Berlin", "Rome"
]

# Destination-specific highly consistent and detailed travel rules
DESTINATION_RULES = {
    "Tokyo, Japan": {
        "sights": ["Senso-ji Temple", "Tokyo Skytree", "Meiji Jingu Shrine", "Shibuya Crossing", "teamLab Planets", "Odaiba Beach", "Imperial Palace East Gardens"],
        "activities": ["Anime shopping in Akihabara", "Walking the Shibuya Scramble", "Experiencing teamLab digital art", "Taking a Fuji day trip", "Walking through Golden Gai bars"],
        "restaurants": ["Ichiran Ramen Shibuya", "Gyoza Lou Harajuku", "Daiwa Sushi Tsukiji", "Omoide Yokocho street stalls", "Ginza Six fine diners"],
        "dishes": ["Tonkotsu Ramen", "Fatty Tuna Sushi", "Pan-fried Gyoza", "Yakitori Skewers", "Kaiseki Multi-course", "Tsukemen dipping noodles"],
        "transports": ["Flight"],
        "transport_names": ["Japan Airlines JL-006", "All Nippon Airways NH-110", "Air India AI-306", "Singapore Airlines SQ-012", "British Airways BA-005"],
        "locals": ["subway", "metro", "JR train", "walking"]
    },
    "Paris, France": {
        "sights": ["Eiffel Tower", "Louvre Museum", "Sacré-Cœur Basilica", "Palace of Versailles", "Luxembourg Gardens", "Notre-Dame Cathedral", "Arc de Triomphe"],
        "activities": ["Seine River twilight cruise", "Boutique shopping in Marais", "Picnicking in Luxembourg Gardens", "Art gallery hopping", "Climbing the Eiffel Tower summit"],
        "restaurants": ["Café de Flore", "L'As du Fallafel", "La Maison Rose Montmartre", "Le Comptoir du Relais", "La Flottille Grand Canal"],
        "dishes": ["Butter Croissants", "Gourmet Falafel Pita", "Escargot", "Croque-monsieur", "Beef Bourguignon", "French Onion Soup"],
        "transports": ["Flight"],
        "transport_names": ["Air France AF-226", "Air India AI-143", "Emirates EK-073", "United Airlines UA-057", "Lufthansa LH-102"],
        "locals": ["Paris Metro", "RER train", "walking", "velib bicycle"]
    },
    "Rome, Italy": {
        "sights": ["Colosseum", "Vatican Museums", "St. Peter's Basilica", "Trevi Fountain", "Pantheon", "Spanish Steps", "Ostia Antica ruins"],
        "activities": ["Throwing coins in Trevi Fountain", "Hands-on pasta making class", "Walking through bohemian Trastevere", "Cycling the historic Appian Way", "Climbing St. Peter's Dome"],
        "restaurants": ["Luzi Trattoria Colosseo", "Pizzeria Da Baffetto", "Da Enzo al 29 Trastevere", "Felice a Testaccio", "Frigidarium gelateria"],
        "dishes": ["Cacio e Pepe pasta", "Carbonara", "Thin Roman-style Pizza", "Artisanal Gelato", "Crispy fried artichokes", "Tiramisu"],
        "transports": ["Flight"],
        "transport_names": ["Alitalia AZ-769", "Air India AI-123", "Emirates EK-097", "Qatar Airways QR-115", "Ryanair FR-456"],
        "locals": ["metro", "walking", "tram", "vespa scooter"]
    },
    "New York City, USA": {
        "sights": ["Empire State Building", "Central Park", "Brooklyn Bridge", "Statue of Liberty", "High Line Park", "Times Square", "Chelsea Market"],
        "activities": ["Watching a Broadway musical", "Walking across the Brooklyn Bridge", "Renting a bicycle in Central Park", "Picnicking in Bryant Park", "Visiting observatory decks"],
        "restaurants": ["Joe's Pizza Times Square", "Katz's Delicatessen", "Los Tacos No. 1 Chelsea", "Juliana's Pizza DUMBO", "Minetta Tavern Village"],
        "dishes": ["Classic New York Street Slice", "Hot Pastrami Sandwich", "Adobada Tacos", "Hand-rolled Lox Bagel", "Black Label Burger", "Levain Bakery Cookie"],
        "transports": ["Flight"],
        "transport_names": ["United Airlines UA-082", "Delta Air Lines DL-106", "Air India AI-101", "British Airways BA-178", "Singapore Airlines SQ-022"],
        "locals": ["subway", "yellow taxi", "walking", "citi bike"]
    },
    "Bali, Indonesia": {
        "sights": ["Ubud Monkey Forest", "Tegallalang Rice Terraces", "Tirta Empul Water Temple", "Kelingking Cliff Penida", "Uluwatu Cliff Temple", "Seminyak Beach", "Mount Batur Volcano"],
        "activities": ["Participating in water purification", "Riding a giant valley swing", "Hiking Mount Batur at sunrise", "Kayaking in calm waters", "Watching sunset Kecak Fire Dance"],
        "restaurants": ["Sun Sun Warung Ubud", "Sari Organik fields", "Penida Espresso", "Jimbaran Beach Club", "Sisterfields Cafe Seminyak"],
        "dishes": ["Nasi Campur Balinese", "Nasi Goreng", "Mie Goreng", "Grilled Red Snapper", "Gourmet Smoothie Bowl", "Babi Guling roast pork"],
        "transports": ["Flight"],
        "transport_names": ["Garuda Indonesia GA-882", "Singapore Airlines SQ-944", "Batik Air ID-605", "AirAsia AK-367", "IndiGo 6E-160"],
        "locals": ["scooter", "private taxi", "walking", "fast speedboat"]
    },
    "Barcelona, Spain": {
        "sights": ["Sagrada Familia", "Gothic Quarter", "Park Güell", "Montjuïc Hill", "Barceloneta Beach", "Bunkers del Carmel", "Montserrat Monastery"],
        "activities": ["Bargain gem and art hunting", "Exploring historic Gothic lanes", "Tapas crawl walking tours", "Relaxing on beach sand", "Watching Magic Fountain light show"],
        "restaurants": ["El Nacional Passeig", "El Xampanyet Born", "La Pubilla Gràcia", "Quimet & Quimet", "7 Portes beachfront"],
        "dishes": ["Iberian Ham", "Fresh anchovies in vinegar", "Catalan style lunch", "Gourmet canned tapas", "Seafood Paella", "Spanish Sangria"],
        "transports": ["Flight"],
        "transport_names": ["Iberia IB-306", "Vueling VY-204", "Air India AI-134", "Emirates EK-185", "Ryanair FR-882"],
        "locals": ["T-casual Metro", "bus", "walking", "bicing bicycle"]
    },
    "Cairo & Giza, Egypt": {
        "sights": ["Great Pyramids of Giza", "The Great Sphinx", "Egyptian Museum Tahrir", "Citadel of Saladin", "Al-Azhar Park", "Khan el-Khalili Bazaar", "Hanging Church Old Cairo"],
        "activities": ["Camel riding in Giza sands", "Shopping in medieval bazaar", "Sunset Nile Felucca sailing", "Exploring ancient Coptic lanes", "Watching Sufi Tanoura dance show"],
        "restaurants": ["Abou Shakra Pyramids", "Koshary Abou Tarek", "Naghib Mahfouz Cafe", "Nile Maxim dinner cruise", "Felfela street diner"],
        "dishes": ["Grilled Kebabs and Kofta", "Koshary vegan bowl", "Taameya falafel and ful", "Cold Mezze platters", "Mint tea and baklava"],
        "transports": ["Flight"],
        "transport_names": ["EgyptAir MS-779", "Air India AI-965", "Emirates EK-927", "Saudia SV-302", "Gulf Air GF-071"],
        "locals": ["Uber taxi", "metro", "walking", "wooden felucca"]
    },
    "Agra & Taj Mahal, UP": {
        "sights": ["Taj Mahal", "Agra Fort", "Mehtab Bagh sunset", "Fatehpur Sikri", "Tomb of Akbar", "Mathura Krishna Janmabhoomi", "Vyas Temple"],
        "activities": ["Watching Taj sunrise", "Exploring massive red-stone forts", "Marble-inlay souvenir shopping", "Bonfire under the stars at camps", "spiritual chanting at temples"],
        "restaurants": ["Pinch of Spice", "Mama Chicken Franky", "Esphahan Oberoi", "Sheroes Hangout", "Brijwasi Mithai Wala"],
        "dishes": ["Butter Chicken", "Dal Makhani with naans", "Hot Mughlai chicken rolls", "TAMATAR CHAT", "Sweet Angoori Petha", "Brijwasi Milk Peda"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Gatimaan Express (12050)", "Shatabdi Express (12002)", "Taj Express (12280)", "IndiGo 6E-204", "UPSRTC AC Gold Bus"],
        "locals": ["auto-rickshaw", "private taxi", "e-rickshaw", "walking"]
    },
    "Jaipur, Rajasthan": {
        "sights": ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jal Mahal Lake", "Patrika Gate"],
        "activities": ["Royal fort trekking", "Traditional hand-block printing", "Bapu Bazaar leather shopping", "Rajasthani folk dance evening", "Watching Nahargarh sunset view"],
        "restaurants": ["LMB Restaurant Johri", "Tapri The Tea House", "Caffe Palladio", "Chokhi Dhani resort", "Saffron Mughlai diner"],
        "dishes": ["Dal Baati Churma Rajasthani", "Lal Maas spicy mutton", "Pyaaz Kachori", "Millet flatbread with ghee", "Traditional sweet Malpua"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Ajmer Shatabdi (12015)", "Double Decker Express (12986)", "IndiGo 6E-454", "Air India AI-475", "RSRTC Super Luxury Bus"],
        "locals": ["e-rickshaw", "scooter", "auto-rickshaw", "private taxi"]
    },
    "Kerala Backwaters & Hills": {
        "sights": ["Fort Kochi colonial lanes", "Munnar Tea Valley", "Periyar Wildlife Sanctuary", "Alleppey backwaters", "Varkala Cliff Beach", "Kappil Lake", "Mattupetty Dam"],
        "activities": ["Kathakali dance drama show", "Sprawling tea factory tour", "Wild elephant spotting boat cruise", "traditional martial art show", "Ayurvedic full-body massage"],
        "restaurants": ["Kashi Art Cafe Fort", "Saravana Bhavan town", "Spice Village eco diner", "Houseboat onboard chef", "Darjeeling Cafe clifftop"],
        "dishes": ["Pearl Spot Fish Pollichathu", "Ghee Roast Dosa", "Kerala Parotta with chicken", "Banana leaf traditional lunch", "Fresh coconut water", "Ayurvedic organic tea"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Kerala Express (12626)", "Trivandrum Rajdhani (12432)", "IndiGo 6E-543", "Air India AI-508", "KSRTC Swift Premium Bus"],
        "locals": ["private taxi", "scooter", "houseboat", "canoe"]
    },
    "Goa Beach Escape": {
        "sights": ["Anjuna Beach", "Vagator Beach cliffs", "Basilica of Bom Jesus", "Fontainhas Latin quarter", "Dudhsagar Waterfalls", "Sahakari Spice Farm", "Palolem Beach South"],
        "activities": ["Jet-skiing and water sports", "Catamaran sunset cruising", "Renting act scooters for exploring", "Mandovi River sunset cruise", "Bargain shopping at flea markets"],
        "restaurants": ["Curlies Beach Shack", "Viva Panjim Latin", "Thalassa clifftop", "Dropadi Palolem beachfront", "Sahakari farm buffet"],
        "dishes": ["Spicy Pork Vindaloo", "Goan fish curry rice", "Cashew Bebinca cake dessert", "Cashew Feni drink", "Butter garlic lobster", "Fresh vegetable pakoras"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Mandovi Express (10104)", "Goa Rajdhani (12450)", "IndiGo 6E-904", "Akasa Air QP-1102", "Kadamba AC sleeper Bus"],
        "locals": ["gearless scooter", "rental car", "walking", "fast speedboat"]
    },
    "Leh-Ladakh Adventure": {
        "sights": ["Shanti Stupa", "Thiksey Monastery", "Confluence of Indus-Zanskar", "Khardung La pass", "Hunder Sand Dunes", "Pangong Tso Lake", "Tso Moriri Lake"],
        "activities": ["Bactrian two-humped camel ride", "Altitude rest and acclimatization", "Vectoring high snow walls", "Stargazing at Swiss camps", "Viewing color changing lakes"],
        "restaurants": ["Tibetan Kitchen Leh", "Chopsticks Noodle Bar", "Hunder Camp dining", "Pangong camp buffet", "Gesmo local bakery"],
        "dishes": ["Tibetan Thukpa noodle soup", "Steam filled Momos", "Lentil curry and rice", "Warm ginger honey tea", "Traditional butter tea", "Yak cheese pizza"],
        "transports": ["Flight"],
        "transport_names": ["Air India AI-445", "IndiGo 6E-2051", "SpiceJet SG-123", "Vistara UK-605"],
        "locals": ["private 4x4 SUV", "scooter", "walking", "local Sumo taxi"]
    },
    "Spiritual Varanasi, UP": {
        "sights": ["Dashashwamedh Ghat", "Kashi Vishwanath temple", "Manikarnika cremation ghat", "Sarnath Deer Park", "Ramnagar Fort", "Vyas Temple", "Assi Ghat music platform"],
        "activities": ["Watching evening fire Aarti", "Sunrise rowboat river cruise", "Alley maze walking tour", "Floating flower lamps down river", "Spiritual yoga by the river"],
        "restaurants": ["Blue Lassi Shop old alley", "Deena Chat Bhandar", "Naghib Mahfouz Cafe", "Brown Bread Bakery", "Vatika Assi rooftop"],
        "dishes": ["Tamatar Chat spicy tomato", "Steamed clay-pot fruit Lassi", "Kachori Sabzi street breakfast", "Sweet hot Jalebis", "Organic multi-grain bread", "Assi Ghat Apple Pie"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Vande Bharat Express (22436)", "Shiv Ganga Express (12560)", "IndiGo 6E-304", "Air India AI-406", "UPSRTC Janrath AC Bus"],
        "locals": ["walking", "auto-rickshaw", "wooden rowboat", "e-rickshaw"]
    },
    "Mumbai, Maharashtra": {
        "sights": ["Gateway of India", "Chhatrapati Shivaji Terminus", "Marine Drive Queen's Necklace", "Elephanta Island Caves", "Dhobi Ghat Mahalaxmi", "Haji Ali ocean mosque", "Sanjay Gandhi National Park"],
        "activities": ["Ferry ride across harbor", "Watching Dabbawalas sort lunches", "Renting bicycles in forest", "Vectoring basalt cave temples", "Walking along ocean sea wall"],
        "restaurants": ["Leopold Cafe Colaba", "Cafe Mondegar Colaba", "Bademiya late-night grill", "Swati Snacks vegetarian", "Trishna seafood diner"],
        "dishes": ["Spicy Vada Pav street food", "Keema Pav platter", "Sev Puri / Bhel Puri snacks", "Butter Garlic Crab", "Berry Pulav Parsi style", "Caramel Custard dessert"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Deccan Queen (12124)", "Mumbai Rajdhani (12951)", "IndiGo 6E-5301", "Air India AI-806", "MSRTC Shivneri AC Bus"],
        "locals": ["yellow-black taxi", "local train", "walking", "metered auto"]
    },
    "Kashmir Valley Paradise": {
        "sights": ["Dal Lake houseboats", "Shalimar Bagh Mughal Garden", "Nishat Bagh Mughal Garden", "Shankaracharya Temple", "Gulmarg snowy slopes", "Betaab Valley Pahalgam", "Thajiwas Glacier Sonamarg"],
        "activities": ["Riding canopy Shikara boat", "Gondola cable car ride (4200m)", "Sledging and skiing in Gulmarg", "Pony rides through pine valleys", "Drinking hot saffron Kahwa tea"],
        "restaurants": ["Houseboat dining salon", "Ahdoos historic restaurant", "Mughal Darbar Wazwan", "Dana Pani Pahalgam", "Khyber resort dining"],
        "dishes": ["Mughlai Lamb Rogan Josh", "Traditional Kashmiri Wazwan", "Warm Almond Saffron Kahwa", "Kashmiri trout fish curry", "Sheermal local sweet bread", "Hot vegetable dum aloo"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Air India AI-826", "IndiGo 6E-604", "SpiceJet SG-220", "Vistara UK-702", "J&K Tourism AC Coach Bus"],
        "locals": ["private hired taxi", "canopy Shikara", "pony ride", "snow sledge"]
    },
    "Hampi Ruins, Karnataka": {
        "sights": ["Virupaksha Temple", "Vittala Temple stone chariot", "Lotus Mahal royal enclave", "Elephant Stables", "Hemakuta Hill boulder sunset", "Anjanadri Hill monkey temple", "Badami red cliff caves"],
        "activities": ["Climbing rocky boulder mounds", "Spinning in round coracle boat", "Renting active gear scooters", "Trekking steps to temple peak", "Exploring sandstone cliff temples"],
        "restaurants": ["Mango Tree banana leaf", "Chillout Cafe woodfire", "Laughing Buddha riverview", "Gopi Guest House rooftop", "Badami Thali local diner"],
        "dishes": ["South Indian banana leaf thali", "Wood-fired vegetable pizza", "Fresh organic juices", "Millet Flatbread with curries", "Momo and falafel platters", "Sweet Jalebis and filter tea"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Hampi Express (16592)", "Koppal Passenger (56928)", "IndiGo 6E-712 (Hubli)", "Alliance Air 9I-802", "KSRTC Airavat AC Bus"],
        "locals": ["gearless scooter", "bicycle", "coracle boat", "auto-rickshaw"]
    },
    "Kolkata, West Bengal": {
        "sights": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Indian Museum", "Princep Ghat Boating", "Science City", "Marble Palace Mansion"],
        "activities": ["Taking a yellow taxi ride over Howrah Bridge", "Tasting Roshogollas at K.C. Das", "Exploring Kumartuli clay artisan village", "Riding a heritage Kolkata tram", "Watching Hooghly sunset at Princep Ghat"],
        "restaurants": ["Peter Cat Park Street", "6 Ballygunge Place Bengali", "Arsalan Mughlai Restaurant", "Kusum Kathi Rolls", "Flurys British Tea Room"],
        "dishes": ["Chelomesh mixed platter", "Kosha Mangsho mutton with Luchi", "Mutton Biryani Kolkata Style", "Double Egg Chicken Kathi Roll", "Mishti Doi and Sandesh desserts", "Sweet Roshogolla"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Howrah Rajdhani (12302)", "Shatabdi Express (12020)", "IndiGo 6E-205", "Air India AI-702", "Greenline Volvo AC Bus"],
        "locals": ["yellow taxi", "heritage tram", "Kolkata Metro", "walking"]
    },
    "New Delhi, Delhi NCR": {
        "sights": ["Red Fort", "Qutub Minar", "India Gate memorial", "Lotus Temple", "Humayun's Tomb", "Akshardham Temple", "Chandni Chowk markets"],
        "activities": ["Rickshaw ride in Chandni Chowk lanes", "Tasting golgappa street foods", "Bargain shopping in Connaught Place", "Exploring heritage Lodhi gardens", "Sound & light show at Red Fort"],
        "restaurants": ["Karim's Old Delhi", "Saravana Bhavan CP", "Bukhara ITC Maurya", "Paranthe Wali Gali", "Wenger's Bakery CP"],
        "dishes": ["Butter Chicken with garlic naans", "Spicy Chole Bhature", "Stuffed Mixed Paranthas", "Sweet Shahi Tukda", "Dahi Bhalla Chat", "Creamy Kulfi falooda"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Vande Bharat (22436)", "New Delhi Shatabdi", "IndiGo 6E-502", "Air India AI-402", "DTC AC Luxury Bus"],
        "locals": ["Delhi Metro", "auto-rickshaw", "e-rickshaw", "private taxi"]
    },
    "Bengaluru, Karnataka": {
        "sights": ["Bangalore Palace", "Lalbagh Botanical Garden", "Cubbon Park", "Tipu Sultan's Palace", "Nandi Hills sunrise", "Bannerghatta Zoo", "Vidhana Soudha"],
        "activities": ["Jogging in lush Cubbon Park", "Craft beer crawl in Indiranagar", "Drinking filter coffee in Jayanagar", "Hiking Nandi Hills at dawn", "Bargain shopping in Commercial Street"],
        "restaurants": ["MTR Mavalli Tiffin Room", "Toit Microbrewery", "Vidyarthi Bhavan", "Koshy's Parade Cafe", "Windmills Craftworks"],
        "dishes": ["Masala Dosa with filter coffee", "Bisi Bele Bath rice dish", "Soft Rava Idli", "Lager Craft Beer", "Sweet Mysore Pak", "Rava Kesari sweet"],
        "transports": ["Train", "Flight", "Bus"],
        "transport_names": ["Shatabdi Express (12007)", "KSR Bangalore Rajdhani", "IndiGo 6E-405", "Air India AI-608", "KSRTC Flybus Volvo"],
        "locals": ["Namma Metro", "auto-rickshaw", "private taxi", "BMTC Volvo bus"]
    }
}

# Write dataset of 5,000 traveler histories
with open("c:\\Users\\__ankit_08\\OneDrive\\Desktop\\AI-TRAVEL-PLANNER\\ml_service\\traveler_dataset.csv", mode="w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    
    # Header
    writer.writerow([
        "traveler_id",
        "start_location",
        "destination",
        "days_stayed",
        "budget_tier",
        "pace",
        "places_visited",
        "famous_things_to_do",
        "food_preference",
        "restaurant",
        "best_dish",
        "transport_to_destination",
        "transport_name",
        "local_transport",
        "rating"
    ])
    
    # Generate 5,000 highly realistic rows
    for i in range(1, 5001):
        start = random.choice(STARTING_POINTS)
        dest = random.choice(list(DESTINATION_RULES.keys()))
        rules = DESTINATION_RULES[dest]
        
        days = 7  # Standardize all itineraries to 7 days
        budget = random.choice(["Budget", "Mid-Range", "Luxury"])
        pace = random.choice(["Relaxed", "Moderate", "Fast"])
        food_pref = random.choice(["Vegetarian", "Non-Vegetarian", "Local", "Mixed"])
        
        # Consistent sampled items based on destination rules
        sights = ", ".join(random.sample(rules["sights"], min(len(rules["sights"]), random.randint(3, 4))))
        acts = ", ".join(random.sample(rules["activities"], min(len(rules["activities"]), random.randint(2, 3))))
        restaurant = random.choice(rules["restaurants"])
        best_dish = random.choice(rules["dishes"])
        trans_mode = random.choice(rules["transports"])
        trans_name = random.choice(rules["transport_names"])
        local_trans = random.choice(rules["locals"])
        rating = round(random.uniform(4.2, 5.0), 1)
        
        writer.writerow([
            i,
            start,
            dest,
            days,
            budget,
            pace,
            sights,
            acts,
            food_pref,
            restaurant,
            best_dish,
            trans_mode,
            trans_name,
            local_trans,
            rating
        ])

print(" travel_dataset.csv created with 5,000 premium traveler entries!")
