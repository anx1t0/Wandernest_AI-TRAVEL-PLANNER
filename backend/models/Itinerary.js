const mongoose = require('mongoose');
const { LocalItinerary } = require('./localDb');

const itinerarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  inputs: {
    from: String,
    to: String,
    startDate: String,
    endDate: String,
    adults: Number,
    children: Number,
    infants: Number,
    pace: String,
    weather: String,
    accommodation: String,
    food: String,
    transport: String,
    currency: String,
    budget: Number,
    additional: String,
    useML: Boolean
  },
  plan: { type: Object, required: true }, // The response from Gemini
  mlMetadata: {
    confidence: Number,
    matched_travelers: Number,
    transport_mode: String,
    transport_name: String,
    restaurant: String,
    best_dish: String,
    local_transport: String,
    places_visited: [String],
    activities: [String],
    message: String
  }
}, { timestamps: true });

const MongoItinerary = mongoose.model('Itinerary', itinerarySchema);

class ItineraryProxy {
  constructor(data) {
    if (global.dbMode && global.dbMode.useLocal) {
      return new LocalItinerary(data);
    } else {
      return new MongoItinerary(data);
    }
  }

  static find(query) {
    if (global.dbMode && global.dbMode.useLocal) {
      return LocalItinerary.find(query);
    }
    return MongoItinerary.find(query);
  }
}

module.exports = ItineraryProxy;
