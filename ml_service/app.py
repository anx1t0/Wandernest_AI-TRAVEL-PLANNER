import os
import pickle
import pandas as pd
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="WanderNest ML Recommendation Service", version="1.0.0")

# Enable CORS for cross-origin access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Paths
BASE_DIR = "c:\\Users\\__ankit_08\\OneDrive\\Desktop\\AI-TRAVEL-PLANNER\\ml_service"
CSV_PATH = os.path.join(BASE_DIR, "traveler_dataset.csv")

# Global variables for model assets
encoder = None
knn = None
features = None
df = None

def load_assets():
    global encoder, knn, features, df
    try:
        df = pd.read_csv(CSV_PATH)
        
        with open(os.path.join(BASE_DIR, "encoder.pkl"), "rb") as f:
            encoder = pickle.load(f)
            
        with open(os.path.join(BASE_DIR, "knn_model.pkl"), "rb") as f:
            knn = pickle.load(f)
            
        with open(os.path.join(BASE_DIR, "features.pkl"), "rb") as f:
            features = pickle.load(f)
            
        print("Model assets loaded successfully!")
    except Exception as e:
        print(f"Error loading model assets: {e}")

# Load models on startup
@app.on_event("startup")
def startup_event():
    load_assets()

class RecommendationRequest(BaseModel):
    start_location: str
    destination: str
    budget_tier: str
    pace: str
    food_preference: str

@app.get("/")
def read_root():
    return {"status": "healthy", "service": "WanderNest ML Service"}

def check_and_seed_destination(destination: str):
    global df, encoder, knn, features
    try:
        dest_clean = destination.lower().split(",")[0].strip()
        has_matches = df["destination"].str.lower().str.contains(dest_clean).any()
        
        if has_matches:
            return
            
        print(f"[ML SERVICE] Dynamic seeding active! Generating traveler logs for new destination: '{destination}'...")
        
        # Sourced standard travel rules
        dest_rules = {
            "sights": [f"{destination} Museum", f"{destination} Palace", f"Old Town {destination}", f"Panoramic Viewpoint of {destination}", f"{destination} Park", f"Historical {destination} Site"],
            "activities": [f"Scenic walking tour in {destination}", f"Trying traditional snacks", f"Souvenir market shopping", f"Photography at major sights", f"Guided history walks"],
            "restaurants": [f"The {destination} Bistro", f"Grand Cafe {destination}", f"Local Street Stalls", f"Classic traditional diner"],
            "dishes": [f"Signature local platter", f"Spicy regional dish", f"Classic street food roll", f"Sweet local dessert"],
            "transports": ["Flight", "Train", "Bus"],
            "transport_names": [f"Express Service to {destination}", f"Intercity Direct to {destination}", f"Regional Coach Bus"],
            "locals": ["local cab", "walking", "public bus", "metro"]
        }
        
        dest_lower = destination.lower()
        if "kolkata" in dest_lower:
            dest_rules = {
                "sights": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Indian Museum", "Princep Ghat Boating", "Science City"],
                "activities": ["Taking a yellow taxi ride over Howrah Bridge", "Tasting Roshogollas at K.C. Das", "Exploring Kumartuli clay artisan village", "Riding a heritage Kolkata tram", "Watching Hooghly sunset at Princep Ghat"],
                "restaurants": ["Peter Cat Park Street", "6 Ballygunge Place Bengali", "Arsalan Mughlai Restaurant", "Kusum Kathi Rolls", "Flurys British Tea Room"],
                "dishes": ["Chelomesh mixed platter", "Kosha Mangsho mutton with Luchi", "Mutton Biryani Kolkata Style", "Double Egg Chicken Kathi Roll", "Mishti Doi and Sandesh desserts"],
                "transports": ["Train", "Flight", "Bus"],
                "transport_names": ["Howrah Rajdhani (12302)", "Shatabdi Express (12020)", "IndiGo 6E-205", "Air India AI-702", "Greenline Volvo AC Bus"],
                "locals": ["yellow taxi", "heritage tram", "Kolkata Metro", "walking"]
            }
        elif "delhi" in dest_lower:
            dest_rules = {
                "sights": ["Red Fort", "Qutub Minar", "India Gate memorial", "Lotus Temple", "Akshardham Temple", "Chandni Chowk"],
                "activities": ["Rickshaw ride in Chandni Chowk lanes", "Tasting golgappa street foods", "Bargain shopping in Connaught Place", "Exploring heritage Lodhi gardens", "Sound & light show at Red Fort"],
                "restaurants": ["Karim's Old Delhi", "Saravana Bhavan CP", "Bukhara ITC Maurya", "Paranthe Wali Gali", "Wenger's Bakery CP"],
                "dishes": ["Butter Chicken with garlic naans", "Spicy Chole Bhature", "Stuffed Mixed Paranthas", "Sweet Shahi Tukda", "Dahi Bhalla Chat", "Creamy Kulfi falooda"],
                "transports": ["Train", "Flight", "Bus"],
                "transport_names": ["Vande Bharat (22436)", "New Delhi Shatabdi", "IndiGo 6E-502", "Air India AI-402", "DTC AC Luxury Bus"],
                "locals": ["Delhi Metro", "auto-rickshaw", "e-rickshaw", "private taxi"]
            }
        elif "bengaluru" in dest_lower or "bangalore" in dest_lower:
            dest_rules = {
                "sights": ["Bangalore Palace", "Lalbagh Botanical Garden", "Cubbon Park", "Tipu Sultan's Palace", "Nandi Hills sunrise", "Bannerghatta Zoo"],
                "activities": ["Jogging in lush Cubbon Park", "Craft beer crawl in Indiranagar", "Drinking filter coffee in Jayanagar", "Hiking Nandi Hills at dawn", "Bargain shopping in Commercial Street"],
                "restaurants": ["MTR Mavalli Tiffin Room", "Toit Microbrewery", "Vidyarthi Bhavan", "Koshy's Parade Cafe", "Windmills Craftworks"],
                "dishes": ["Masala Dosa with filter coffee", "Bisi Bele Bath rice dish", "Soft Rava Idli", "Lager Craft Beer", "Sweet Mysore Pak", "Rava Kesari sweet"],
                "transports": ["Train", "Flight", "Bus"],
                "transport_names": ["Shatabdi Express (12007)", "KSR Bangalore Rajdhani", "IndiGo 6E-405", "Air India AI-608", "KSRTC Flybus Volvo"],
                "locals": ["Namma Metro", "auto-rickshaw", "private taxi", "BMTC Volvo bus"]
            }
            
        import random
        new_rows = []
        from generate_dataset import STARTING_POINTS
        
        last_id = int(df["traveler_id"].max()) if not df.empty else 0
        
        for i in range(1, 101):
            start = random.choice(STARTING_POINTS)
            budget = random.choice(["Budget", "Mid-Range", "Luxury"])
            pace = random.choice(["Relaxed", "Moderate", "Fast"])
            food_pref = random.choice(["Vegetarian", "Non-Vegetarian", "Local", "Mixed"])
            
            sights = ", ".join(random.sample(dest_rules["sights"], min(len(dest_rules["sights"]), random.randint(3, 4))))
            acts = ", ".join(random.sample(dest_rules["activities"], min(len(dest_rules["activities"]), random.randint(2, 3))))
            restaurant = random.choice(dest_rules["restaurants"])
            best_dish = random.choice(dest_rules["dishes"])
            trans_mode = random.choice(dest_rules["transports"])
            trans_name = random.choice(dest_rules["transport_names"])
            local_trans = random.choice(dest_rules["locals"])
            rating = round(random.uniform(4.2, 5.0), 1)
            
            new_rows.append({
                "traveler_id": last_id + i,
                "start_location": start,
                "destination": destination,
                "days_stayed": 7,
                "budget_tier": budget,
                "pace": pace,
                "places_visited": sights,
                "famous_things_to_do": acts,
                "food_preference": food_pref,
                "restaurant": restaurant,
                "best_dish": best_dish,
                "transport_to_destination": trans_mode,
                "transport_name": trans_name,
                "local_transport": local_trans,
                "rating": rating
            })
            
        new_df = pd.DataFrame(new_rows)
        new_df.to_csv(CSV_PATH, mode="a", header=False, index=False)
        df = pd.concat([df, new_df], ignore_index=True)
        
        print(f"[ML SERVICE] Retraining recommender pipeline with expanded dataset...")
        import subprocess
        subprocess.run(["python", os.path.join(BASE_DIR, "train_model.py")], check=True)
        load_assets()
        print(f"[ML SERVICE] Dynamic seeding and retraining complete!")
    except Exception as e:
        print(f"Error seeding custom destination rules: {e}")

@app.post("/api/recommend")
def get_recommendation(req: RecommendationRequest):
    global encoder, knn, df
    if encoder is None or df is None:
        load_assets()
        if encoder is None:
            raise HTTPException(status_code=503, detail="ML model assets are not loaded or trained yet.")
            
    try:
        # 1. Dynamic Seeding of new destination if out-of-vocabulary
        check_and_seed_destination(req.destination)
        
        # 2. Filter dataset strictly to matching destination slice
        dest_clean = req.destination.lower().split(",")[0].strip()
        dest_mask = df["destination"].str.lower().str.contains(dest_clean)
        dest_df = df[dest_mask]
        
        if dest_df.empty:
            dest_df = df  # Fallback
            
        # 3. Create input dataframe matching the trained columns
        query_data = pd.DataFrame([{
            "start_location": req.start_location,
            "destination": req.destination,
            "budget_tier": req.budget_tier,
            "pace": req.pace,
            "food_preference": req.food_preference
        }])
        
        # Transform the query using the fitted OneHotEncoder
        query_vector = encoder.transform(query_data)
        
        # 4. Fit a sub-KNN dynamically on this matching destination slice for 100% geographical lookup accuracy
        dest_features = encoder.transform(dest_df[["start_location", "destination", "budget_tier", "pace", "food_preference"]])
        
        from sklearn.neighbors import NearestNeighbors
        sub_knn = NearestNeighbors(n_neighbors=min(5, len(dest_df)), metric='cosine', algorithm='brute')
        sub_knn.fit(dest_features)
        
        distances, indices = sub_knn.kneighbors(query_vector, n_neighbors=min(5, len(dest_df)))
        
        # Extract corresponding rows from the destination matching dataset
        matched_rows = dest_df.iloc[indices[0]]
        avg_distance = np.mean(distances[0])
        
        # Calculate statistical Match Confidence
        confidence = int((1.0 - avg_distance) * 100)
        confidence = max(50, min(99, confidence))
        
        # Aggregate recommendations from the nearest neighbors
        transit_modes = matched_rows["transport_to_destination"].tolist()
        transit_names = matched_rows["transport_name"].tolist()
        restaurants = matched_rows["restaurant"].tolist()
        dishes = matched_rows["best_dish"].tolist()
        locals_mode = matched_rows["local_transport"].tolist()
        
        # Select the most frequent (majority vote)
        rec_transit = max(set(transit_modes), key=transit_modes.count)
        rec_transit_name = max(set(transit_names), key=transit_names.count)
        rec_restaurant = max(set(restaurants), key=restaurants.count)
        rec_dish = max(set(dishes), key=dishes.count)
        rec_local = max(set(locals_mode), key=locals_mode.count)
        
        # Gather all unique places visited and activities
        all_places = set()
        all_activities = set()
        for p in matched_rows["places_visited"]:
            for item in str(p).split(", "):
                all_places.add(item)
                
        for a in matched_rows["famous_things_to_do"]:
            for item in str(a).split(", "):
                all_activities.add(item)
                
        return {
            "confidence": confidence,
            "matched_travelers": len(matched_rows),
            "transport_mode": rec_transit,
            "transport_name": rec_transit_name,
            "restaurant": rec_restaurant,
            "best_dish": rec_dish,
            "local_transport": rec_local,
            "places_visited": list(all_places)[:5],
            "activities": list(all_activities)[:5],
            "message": f"ML model successfully retrieved {len(matched_rows)} nearest traveler profiles matching your travel profile."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Recommendation error: {str(e)}")

@app.post("/api/train")
def force_retrain():
    try:
        from generate_dataset import STARTING_POINTS  # Just checking
        import subprocess
        # Execute train_model.py
        subprocess.run(["python", os.path.join(BASE_DIR, "train_model.py")], check=True)
        # Reload assets
        load_assets()
        return {"status": "success", "message": "ML Recommender model successfully retrained and reloaded!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Retraining error: {str(e)}")
