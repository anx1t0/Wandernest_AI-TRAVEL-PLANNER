import os
import pandas as pd
import pickle
from sklearn.preprocessing import OneHotEncoder
from sklearn.neighbors import NearestNeighbors

# Set path
BASE_DIR = "c:\\Users\\__ankit_08\\OneDrive\\Desktop\\AI-TRAVEL-PLANNER\\ml_service"
CSV_PATH = os.path.join(BASE_DIR, "traveler_dataset.csv")

def train_recommender():
    print("Loading traveler dataset...")
    df = pd.read_csv(CSV_PATH)
    
    # Feature columns to train on
    categorical_cols = ["start_location", "destination", "budget_tier", "pace", "food_preference"]
    
    print("Encoding categorical features...")
    encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')
    encoded_features = encoder.fit_transform(df[categorical_cols])
    
    print(f"Feature matrix shape: {encoded_features.shape}")
    
    print("Fitting K-Nearest Neighbors model...")
    # Using Cosine Similarity distance metric for robust content-based retrieval
    knn = NearestNeighbors(n_neighbors=5, metric='cosine', algorithm='brute')
    knn.fit(encoded_features)
    
    # Save objects
    print("Saving trained model assets...")
    with open(os.path.join(BASE_DIR, "encoder.pkl"), "wb") as f:
        pickle.dump(encoder, f)
        
    with open(os.path.join(BASE_DIR, "knn_model.pkl"), "wb") as f:
        pickle.dump(knn, f)
        
    with open(os.path.join(BASE_DIR, "features.pkl"), "wb") as f:
        pickle.dump(encoded_features, f)
        
    print(" Recommender model trained and serialized successfully!")

if __name__ == "__main__":
    train_recommender()
