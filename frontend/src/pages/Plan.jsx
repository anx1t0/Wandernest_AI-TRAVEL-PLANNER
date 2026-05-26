import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Users, Activity, Sun, Home, Utensils, Plane, IndianRupee, Edit3, ArrowRight, ArrowLeft, Check, Loader } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useNavigate } from 'react-router-dom';

const getDestinationImage = (destination) => {
  if (!destination) return "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80";
  const clean = destination.toLowerCase();
  if (clean.includes("kolkata")) {
    return "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80"; // Howrah Bridge
  } else if (clean.includes("jaipur")) {
    return "https://images.unsplash.com/photo-1477587458883-471a5ed08be4?auto=format&fit=crop&w=1200&q=80"; // Hawa Mahal
  } else if (clean.includes("mumbai")) {
    return "https://images.unsplash.com/photo-1562158074-ee7c827be176?auto=format&fit=crop&w=1200&q=80"; // Gateway of India
  } else if (clean.includes("delhi")) {
    return "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"; // Humayun's Tomb
  } else if (clean.includes("tokyo")) {
    return "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"; // Tokyo Pagoda / Fuji
  } else if (clean.includes("paris")) {
    return "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"; // Eiffel Tower
  } else if (clean.includes("rome")) {
    return "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80"; // Colosseum
  } else if (clean.includes("bali")) {
    return "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"; // Bali Temple
  } else if (clean.includes("goa")) {
    return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"; // Goa Beach
  } else if (clean.includes("ladakh") || clean.includes("leh")) {
    return "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80"; // Ladakh Mountains
  } else if (clean.includes("kashmir")) {
    return "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=1200&q=80"; // Dal Lake / Mountains
  } else if (clean.includes("kerala")) {
    return "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"; // Kerala Houseboat
  } else if (clean.includes("varanasi")) {
    return "https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&w=1200&q=80"; // Varanasi Ghats
  } else if (clean.includes("hampi")) {
    return "https://images.unsplash.com/photo-1600100397608-f010e427cf22?auto=format&fit=crop&w=1200&q=80"; // Hampi Chariot
  } else if (clean.includes("darjeeling")) {
    return "https://images.unsplash.com/photo-1558237937-29d91694a50d?auto=format&fit=crop&w=1200&q=80"; // Darjeeling Tea Estates
  } else if (clean.includes("bengaluru") || clean.includes("bangalore")) {
    return "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80"; // Bengaluru Cubbon / Palace
  }
  return "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80";
};

const getDayImage = (destination, dayIndex) => {
  const clean = (destination || "").toLowerCase();
  const index = (dayIndex || 0) % 5;
  
  const images = {
    kolkata: [
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1563382106-90c58435d6d9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=600&q=80"
    ],
    jaipur: [
      "https://images.unsplash.com/photo-1477587458883-471a5ed08be4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598890790684-14ac20632cb1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
    ],
    mumbai: [
      "https://images.unsplash.com/photo-1562158074-ee7c827be176?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80"
    ],
    delhi: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598325250268-52462083c6ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1627894483216-2138af692e2e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=600&q=80"
    ]
  };

  for (let key in images) {
    if (clean.includes(key)) {
      return images[key][index];
    }
  }
  
  const fallbacks = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80"
  ];
  return fallbacks[index];
};

const getRealTransportOptions = (destination, mode) => {
  if (!destination || !mode) return [];
  const cleanDest = destination.toLowerCase();
  const cleanMode = mode.toLowerCase();
  
  const flightTimings = ["06:15 AM", "10:45 AM", "02:30 PM", "05:25 PM", "09:10 PM"];
  const trainTimings = ["06:00 AM", "11:20 AM", "04:55 PM", "08:30 PM", "10:15 PM"];
  const busTimings = ["07:00 AM", "10:30 AM", "03:00 PM", "07:30 PM", "09:45 PM"];
  
  const flightCarriers = {
    kolkata: ["Vistara UK-707 (4.8★)", "IndiGo 6E-2051 (4.3★)", "Air India AI-702 (4.1★)", "SpiceJet SG-284 (3.9★)"],
    jaipur: ["IndiGo 6E-454 (4.4★)", "Alliance Air 9I-643 (4.1★)", "SpiceJet SG-3402 (3.8★)"],
    delhi: ["Air India AI-402 (4.2★)", "IndiGo 6E-502 (4.5★)", "Vistara UK-812 (4.9★)", "SpiceJet SG-192 (3.7★)"],
    mumbai: ["Vistara UK-985 (4.8★)", "IndiGo 6E-5301 (4.4★)", "Air India AI-806 (4.1★)", "Akasa Air QP-1102 (4.2★)"],
    bengaluru: ["IndiGo 6E-405 (4.5★)", "Air India AI-608 (4.0★)", "Vistara UK-817 (4.8★)", "Akasa Air QP-1324 (4.3★)"],
    tokyo: ["Japan Airlines JL-006 (4.9★)", "All Nippon Airways NH-110 (4.8★)", "Air India AI-306 (4.0★)", "Singapore Airlines SQ-012 (4.9★)"],
    paris: ["Air France AF-226 (4.7★)", "Air India AI-143 (3.9★)", "Emirates EK-073 (4.8★)", "Lufthansa LH-102 (4.5★)"],
    rome: ["ITA Airways AZ-769 (4.4★)", "Air India AI-123 (4.0★)", "Emirates EK-097 (4.7★)", "Qatar Airways QR-115 (4.8★)"],
    bali: ["Garuda Indonesia GA-882 (4.6★)", "Singapore Airlines SQ-944 (4.9★)", "Batik Air ID-605 (4.1★)", "IndiGo 6E-160 (4.2★)"],
    agra: ["Alliance Air 9I-605 (4.0★)", "IndiGo 6E-204 (4.3★)"],
    goa: ["IndiGo 6E-904 (4.4★)", "Akasa Air QP-1102 (4.3★)", "Vistara UK-843 (4.8★)", "Air India AI-512 (4.0★)"],
    varanasi: ["IndiGo 6E-304 (4.4★)", "Air India AI-406 (4.1★)", "SpiceJet SG-302 (3.8★)"],
    hampi: ["Alliance Air 9I-802 (4.0★)", "IndiGo 6E-712 (4.3★)"],
    kashmir: ["Air India AI-826 (4.1★)", "IndiGo 6E-604 (4.4★)", "Vistara UK-702 (4.8★)", "SpiceJet SG-220 (3.9★)"],
    ny: ["Delta Air Lines DL-106 (4.6★)", "United Airlines UA-082 (4.4★)", "British Airways BA-178 (4.3★)", "Singapore Airlines SQ-022 (4.9★)"],
    barcelona: ["Iberia IB-306 (4.3★)", "Vueling VY-204 (4.1★)", "Emirates EK-185 (4.8★)", "Ryanair FR-882 (3.8★)"],
    cairo: ["EgyptAir MS-779 (4.2★)", "Emirates EK-927 (4.7★)", "Saudia SV-302 (4.1★)", "Gulf Air GF-071 (4.0★)"],
    kerala: ["IndiGo 6E-543 (4.4★)", "Air India AI-508 (4.1★)", "Vistara UK-822 (4.8★)"],
    leh: ["Air India AI-445 (4.2★)", "IndiGo 6E-2051 (4.4★)", "SpiceJet SG-123 (3.8★)"]
  };

  const trainCarriers = {
    kolkata: ["Howrah Rajdhani (12302) (4.8★)", "Howrah Duronto (12274) (4.5★)", "Poorva Express (12304) (4.1★)", "Kolkata Shatabdi (12020) (4.3★)"],
    jaipur: ["Ajmer Shatabdi (12015) (4.8★)", "Double Decker Exp (12986) (4.4★)", "Jaipur Superfast (12956) (4.2★)"],
    delhi: ["Vande Bharat Exp (22436) (4.9★)", "New Delhi Shatabdi (12002) (4.7★)", "NDLS Rajdhani (12952) (4.8★)"],
    mumbai: ["Mumbai Rajdhani (12951) (4.8★)", "Tejas Express (82902) (4.6★)", "Deccan Queen (12124) (4.5★)", "Golden Temple Mail (12903) (4.1★)"],
    bengaluru: ["KSR Bengaluru Rajdhani (22692) (4.7★)", "Shatabdi Express (12007) (4.6★)", "Karnataka Express (12628) (4.1★)"],
    tokyo: ["Shinkansen Nozomi Bullet (4.9★)", "Narita Express N'EX (4.7★)", "Yamanote Line Local (4.6★)"],
    paris: ["Eurostar High-Speed (4.8★)", "TGV InOui Premium (4.7★)", "RER Regional Rail (4.2★)"],
    rome: ["Frecciarossa High-Speed (4.8★)", "Italo Treno Direct (4.7★)", "Leonardo Express (4.5★)"],
    bali: ["None (Denpasar Scenic Rail) (3.5★)"],
    agra: ["Gatimaan Express (12050) (4.9★)", "Shatabdi Express (12002) (4.8★)", "Taj Express (12280) (4.2★)"],
    goa: ["Madgaon Rajdhani (12450) (4.7★)", "Mandovi Express (10104) (4.3★)", "Mangaluru Express (12133) (4.2★)"],
    varanasi: ["Vande Bharat Exp (22436) (4.9★)", "Shiv Ganga Exp (12560) (4.5★)", "Kashi Vishwanath Exp (15128) (4.0★)"],
    hampi: ["Hampi Express (16592) (4.2★)", "Koppal Passenger (56928) (3.6★)", "Amaravati Express (18047) (3.9★)"],
    kashmir: ["None (Banihal-Baramulla Rail) (4.0★)"],
    ny: ["Amtrak Acela Express (4.6★)", "LIRR Double Decker (4.1★)", "PATH Train Metro (4.0★)"],
    barcelona: ["AVE High-Speed Renfe (4.8★)", "Ouigo Spain (4.4★)", "Rodalies de Catalunya (4.0★)"],
    cairo: ["Watanania Sleeper Train (4.1★)", "Egyptian National Rail (3.6★)"],
    kerala: ["Trivandrum Rajdhani (12432) (4.8★)", "Kerala Express (12626) (4.2★)"],
    leh: ["None (Bilaspur-Leh Rail) (3.2★)"]
  };

  const busCarriers = {
    kolkata: ["Greenline Volvo AC Sleeper (4.4★)", "Royal Cruiser Scania Multi-Axle (4.5★)", "SBSTC AC Gold Coach (3.9★)"],
    jaipur: ["RSRTC Super Luxury Volvo (4.3★)", "Goldline Scania Sleeper (4.1★)", "Maharani AC Multi-Axle (4.0★)"],
    delhi: ["DTC Premium AC Coach (4.1★)", "Zingbus Volvo Sleeper (4.2★)", "IntrCity SmartBus AC Multi-Axle (4.4★)"],
    mumbai: ["MSRTC Shivneri AC Bus (4.6★)", "Neeta Travels Scania Sleeper (3.9★)", "VRL Travels AC Sleeper (4.2★)"],
    bengaluru: ["KSRTC Flybus Volvo Multi-Axle (4.7★)", "Greenline Travels AC Sleeper (4.1★)", "SRS Travels AC Sleeper (3.9★)"],
    tokyo: ["Willer Express AC Coach (4.4★)", "Tokyo Limousine Bus (4.5★)"],
    paris: ["FlixBus Premium Sleeper (4.1★)", "BlaBlaCar Bus AC (4.0★)"],
    rome: ["FlixBus Europe AC Bus (4.2★)", "Marino Bus Luxury (4.0★)"],
    bali: ["Perama Tour Shuttle Bus (4.0★)", "Kura-Kura Tourist Shuttle (4.3★)"],
    agra: ["UPSRTC AC Gold Bus (4.0★)", "Taj Express Tourist Volvo (4.2★)"],
    goa: ["Kadamba AC Sleeper Bus (4.1★)", "Paulo Travels Multi-Axle (3.8★)", "Atmaram Travels AC Sleeper (4.0★)"],
    varanasi: ["UPSRTC Janrath AC Bus (4.1★)", "Safar SmartBus Volvo (4.3★)"],
    hampi: ["KSRTC Airavat AC Bus (4.4★)", "SRS Travels AC Sleeper (4.0★)"],
    kashmir: ["J&K Tourism AC Coach Bus (4.1★)", "Kashmir Premium Shuttle (3.9★)"],
    ny: ["Greyhound Premium Bus (3.8★)", "Peter Pan Coach (3.9★)", "Megabus AC Sleeper (4.0★)"],
    barcelona: ["Alsa Premium Coach (4.3★)", "FlixBus Spain (4.1★)"],
    cairo: ["Go Bus Deluxe DD (4.3★)", "Super Jet AC Coach (4.0★)"],
    kerala: ["KSRTC Swift Premium Sleeper (4.4★)", "Kallada Travels AC Sleeper (3.9★)"],
    leh: ["HRTC Manali-Leh Deluxe (4.2★)", "JKSRTC Srinagar-Leh AC Bus (4.0★)"]
  };

  let source = "kolkata";
  const matchKeys = [
    { key: "kolkata", matches: ["kolkata", "calcutta"] },
    { key: "jaipur", matches: ["jaipur", "pink city"] },
    { key: "delhi", matches: ["delhi", "ncr"] },
    { key: "mumbai", matches: ["mumbai", "bombay"] },
    { key: "bengaluru", matches: ["bengaluru", "bangalore"] },
    { key: "tokyo", matches: ["tokyo", "japan"] },
    { key: "paris", matches: ["paris", "france"] },
    { key: "rome", matches: ["rome", "italy"] },
    { key: "bali", matches: ["bali", "indonesia"] },
    { key: "agra", matches: ["agra", "taj"] },
    { key: "goa", matches: ["goa", "beach"] },
    { key: "varanasi", matches: ["varanasi", "kashi"] },
    { key: "hampi", matches: ["hampi", "ruins"] },
    { key: "kashmir", matches: ["kashmir", "srinagar", "gulmarg", "pahalgam"] },
    { key: "ny", matches: ["new york", "nyc", "york"] },
    { key: "barcelona", matches: ["barcelona", "spain"] },
    { key: "cairo", matches: ["cairo", "giza", "egypt"] },
    { key: "kerala", matches: ["kerala", "alleppey", "munnar", "cochin", "kochi"] },
    { key: "leh", matches: ["leh", "ladakh"] }
  ];

  for (let item of matchKeys) {
    if (item.matches.some(m => cleanDest.includes(m))) {
      source = item.key;
      break;
    }
  }

  let carrierList = [];
  if (cleanMode === "flight") carrierList = flightCarriers[source] || [];
  else if (cleanMode === "train") carrierList = trainCarriers[source] || [];
  else if (cleanMode === "bus") carrierList = busCarriers[source] || [];
  
  if (carrierList.length === 0) {
    if (cleanMode === "flight") {
      carrierList = ["IndiGo 6E-901 (4.3★)", "Air India AI-501 (4.0★)", "SpiceJet SG-102 (3.8★)"];
    } else if (cleanMode === "train") {
      carrierList = ["Express Train (4.0★)", "Superfast SF Express (4.2★)", "Shatabdi Express (4.6★)"];
    } else {
      carrierList = ["State Super Luxury Volvo (4.1★)", "Zingbus AC Multi-Axle (4.3★)"];
    }
  }

  return carrierList.map((name, idx) => {
    let timingList = flightTimings;
    if (cleanMode === "train") timingList = trainTimings;
    else if (cleanMode === "bus") timingList = busTimings;
    
    return {
      name: name.split(" (")[0],
      rating: name.includes("(") ? name.split(" (")[1].replace(")", "") : "4.2★",
      timing: timingList[idx % timingList.length]
    };
  });
};

const getRealHotelOptions = (destination, stars, maxPrice, currency) => {
  if (!destination) return [];
  const cleanDest = destination.toLowerCase();
  
  const allHotels = {
    kolkata: [
      { name: "The Peerless Inn Kolkata", stars: "3-Star", rating: "4.0★", price: 2200, location: "Near Esplanade Metro" },
      { name: "Kip Hotel Salt Lake", stars: "3-Star", rating: "4.1★", price: 1800, location: "Salt Lake Sector 5" },
      { name: "Hotel Hindusthan International (HHI)", stars: "4-Star", rating: "4.3★", price: 4500, location: "Elgin Road" },
      { name: "Novotel Kolkata Hotel and Residences", stars: "4-Star", rating: "4.4★", price: 5800, location: "New Town Action Area 1" },
      { name: "The Oberoi Grand Kolkata", stars: "5-Star", rating: "4.9★", price: 9500, location: "Chowringhee Landmark" },
      { name: "Taj Bengal Kolkata", stars: "5-Star", rating: "4.8★", price: 8800, location: "Alipore Royal District" },
      { name: "ITC Sonar Luxury Collection", stars: "5-Star", rating: "4.7★", price: 8200, location: "EM Bypass Hub" }
    ],
    jaipur: [
      { name: "Umaid Bhawan Hotel", stars: "3-Star", rating: "4.2★", price: 2000, location: "Bani Park Heritage Zone" },
      { name: "Pearl Palace Heritage", stars: "3-Star", rating: "4.4★", price: 2400, location: "Ajmer Road" },
      { name: "Shahpura House Haveli", stars: "4-Star", rating: "4.5★", price: 4800, location: "Bani Park Palace Area" },
      { name: "Alsisar Haveli Royal Heritage", stars: "4-Star", rating: "4.4★", price: 5200, location: "Sansar Chandra Road" },
      { name: "The Rambagh Palace (Taj)", stars: "5-Star", rating: "4.9★", price: 18000, location: "Bhawani Singh Road" },
      { name: "The Rajmahal Palace RAAS", stars: "5-Star", rating: "4.8★", price: 12000, location: "Sardar Patel Marg" },
      { name: "Jai Mahal Palace Mughal Gardens", stars: "5-Star", rating: "4.7★", price: 9500, location: "Civil Lines Royal Estate" }
    ],
    delhi: [
      { name: "Hotel Bloomrooms Connaught Place", stars: "3-Star", rating: "4.2★", price: 3200, location: "Connaught Place CP" },
      { name: "The Prime Balaji Deluxe", stars: "3-Star", rating: "4.0★", price: 2100, location: "Pahar Ganj Near Station" },
      { name: "The Park New Delhi", stars: "4-Star", rating: "4.3★", price: 6200, location: "Parliament Street CP" },
      { name: "Welcomhotel by ITC Hotels Dwarka", stars: "4-Star", rating: "4.4★", price: 5800, location: "Sector 10 Dwarka" },
      { name: "The Leela Palace New Delhi", stars: "5-Star", rating: "4.9★", price: 14500, location: "Chanakyapuri Diplomatic Enclave" },
      { name: "The Taj Mahal Hotel Delhi", stars: "5-Star", rating: "4.8★", price: 13000, location: "Mansingh Road Luxury Hub" },
      { name: "ITC Maurya - The Luxury Collection", stars: "5-Star", rating: "4.7★", price: 11000, location: "Sardar Patel Marg Diplomatic" }
    ],
    mumbai: [
      { name: "Hotel Suba Palace Colaba", stars: "3-Star", rating: "4.1★", price: 3800, location: "Colaba Near Gateway" },
      { name: "Abode Bombay Boutique Hotel", stars: "3-Star", rating: "4.3★", price: 4200, location: "Colaba Art District" },
      { name: "Fariyas Hotel Colaba", stars: "4-Star", rating: "4.2★", price: 7500, location: "Colaba Waterfront" },
      { name: "Gordon House Hotel Theme Rooms", stars: "4-Star", rating: "4.4★", price: 6800, location: "Colaba Plaza" },
      { name: "The Taj Mahal Palace Mumbai", stars: "5-Star", rating: "4.9★", price: 18500, location: "Apollo Bunder Landmark" },
      { name: "The Oberoi Mumbai Marine Drive", stars: "5-Star", rating: "4.8★", price: 14000, location: "Marine Drive Shoreline" },
      { name: "The St. Regis Mumbai Parel", stars: "5-Star", rating: "4.7★", price: 11500, location: "Lower Parel Luxury Tower" }
    ],
    bengaluru: [
      { name: "Hotel Bloomrooms @ Link Road", stars: "3-Star", rating: "4.2★", price: 2800, location: "Near Railway Station" },
      { name: "Ibis Bengaluru City Centre", stars: "3-Star", rating: "4.1★", price: 3500, location: "Richmond Road" },
      { name: "The Paul Bangalore", stars: "4-Star", rating: "4.4★", price: 6500, location: "Domlur Hub" },
      { name: "Welcomhotel by ITC Richmond Road", stars: "4-Star", rating: "4.5★", price: 7500, location: "Richmond Town" },
      { name: "The Leela Palace Bengaluru", stars: "5-Star", rating: "4.9★", price: 13500, location: "Old Airport Road" },
      { name: "ITC Gardenia Luxury Collection", stars: "5-Star", rating: "4.8★", price: 12000, location: "Residency Road" }
    ],
    tokyo: [
      { name: "Hotel Gracery Shinjuku", stars: "3-Star", rating: "4.3★", price: 7500, location: "Shinjuku Kabukicho" },
      { name: "APA Hotel Shinjuku Kabukicho Tower", stars: "3-Star", rating: "4.1★", price: 6000, location: "Shinjuku Hub" },
      { name: "Shibuya Stream Excel Hotel Tokyu", stars: "4-Star", rating: "4.6★", price: 14000, location: "Shibuya Station Link" },
      { name: "The Tokyo Station Hotel", stars: "4-Star", rating: "4.7★", price: 18000, location: "Marunouchi Tokyo Station" },
      { name: "Aman Tokyo", stars: "5-Star", rating: "4.9★", price: 38000, location: "Otemachi Financial Enclave" },
      { name: "The Ritz-Carlton Tokyo", stars: "5-Star", rating: "4.8★", price: 28000, location: "Roppongi Midtown Tower" }
    ],
    paris: [
      { name: "Hotel Generator Paris", stars: "3-Star", rating: "4.0★", price: 4500, location: "10th Arrondissement Canal" },
      { name: "Hotel Caron de Beaumarchais", stars: "3-Star", rating: "4.4★", price: 8500, location: "Le Marais Historic District" },
      { name: "Hotel Regina Louvre", stars: "4-Star", rating: "4.6★", price: 16000, location: "Opposite Louvre Museum" },
      { name: "Hotel Les Dames du Panthéon", stars: "4-Star", rating: "4.5★", price: 13500, location: "Latin Quarter Panthéon" },
      { name: "The Ritz Paris", stars: "5-Star", rating: "4.9★", price: 45000, location: "Place Vendôme Royal Square" },
      { name: "Shangri-La Paris", stars: "5-Star", rating: "4.8★", price: 35000, location: "Near Trocadéro Eiffel View" }
    ],
    rome: [
      { name: "Hotel Navona Rome", stars: "3-Star", rating: "4.3★", price: 6500, location: "Near Piazza Navona" },
      { name: "Hotel Santa Maria", stars: "3-Star", rating: "4.5★", price: 7800, location: "Trastevere Bohemian quarter" },
      { name: "The Pantheon Iconic Rome Hotel", stars: "4-Star", rating: "4.6★", price: 14500, location: "Steps from the Pantheon" },
      { name: "Hotel Artemide", stars: "4-Star", rating: "4.5★", price: 12000, location: "Via Nazionale Central shopping" },
      { name: "Hotel de Russie", stars: "5-Star", rating: "4.9★", price: 26000, location: "Near Piazza del Popolo" },
      { name: "The St. Regis Rome", stars: "5-Star", rating: "4.8★", price: 24000, location: "Via Vittorio Emanuele Orlando" }
    ],
    bali: [
      { name: "Taman Bintang Villa Ubud", stars: "3-Star", rating: "4.3★", price: 2200, location: "Ubud Rice Terraces Edge" },
      { name: "Lloyd's Inn Seminyak", stars: "3-Star", rating: "4.2★", price: 3200, location: "Double Six Beach district" },
      { name: "Alila Ubud Resort", stars: "4-Star", rating: "4.6★", price: 7500, location: "Ayung River Valley jungle" },
      { name: "The Haven Bali Seminyak", stars: "4-Star", rating: "4.4★", price: 5500, location: "Seminyak Central Highway" },
      { name: "Mandapa, A Ritz-Carlton Reserve", stars: "5-Star", rating: "4.9★", price: 22000, location: "Ubud Sacred Valley Wilderness" },
      { name: "The Mulia Bali Nusa Dua", stars: "5-Star", rating: "4.8★", price: 16000, location: "Nusa Dua Luxury Beachfront" }
    ],
    agra: [
      { name: "Howard Plaza The Fern", stars: "3-Star", rating: "4.1★", price: 2800, location: "Fatehabad Road Near Taj" },
      { name: "Hotel Bloomrooms Taj East Gate", stars: "3-Star", rating: "4.3★", price: 3200, location: "Taj East Gate Road" },
      { name: "DoubleTree by Hilton Agra", stars: "4-Star", rating: "4.4★", price: 5200, location: "Fatehabad Road Taj View" },
      { name: "Crystal Sarovar Premiere", stars: "4-Star", rating: "4.3★", price: 4800, location: "Tajganj Tourist District" },
      { name: "The Oberoi Amarvilas", stars: "5-Star", rating: "4.9★", price: 22000, location: "600m from Taj Mahal Direct View" },
      { name: "ITC Mughal Luxury Resort", stars: "5-Star", rating: "4.7★", price: 9500, location: "Tajganj Royal Mughal Gardens" }
    ],
    goa: [
      { name: "Casa Anjuna Heritage Boutique", stars: "3-Star", rating: "4.2★", price: 3200, location: "Anjuna Flea Market Zone" },
      { name: "Bloomsuites l Lanza Goa", stars: "3-Star", rating: "4.1★", price: 3500, location: "Calangute Beach Central" },
      { name: "Seashell Suites and Villas", stars: "4-Star", rating: "4.6★", price: 7500, location: "Candolim Golden Street" },
      { name: "Santana Beach Resort", stars: "4-Star", rating: "4.4★", price: 5200, location: "Sinquerim Beachfront" },
      { name: "Taj Exotica Resort & Spa Goa", stars: "5-Star", rating: "4.9★", price: 16500, location: "Benaulim White Sands South" },
      { name: "The W Goa", stars: "5-Star", rating: "4.7★", price: 18000, location: "Vagator Beach Red Cliffs" }
    ],
    varanasi: [
      { name: "Ganges View Guest House", stars: "3-Star", rating: "4.2★", price: 2800, location: "Assi Ghat Waterfront" },
      { name: "Hotel Bloomrooms @ Assi Ghat", stars: "3-Star", rating: "4.3★", price: 3200, location: "Near Assi Ghat" },
      { name: "Alka Hotel Dashashwamedh", stars: "4-Star", rating: "4.4★", price: 4500, location: "Main Ghat Steps direct riverfront" },
      { name: "BrijRama Palace Heritage Hotel", stars: "4-Star", rating: "4.8★", price: 11500, location: "Darbhanga Ghat Stone Fortress" },
      { name: "Taj Ganges Varanasi", stars: "5-Star", rating: "4.7★", price: 9800, location: "Nadesar Palace Grounds" },
      { name: "Nadesar Palace (Taj)", stars: "5-Star", rating: "4.9★", price: 22000, location: "Royal Heritage Gardens" }
    ],
    hampi: [
      { name: "Gopi Guest House", stars: "3-Star", rating: "4.1★", price: 1500, location: "Near Virupaksha Temple bazaar" },
      { name: "Clark's Inn Hampi", stars: "3-Star", rating: "4.0★", price: 2800, location: "Kamalapur Near Archeological Museum" },
      { name: "Heritage Resort Hampi", stars: "4-Star", rating: "4.4★", price: 5500, location: "Hospet Road mango groves" },
      { name: "Hampi's Boulders Resort", stars: "4-Star", rating: "4.3★", price: 6200, location: "Tungabhadra River rock beds" },
      { name: "Evolve Back, Kamalapura Palace", stars: "5-Star", rating: "4.9★", price: 18500, location: "Vijayanagara Palace Architecture Hub" },
      { name: "Hampi Royal Orchid", stars: "5-Star", rating: "4.5★", price: 7500, location: "Kamalapur Royal Enclave" }
    ],
    kashmir: [
      { name: "Hotel Heevan Pahalgam", stars: "3-Star", rating: "4.2★", price: 4500, location: "Lidder River shoreline" },
      { name: "The Grand Kaisar Srinagar", stars: "3-Star", rating: "4.1★", price: 3800, location: "Rajbagh Srinagar center" },
      { name: "Kolahoi Green Resort Srinagar", stars: "4-Star", rating: "4.4★", price: 7800, location: "Srinagar Boulevard Dal Lake view" },
      { name: "Hotel Shaw Inn Gulmarg", stars: "4-Star", rating: "4.5★", price: 8500, location: "Near Gulmarg Gondola Base" },
      { name: "The Khyber Himalayan Resort & Spa", stars: "5-Star", rating: "4.9★", price: 24000, location: "Gulmarg Snow Peaks Forest" },
      { name: "Taj Palace Dal Lake (Vivanta)", stars: "5-Star", rating: "4.8★", price: 14500, location: "Krinshashahi Hills Dal Lake Overlook" }
    ],
    ny: [
      { name: "The Jane Hotel", stars: "3-Star", rating: "4.1★", price: 6500, location: "Greenwich Village Waterfront" },
      { name: "Arlo NoMad", stars: "3-Star", rating: "4.3★", price: 9500, location: "Midtown Near Empire State" },
      { name: "The Standard High Line", stars: "4-Star", rating: "4.5★", price: 16500, location: "Meatpacking Hip District" },
      { name: "Ace Hotel Brooklyn", stars: "4-Star", rating: "4.4★", price: 13000, location: "Downtown Brooklyn Core" },
      { name: "The Plaza Hotel", stars: "5-Star", rating: "4.9★", price: 35000, location: "Fifth Avenue & Central Park" },
      { name: "The Carlyle, A Rosewood Hotel", stars: "5-Star", rating: "4.8★", price: 32000, location: "Upper East Side Residential" }
    ],
    barcelona: [
      { name: "Chic & Basic Velvet", stars: "3-Star", rating: "4.1★", price: 5800, location: "Placa Espanya Central lanes" },
      { name: "Hotel Praktik Bakery", stars: "3-Star", rating: "4.3★", price: 6800, location: "Eixample Design hub" },
      { name: "Hotel 1898 La Rambla", stars: "4-Star", rating: "4.5★", price: 12500, location: "La Rambla Historic Boulevard" },
      { name: "H10 Madison Gothic Quarter", stars: "4-Star", rating: "4.5★", price: 11000, location: "Near Barcelona Cathedral" },
      { name: "Hotel Arts Barcelona", stars: "5-Star", rating: "4.8★", price: 22000, location: "Port Olímpic Waterfront" },
      { name: "W Barcelona (The Sail Hotel)", stars: "5-Star", rating: "4.7★", price: 24000, location: "Barceloneta Beach Tip" }
    ],
    cairo: [
      { name: "Valencia Hotel Downtown", stars: "3-Star", rating: "4.1★", price: 1800, location: "Tahrir Square Shopping lanes" },
      { name: "Giza Pyramids View Inn", stars: "3-Star", rating: "4.4★", price: 2500, location: "Direct Sphinx panorama" },
      { name: "Steigenberger Pyramids Cairo", stars: "4-Star", rating: "4.3★", price: 5500, location: "Pyramids complex walking gate" },
      { name: "Sofitel Cairo Nile El Gezirah", stars: "4-Star", rating: "4.6★", price: 8800, location: "Private Island on the Nile" },
      { name: "The Ritz-Carlton Nile Cairo", stars: "5-Star", rating: "4.8★", price: 14500, location: "Corniche El Nil Central Hub" },
      { name: "Marriott Mena House", stars: "5-Star", rating: "4.9★", price: 18500, location: "Direct view of Giza Pyramids" }
    ],
    kerala: [
      { name: "Kashi Art Boutique Stay", stars: "3-Star", rating: "4.3★", price: 2400, location: "Fort Kochi colonial street" },
      { name: "Blanket Hotel Munnar", stars: "3-Star", rating: "4.2★", price: 3800, location: "Attukad Waterfall gorge" },
      { name: "Alleppey Heritage Houseboat", stars: "4-Star", rating: "4.5★", price: 6500, location: "Alleppey Backwaters cruise" },
      { name: "Spice Village CGH Earth", stars: "4-Star", rating: "4.6★", price: 8500, location: "Thekkady Periyar woods" },
      { name: "The Kumarakom Lake Resort", stars: "5-Star", rating: "4.9★", price: 16500, location: "Vembanad Lake shores" },
      { name: "Niraamaya Retreats Surya Samudra", stars: "5-Star", rating: "4.8★", price: 14000, location: "Kovalam Clifftop ocean views" }
    ],
    leh: [
      { name: "Hotel Omsel Leh", stars: "3-Star", rating: "4.1★", price: 2500, location: "Changspa Quiet Suburbs" },
      { name: "Hotel Singge Palace", stars: "3-Star", rating: "4.2★", price: 3800, location: "Leh Main Bazaar lanes" },
      { name: "Hunder Swiss Deluxe Camps", stars: "4-Star", rating: "4.4★", price: 6000, location: "Nubra Valley Double-Hump Camel Zone" },
      { name: "The Grand Dragon Ladakh", stars: "4-Star", rating: "4.7★", price: 8500, location: "Old Road Mountain View" },
      { name: "The Ladakh Sarai Resort", stars: "5-Star", rating: "4.8★", price: 12500, location: "Saboo Valley Oasis" },
      { name: "Ultimate Traveller Camp Thiksey", stars: "5-Star", rating: "4.9★", price: 24000, location: "Thiksey Monastery Base camps" }
    ]
  };

  let source = "kolkata";
  const matchKeys = [
    { key: "kolkata", matches: ["kolkata", "calcutta"] },
    { key: "jaipur", matches: ["jaipur", "pink city"] },
    { key: "delhi", matches: ["delhi", "ncr"] },
    { key: "mumbai", matches: ["mumbai", "bombay"] },
    { key: "bengaluru", matches: ["bengaluru", "bangalore"] },
    { key: "tokyo", matches: ["tokyo", "japan"] },
    { key: "paris", matches: ["paris", "france"] },
    { key: "rome", matches: ["rome", "italy"] },
    { key: "bali", matches: ["bali", "indonesia"] },
    { key: "agra", matches: ["agra", "taj"] },
    { key: "goa", matches: ["goa", "beach"] },
    { key: "varanasi", matches: ["varanasi", "kashi"] },
    { key: "hampi", matches: ["hampi", "ruins"] },
    { key: "kashmir", matches: ["kashmir", "srinagar", "gulmarg", "pahalgam"] },
    { key: "ny", matches: ["new york", "nyc", "york"] },
    { key: "barcelona", matches: ["barcelona", "spain"] },
    { key: "cairo", matches: ["cairo", "giza", "egypt"] },
    { key: "kerala", matches: ["kerala", "alleppey", "munnar", "cochin", "kochi"] },
    { key: "leh", matches: ["leh", "ladakh"] }
  ];

  for (let item of matchKeys) {
    if (item.matches.some(m => cleanDest.includes(m))) {
      source = item.key;
      break;
    }
  }

  const list = allHotels[source] || [
    { name: "Cozy local Guesthouse central", stars: "3-Star", rating: "4.1★", price: 1500, location: "Central transit Heights" },
    { name: "Transit Inn Boutique Stay", stars: "3-Star", rating: "4.2★", price: 2200, location: "Central avenues" },
    { name: "Premium Boutique Hotel & Pools", stars: "4-Star", rating: "4.4★", price: 4200, location: "Downtown central Hub" },
    { name: "Modern Heritage Hotel & Cafe", stars: "4-Star", rating: "4.3★", price: 3800, location: "Central avenues park" },
    { name: "5-Star Heritage Royal Palace", stars: "5-Star", rating: "4.9★", price: 8500, location: "Royal panoramic landscape" },
    { name: "The Landmark Grand Palace Resort", stars: "5-Star", rating: "4.8★", price: 7800, location: "Lakeside luxury estate" }
  ];

  const rate = currency === 'USD' ? 83 : currency === 'EUR' ? 90 : 1;

  return list
    .map(h => ({
      ...h,
      displayPrice: Math.round(h.price / rate)
    }))
    .filter(h => {
      const starMatch = !stars || h.stars === stars;
      const priceMatch = h.displayPrice <= maxPrice;
      return starMatch && priceMatch;
    });
};

const getTransportImage = (dayIndex) => {
  const images = [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", // Airplane wing
    "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=800&q=80", // Scenic train
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", // Retro car
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80", // Train tracks station
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"  // Road trip
  ];
  return images[(dayIndex || 0) % images.length];
};

const getHotelImage = (dayIndex) => {
  const images = [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80", // Luxury bedroom
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", // Elegant boutique hotel
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", // Serene resort lobby
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80", // Heritage suite
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"  // Infinity pool view
  ];
  return images[(dayIndex || 0) % images.length];
};

const getFoodImage = (dayIndex) => {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Table spread
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80", // Fine dining
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80", // Street food hot bowl
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", // Coffee table
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"  // Healthy colorful salad
  ];
  return images[(dayIndex || 0) % images.length];
};

const getTwilightImage = (dayIndex) => {
  const images = [
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80", // Twilight skyline
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", // Glowing night market
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", // Warm jazz bar
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Calm twilight sunset
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"  // Night skyline
  ];
  return images[(dayIndex || 0) % images.length];
};

const parseItinerary = (markdownText) => {
  try {
    if (!markdownText) return null;
    
    // 1. If it's already an object, use it directly!
    if (typeof markdownText === 'object') {
      return markdownText;
    }
    
    // 2. Check if it's a JSON string
    const trimmed = markdownText.trim();
    let cleanedText = trimmed;
    if (cleanedText.includes("```")) {
      cleanedText = cleanedText.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
    }
    
    if (cleanedText.startsWith('{') && cleanedText.endsWith('}')) {
      try {
        const obj = JSON.parse(cleanedText);
        if (obj && (obj.days || obj.stays || obj.budget)) {
          return obj;
        }
      } catch (jsonErr) {
        console.error("JSON parsing within brackets failed. Falling back to markdown parser.", jsonErr);
      }
    }
    
    // 3. Original Markdown Regex Parser Fallback
    const sections = {
      title: "Your Custom Itinerary",
      stays: [],
      days: [],
      budget: []
    };

    // Extract main title
    const titleMatch = markdownText.match(/^# 🌟 (.*)$/m) || markdownText.match(/^# (.*)$/m);
    if (titleMatch) {
      sections.title = titleMatch[1];
    }

    // Split by markdown headings
    const parts = markdownText.split(/(?=## )/);

    parts.forEach(part => {
      const cleanPart = part.toLowerCase();
      if (cleanPart.includes("accommodation") || cleanPart.includes("stay")) {
        // Parse stays
        const lines = part.split('\n');
        lines.forEach(line => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
            sections.stays.push(trimmedLine.replace(/^[-*]\s*\*\*/, '**').replace(/^[-*]\s*/, '').trim());
          }
        });
      } else if (cleanPart.includes("day-by-day") || cleanPart.includes("itinerary") || cleanPart.includes("breakdown") || cleanPart.includes("timeline")) {
        // Split by day headings
        const dayParts = part.split(/(?=### Day \d+)/i);
        dayParts.forEach(dayPart => {
          if (dayPart.trim().match(/^### Day/i)) {
            const lines = dayPart.split('\n');
            const dayHeader = lines[0].replace('###', '').trim();
            
            const dayInfo = {
              header: dayHeader,
              morning: "",
              lunch: "",
              afternoon: "",
              evening: "",
              tip: ""
            };
            
            lines.forEach(line => {
              const trimmedLine = line.trim();
              if (trimmedLine.match(/^[-*]\s*\*\*Morning/i)) {
                dayInfo.morning = trimmedLine.replace(/^[-*]\s*\*\*Morning.*?\*\*:\s*/i, '').trim();
              } else if (trimmedLine.match(/^[-*]\s*\*\*Lunch/i)) {
                dayInfo.lunch = trimmedLine.replace(/^[-*]\s*\*\*Lunch.*?\*\*:\s*/i, '').trim();
              } else if (trimmedLine.match(/^[-*]\s*\*\*Afternoon/i)) {
                dayInfo.afternoon = trimmedLine.replace(/^[-*]\s*\*\*Afternoon.*?\*\*:\s*/i, '').trim();
              } else if (trimmedLine.match(/^[-*]\s*\*\*Evening/i) || trimmedLine.match(/^[-*]\s*\*\*Dinner/i)) {
                dayInfo.evening = trimmedLine.replace(/^[-*]\s*\*\*Evening.*?\*\*:\s*/i, '').replace(/^[-*]\s*\*\*Dinner.*?\*\*:\s*/i, '').trim();
              } else if (trimmedLine.toLowerCase().includes('local tip') || trimmedLine.toLowerCase().includes('tip:')) {
                dayInfo.tip = trimmedLine.replace(/^[-*]?\s*\*Local Tip\*:\s*/i, '').replace(/^[-*]?\s*\*Tip\*:\s*/i, '').replace(/^[-*]?\s*Local Tip:\s*/i, '').trim();
              }
            });

            sections.days.push(dayInfo);
          }
        });
      } else if (cleanPart.includes("budget")) {
        // Parse budget items
        const lines = part.split('\n');
        lines.forEach(line => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
            sections.budget.push(trimmedLine.replace(/^[-*]\s*\*\*/, '**').replace(/^[-*]\s*/, '').trim());
          }
        });
      }
    });

    if (sections.days.length === 0) return null; // Fallback if no days parsed
    
    // Transform legacy days structure into the new JSON schema structure so that the UI only needs to render one schema!
    const staysTransformed = sections.stays.map(stay => {
      const sParts = stay.split(/:\s*/);
      const title = sParts[0] ? sParts[0].replace(/\*\*/g, '').trim() : "Stay Option";
      const desc = sParts.slice(1).join(": ") || "";
      return {
        type: title.includes("Budget") ? "Budget" : title.includes("Luxury") ? "Luxury" : "Mid-range",
        name: title,
        price: "Included in Budget",
        rating: "4.5",
        amenities: ["Free Wifi", "Breakfast Included"],
        description: desc
      };
    });

    const budgetTransformed = {
      total: sections.budget.find(b => b.toLowerCase().includes("total"))?.split(":")?.[1]?.trim() || "See Categories",
      categories: sections.budget.filter(b => !b.toLowerCase().includes("total")).map((b, idx) => {
        const bParts = b.split(":");
        const bName = bParts[0] ? bParts[0].replace(/\*\*/g, '').trim() : "Category";
        const bCost = bParts[1] ? bParts[1].trim() : "Estimated";
        const progressValues = [35, 30, 20, 15];
        return {
          name: bName,
          cost: bCost,
          percent: progressValues[idx % 4]
        };
      })
    };

    const daysTransformed = sections.days.map((day, idx) => {
      const dayNum = idx + 1;
      const dayTitle = day.header.replace(/Day \d+:\s*/i, '') || "Sightseeing";
      
      const daySections = [];
      if (day.morning) {
        daySections.push({
          period: "Morning",
          time: "09:00 AM",
          activity: "Morning Sightseeing",
          description: day.morning,
          location: "Sightseeing Spot"
        });
      }
      if (day.lunch) {
        daySections.push({
          period: "Lunch",
          time: "01:00 PM",
          activity: "Local Lunch Experience",
          description: day.lunch,
          location: "Recommended Restaurant"
        });
      }
      if (day.afternoon) {
        daySections.push({
          period: "Afternoon",
          time: "03:00 PM",
          activity: "Afternoon Sights",
          description: day.afternoon,
          location: "Tourist Spot"
        });
      }
      if (day.evening) {
        daySections.push({
          period: "Evening",
          time: "07:00 PM",
          activity: "Dinner & Evening Sojourn",
          description: day.evening,
          location: "Diner Spot"
        });
      }
      if (day.tip) {
        daySections.push({
          period: "Logistics Note",
          time: "Night",
          activity: "Traveler Tip",
          description: day.tip,
          location: "Citywide"
        });
      }

      return {
        day: dayNum,
        title: dayTitle,
        sections: daySections
      };
    });

    return {
      trip_title: sections.title,
      stays: staysTransformed,
      budget: budgetTransformed,
      days: daysTransformed,
      isLegacyMarkdown: true
    };
  } catch (e) {
    console.error("Failed to parse structured itinerary:", e);
    return null;
  }
};

const getImageForQuery = (query, category) => {
  if (!query) {
    if (category === 'hotel' || category === 'accommodation' || category === 'stay') {
      return "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";
    }
    if (category === 'food' || category === 'restaurant' || category === 'lunch' || category === 'dinner') {
      return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
    }
    if (category === 'transport' || category === 'flight' || category === 'train' || category === 'bus') {
      return "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80";
    }
    return "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80";
  }

  const q = query.toLowerCase();

  // 1. Landmark & Destination Sights
  if (q.includes("victoria") || q.includes("memorial")) {
    return "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("howrah") || q.includes("bridge")) {
    return "https://images.unsplash.com/photo-1584852927237-7756fdf1f81b?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("dakshineswar") || q.includes("kali")) {
    return "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("kolkata")) {
    return "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("hawa mahal") || q.includes("jaipur")) {
    return "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("taj mahal") || q.includes("agra")) {
    return "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("gateway") || q.includes("mumbai")) {
    return "https://images.unsplash.com/photo-1562158074-a6217431e21b?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("paris") || q.includes("eiffel")) {
    return "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("tokyo") || q.includes("shibuya")) {
    return "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("rome") || q.includes("colosseum")) {
    return "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("park street")) {
    return "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80";
  }

  // 2. Hotels / Stays
  if (q.includes("broadway") || q.includes("guesthouse") || q.includes("budget") || q.includes("hostel")) {
    return "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("oberoi") || q.includes("taj") || q.includes("grand") || q.includes("luxury") || q.includes("5-star") || q.includes("resort") || q.includes("spa")) {
    return "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80";
  }
  if (category === 'hotel' || category === 'accommodation' || category === 'stay' || q.includes("hotel") || q.includes("inn") || q.includes("suite") || q.includes("stay") || q.includes("villa")) {
    return "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";
  }

  // 3. Restaurants & Dining
  if (q.includes("peter cat") || q.includes("mocambo")) {
    return "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("bistro") || q.includes("cafe") || q.includes("diner") || q.includes("heritage cafe")) {
    return "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80";
  }
  if (category === 'restaurant' || q.includes("restaurant") || q.includes("bar") || q.includes("pub") || q.includes("grill") || q.includes("kitchen")) {
    return "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80";
  }

  // 4. Local Cuisine / Food Items
  if (q.includes("kabab") || q.includes("kebab") || q.includes("chello")) {
    return "https://images.unsplash.com/photo-1603360943069-d57a92fb4ec2?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("biryani")) {
    return "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("puchka") || q.includes("panipuri") || q.includes("chaat") || q.includes("street food")) {
    return "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("sondesh") || q.includes("rasgulla") || q.includes("sweet") || q.includes("dessert") || q.includes("mishti")) {
    return "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80";
  }
  if (category === 'food' || q.includes("dish") || q.includes("lunch") || q.includes("dinner") || q.includes("breakfast") || q.includes("snack") || q.includes("platter")) {
    return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
  }

  // 5. Transports
  if (q.includes("flight") || q.includes("indigo") || q.includes("air") || q.includes("plane")) {
    return "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("train") || q.includes("express") || q.includes("shatabdi") || q.includes("rajdhani") || q.includes("rail")) {
    return "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("bus") || q.includes("volvo") || q.includes("coach")) {
    return "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("taxi") || q.includes("cab") || q.includes("uber") || q.includes("ola")) {
    return "https://images.unsplash.com/photo-1492664738988-2be5d44a1e94?auto=format&fit=crop&w=800&q=80";
  }
  if (category === 'transport') {
    return "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80";
  }

  // 6. Natural & Scenic Landmarks
  if (q.includes("river") || q.includes("water") || q.includes("park") || q.includes("lake") || q.includes("gardens") || q.includes("viewpoint")) {
    return "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80";
  }
  if (q.includes("market") || q.includes("bazaar") || q.includes("bahu") || q.includes("shop") || q.includes("street")) {
    return "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80";
  }

  return "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80";
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Plan = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [mlMetadata, setMlMetadata] = useState(null);
  const [activeTab, setActiveTab] = useState('timeline');
  const [selectedDay, setSelectedDay] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [hotelStars, setHotelStars] = useState('');
  const [hotelPriceLimit, setHotelPriceLimit] = useState(12000);

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    infants: 0,
    pace: '',
    weather: '',
    accommodation: '',
    food: '',
    transport: '',
    transport_name: '',
    currency: 'INR',
    budget: '',
    additional: '',
    useML: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'currency') {
      if (value === 'USD') setHotelPriceLimit(150);
      else if (value === 'EUR') setHotelPriceLimit(140);
      else setHotelPriceLimit(12000);
      setFormData(prev => ({ ...prev, accommodation: '' }));
    }
  };

  const getSliderConfig = () => {
    if (formData.currency === 'USD') return { min: 15, max: 300, step: 5, symbol: '$' };
    if (formData.currency === 'EUR') return { min: 15, max: 270, step: 5, symbol: '€' };
    return { min: 1000, max: 25000, step: 500, symbol: '₹' };
  };
  const sliderConfig = getSliderConfig();

  const handleSelect = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      return diffDays + 1;
    }
    return 0;
  };

  const generateItinerary = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth'); // Need to login to generate
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(`${API_URL}/api/itinerary/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setGeneratedPlan(data.plan);
        setMlMetadata(data.mlMetadata || null);
        setStep(5);
      } else {
        setError(data.message || 'Failed to generate itinerary');
      }
    } catch (err) {
      setError('Server error. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  };

  return (
    <div className="container" style={{ paddingTop: '80px', minHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Progress Indicator */}
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          {[1, 2, 3, 4].map(num => (
            <div key={num} style={{ 
              width: '30px', height: '30px', borderRadius: '50%', 
              background: step >= num ? 'var(--primary)' : 'var(--glass-border)',
              color: step >= num ? 'white' : 'var(--text-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', transition: 'all 0.3s'
            }}>
              {step > num ? <Check size={16} /> : num}
            </div>
          ))}
        </div>
        <div style={{ height: '4px', background: 'var(--glass-border)', borderRadius: '2px', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', top: 0, left: 0, height: '100%', 
            background: 'var(--gradient-brand)', borderRadius: '2px',
            width: `${((step - 1) / 3) * 100}%`, transition: 'width 0.4s ease'
          }}></div>
        </div>
      </div>

      <div 
        className="glass-panel" 
        style={{
          width: '100%',
          maxWidth: step === 5 ? '1100px' : '800px',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.5s ease'
        }}
      >
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Basic Trip Details */}
          {step === 1 && (
            <motion.div key="step1" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
              <h2 className="heading-gradient" style={{ fontSize: '2rem', marginBottom: '8px' }}>Let's start with the basics</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Tell us where and when you are travelling.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Leaving from</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={20} color="var(--primary)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px' }} />
                    <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder="City or Airport" style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Going to</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={20} color="var(--secondary)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px' }} />
                    <input type="text" name="to" value={formData.to} onChange={handleChange} placeholder="Destination" style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Start Date</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={20} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px' }} />
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>End Date</label>
                  <div style={{ position: 'relative' }}>
                    <Calendar size={20} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px' }} />
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>
              </div>

              {formData.startDate && formData.endDate && (
                <div style={{ padding: '16px', background: 'rgba(242, 107, 56, 0.1)', border: '1px solid rgba(242, 107, 56, 0.2)', borderRadius: '12px', color: 'var(--primary)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Calendar size={20} />
                  <strong>Trip Duration:</strong> {calculateDays()} days
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 2: Passengers */}
          {step === 2 && (
            <motion.div key="step2" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
              <h2 className="heading-gradient" style={{ fontSize: '2rem', marginBottom: '8px' }}>Who's travelling?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Select the number of passengers.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {[
                  { label: 'Adults', sub: 'Ages 13+', name: 'adults' },
                  { label: 'Children', sub: 'Ages 2-12', name: 'children' },
                  { label: 'Infants', sub: 'Under 2', name: 'infants' }
                ].map((item) => (
                  <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Users size={24} color="var(--accent)" />
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button onClick={() => setFormData(prev => ({ ...prev, [item.name]: Math.max(item.name === 'adults' ? 1 : 0, prev[item.name] - 1) }))} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>-</button>
                      <span style={{ fontSize: '1.2rem', fontWeight: 600, width: '20px', textAlign: 'center' }}>{formData[item.name]}</span>
                      <button onClick={() => setFormData(prev => ({ ...prev, [item.name]: prev[item.name] + 1 }))} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--text-light)', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Travel Preferences */}
          {step === 3 && (
            <motion.div key="step3" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
              <h2 className="heading-gradient" style={{ fontSize: '2rem', marginBottom: '8px' }}>Personalize your trip</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>All fields are optional.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
                {/* Pace */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-light)', fontWeight: 500 }}>
                    <Activity size={18} color="var(--primary)"/> Pace of travel
                  </label>
                  <select name="pace" value={formData.pace} onChange={handleChange} style={{ width: '100%', padding: '14px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }}>
                    <option value="" style={{color: 'black'}}>Select pace...</option>
                    <option value="Relaxed" style={{color: 'black'}}>Relaxed (1-2 places a day)</option>
                    <option value="Moderate" style={{color: 'black'}}>Moderate (3-4 places a day)</option>
                    <option value="Fast" style={{color: 'black'}}>Fast-paced (See it all)</option>
                  </select>
                </div>

                {/* Weather */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-light)', fontWeight: 500 }}>
                    <Sun size={18} color="#eab308"/> Preferred weather
                  </label>
                  <select name="weather" value={formData.weather} onChange={handleChange} style={{ width: '100%', padding: '14px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }}>
                    <option value="" style={{color: 'black'}}>Select weather...</option>
                    <option value="Warm" style={{color: 'black'}}>Warm / Tropical</option>
                    <option value="Cold" style={{color: 'black'}}>Cold / Snowy</option>
                    <option value="Mild" style={{color: 'black'}}>Mild / Pleasant</option>
                  </select>
                </div>

                {/* Accommodation */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-light)', fontWeight: 500 }}>
                    <Home size={18} color="var(--secondary)"/> Accommodation type
                  </label>
                  <select name="accommodation" value={formData.accommodation} onChange={handleChange} style={{ width: '100%', padding: '14px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }}>
                    <option value="" style={{color: 'black'}}>Select accommodation...</option>
                    <option value="Hotel" style={{color: 'black'}}>Hotel</option>
                    <option value="Hostel" style={{color: 'black'}}>Hostel</option>
                    <option value="Resort" style={{color: 'black'}}>Resort</option>
                    <option value="Airbnb" style={{color: 'black'}}>Airbnb / Rental</option>
                  </select>
                </div>

                {/* Food */}
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-light)', fontWeight: 500 }}>
                    <Utensils size={18} color="var(--accent)"/> Food preference
                  </label>
                  <select name="food" value={formData.food} onChange={handleChange} style={{ width: '100%', padding: '14px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }}>
                    <option value="" style={{color: 'black'}}>Select food...</option>
                    <option value="Local" style={{color: 'black'}}>Local Street Food</option>
                    <option value="FineDining" style={{color: 'black'}}>Fine Dining</option>
                    <option value="Vegetarian" style={{color: 'black'}}>Vegetarian / Vegan</option>
                    <option value="Mixed" style={{color: 'black'}}>Mixed</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Budget & Extras */}
          {step === 4 && (
            <motion.div key="step4" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
              <h2 className="heading-gradient" style={{ fontSize: '2rem', marginBottom: '8px' }}>Final details</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Budget and any specific requests.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Currency</label>
                  <div style={{ position: 'relative' }}>
                    <IndianRupee size={20} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px' }} />
                    <select name="currency" value={formData.currency} onChange={handleChange} style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }}>
                      <option value="INR" style={{color: 'black'}}>INR - Indian Rupee</option>
                      <option value="USD" style={{color: 'black'}}>USD - US Dollar</option>
                      <option value="EUR" style={{color: 'black'}}>EUR - Euro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Estimated Budget (Optional)</label>
                  <input type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. 50000" style={{ width: '100%', padding: '14px 16px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }} />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-light)', fontWeight: 500 }}>
                  <Plane size={18} color="var(--primary)"/> Transport from departure
                </label>
                <select name="transport" value={formData.transport} onChange={(e) => { handleChange(e); setFormData(prev => ({ ...prev, transport_name: '' })); }} style={{ width: '100%', padding: '14px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none' }}>
                  <option value="" style={{color: 'black'}}>Select transport...</option>
                  <option value="Flight" style={{color: 'black'}}>Flight</option>
                  <option value="Train" style={{color: 'black'}}>Train</option>
                  <option value="Bus" style={{color: 'black'}}>Bus</option>
                  <option value="Car" style={{color: 'black'}}>Car</option>
                </select>
              </div>

              {/* Dynamic Real Transport Carrier Explorer Card */}
              {['Flight', 'Train', 'Bus'].includes(formData.transport) && (
                <div style={{ 
                  marginTop: '16px', 
                  padding: '24px', 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--glass-border)', 
                  borderRadius: '16px',
                  marginBottom: '24px',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    ✈️ Real Available {formData.transport}s to {formData.to || 'your destination'}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                    Curated real-world {formData.transport} options with standard timetables and traveler reviews. Click to anchor a carrier in your itinerary.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {getRealTransportOptions(formData.to, formData.transport).map((item, idx) => {
                      const isSelected = formData.transport_name === item.name;
                      return (
                        <div 
                          key={idx}
                          onClick={() => setFormData(prev => ({ ...prev, transport_name: item.name }))}
                          style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: isSelected ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                            background: isSelected ? 'rgba(242, 107, 56, 0.08)' : 'var(--input-bg)',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.2s ease-in-out',
                            boxShadow: isSelected ? '0 4px 12px rgba(242, 107, 56, 0.08)' : 'none'
                          }}
                        >
                          <div>
                            <strong style={{ color: isSelected ? 'var(--primary)' : 'var(--text-light)', fontSize: '0.95rem' }}>{item.name}</strong>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              🕒 Typical Departure: <strong>{item.timing}</strong>
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>{item.rating}</span>
                            {isSelected && (
                              <span style={{ 
                                fontSize: '0.7rem', 
                                background: 'var(--primary)', 
                                color: 'white', 
                                padding: '2px 8px', 
                                borderRadius: '99px',
                                fontWeight: 500
                              }}>Selected</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Dynamic Real Hotel Explorer Card */}
              {formData.to && (
                <div style={{ 
                  marginTop: '16px', 
                  padding: '24px', 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--glass-border)', 
                  borderRadius: '16px',
                  marginBottom: '24px',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🏨 Real Hotel Finder at {formData.to}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                    Enter your class preference and budget filter to query actual matching hotels in {formData.to}. Click to lock one as your primary stay.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Hotel Stars Class</label>
                      <select 
                        value={hotelStars} 
                        onChange={(e) => { setHotelStars(e.target.value); setFormData(prev => ({ ...prev, accommodation: '' })); }}
                        style={{ width: '100%', padding: '12px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '0.9rem', outline: 'none' }}
                      >
                        <option value="" style={{color: 'black'}}>All Classes</option>
                        <option value="3-Star" style={{color: 'black'}}>3-Star Boutique</option>
                        <option value="4-Star" style={{color: 'black'}}>4-Star Premium</option>
                        <option value="5-Star" style={{color: 'black'}}>5-Star Heritage / Palace</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Nightly Price Cap</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input 
                          type="range" 
                          min={sliderConfig.min} 
                          max={sliderConfig.max} 
                          step={sliderConfig.step}
                          value={hotelPriceLimit}
                          onChange={(e) => { setHotelPriceLimit(parseInt(e.target.value)); setFormData(prev => ({ ...prev, accommodation: '' })); }}
                          style={{ flex: 1, accentColor: 'var(--secondary)' }}
                        />
                        <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 'bold', minWidth: '75px', textAlign: 'right' }}>
                          {sliderConfig.symbol}{hotelPriceLimit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Filtered Hotel List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '280px', overflowY: 'auto', paddingRight: '4px' }}>
                    {getRealHotelOptions(formData.to, hotelStars, hotelPriceLimit, formData.currency).length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '0.9rem', border: '1px dashed var(--glass-border)', borderRadius: '12px' }}>
                        No matching hotels found within {sliderConfig.symbol}{hotelPriceLimit}/night budget. Try increasing the price limit slider!
                      </div>
                    ) : (
                      getRealHotelOptions(formData.to, hotelStars, hotelPriceLimit, formData.currency).map((hotel, idx) => {
                        const isSelected = formData.accommodation === hotel.name;
                        return (
                          <div 
                            key={idx}
                            onClick={() => setFormData(prev => ({ ...prev, accommodation: hotel.name }))}
                            style={{
                              padding: '16px',
                              borderRadius: '12px',
                              border: isSelected ? '1px solid var(--secondary)' : '1px solid var(--glass-border)',
                              background: isSelected ? 'rgba(230, 46, 112, 0.08)' : 'var(--input-bg)',
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              transition: 'all 0.2s ease-in-out',
                              boxShadow: isSelected ? '0 4px 12px rgba(230, 46, 112, 0.08)' : 'none'
                            }}
                          >
                            <div style={{ flex: 1, paddingRight: '12px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                <strong style={{ color: isSelected ? 'var(--secondary)' : 'var(--text-light)', fontSize: '0.95rem' }}>{hotel.name}</strong>
                                <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', color: 'var(--text-muted)' }}>{hotel.stars}</span>
                              </div>
                              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                                📍 {hotel.location}
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', minWidth: '90px' }}>
                              <span style={{ fontSize: '0.95rem', color: isSelected ? 'var(--secondary)' : 'var(--text-light)', fontWeight: 'bold' }}>{sliderConfig.symbol}{hotel.displayPrice}/night</span>
                              <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500 }}>{hotel.rating}</span>
                              {isSelected && (
                                <span style={{ 
                                  fontSize: '0.7rem', 
                                  background: 'var(--secondary)', 
                                  color: 'white', 
                                  padding: '2px 8px', 
                                  borderRadius: '99px',
                                  marginTop: '2px',
                                  fontWeight: 500
                                }}>Selected</span>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* ML Toggle Card */}
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(242, 107, 56, 0.15), rgba(236, 72, 153, 0.15))',
                border: '1px solid rgba(242, 107, 56, 0.3)',
                borderRadius: '16px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 32px 0 rgba(242, 107, 56, 0.05)'
              }}>
                <div style={{ flex: 1, paddingRight: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🤖 ML Traveler Optimization
                    <span style={{ fontSize: '0.75rem', background: 'var(--accent)', color: 'white', padding: '2px 8px', borderRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trained on 5,000+ Journeys</span>
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    Optimizes transportation services, restaurant choices, sightseeing spots, and local transit using Nearest Neighbors modeling.
                  </p>
                </div>
                <div>
                  <button 
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, useML: !prev.useML }))}
                    style={{
                      width: '56px',
                      height: '30px',
                      borderRadius: '15px',
                      background: formData.useML ? 'var(--accent)' : 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background 0.3s',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'white',
                      position: 'absolute',
                      left: formData.useML ? '30px' : '4px',
                      transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }} />
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--text-light)', fontWeight: 500 }}>
                  <Edit3 size={18} color="var(--secondary)"/> Additional preferences (Optional)
                </label>
                <textarea name="additional" value={formData.additional} onChange={handleChange} placeholder="Any specific places, activities, or dietary requirements?" rows="4" style={{ width: '100%', padding: '16px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'var(--text-light)', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              
              {error && <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>}
            </motion.div>
          )}

          {/* STEP 5: Result */}
          {step === 5 && (
            <motion.div key="step5" variants={pageVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
              {/* Injecting CSS inside the render block */}
              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
                
                .luxury-serif {
                  font-family: 'Cormorant Garamond', serif !important;
                }
                
                .luxury-body {
                  font-family: 'Plus Jakarta Sans', sans-serif !important;
                }

                .luxury-tab-active {
                  color: var(--primary) !important;
                  border-color: var(--primary) !important;
                  font-weight: 600 !important;
                }
                
                .luxury-day-active {
                  background-color: rgba(242, 107, 56, 0.15) !important;
                  color: var(--primary) !important;
                  border-color: var(--primary) !important;
                }

                .luxury-day-active .luxury-day-label {
                  color: var(--primary) !important;
                }

                .luxury-day-active .luxury-day-title {
                  color: var(--text-light) !important;
                }
              `}</style>

              {/* Magazine Cover Hero Banner */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '460px',
                marginBottom: '40px',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow)'
              }}>
                <img 
                  src={getDestinationImage(formData.to)} 
                  alt={formData.to} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    filter: 'brightness(0.7) contrast(1.05)'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(30, 28, 26, 0.1) 0%, rgba(30, 28, 26, 0.75) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '48px',
                  boxSizing: 'border-box'
                }}>
                  <span className="luxury-serif" style={{
                    fontSize: '1.2rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(250, 247, 240, 0.9)',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    fontWeight: 400
                  }}>
                    An Exquisite Sojourn To
                  </span>
                  <h1 className="luxury-serif" style={{
                    fontSize: '4.5rem',
                    letterSpacing: '0.05em',
                    color: '#FAF7F0',
                    textTransform: 'uppercase',
                    margin: '0 0 20px 0',
                    lineHeight: '1.0',
                    fontWeight: 600
                  }}>
                    {formData.to || 'Destination'}
                  </h1>
                  
                  <div style={{
                    width: '80px',
                    height: '1px',
                    backgroundColor: 'var(--glass-border)',
                    marginBottom: '24px'
                  }} />

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    alignItems: 'center',
                    color: 'rgba(250, 247, 240, 0.85)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    <span>From: <strong>{formData.from || 'Delhi'}</strong></span>
                    <span>•</span>
                    <span>Duration: <strong>{calculateDays()} Days</strong></span>
                    <span>•</span>
                    <span>Pace: <strong>{formData.pace || 'Moderate'}</strong></span>
                  </div>
                </div>
              </div>

              {/* RAG Statistical Match Dashboard in Luxury Style */}
              {mlMetadata && (
                <div style={{
                  marginBottom: '40px',
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  color: 'var(--text-light)',
                  boxShadow: 'var(--glass-shadow)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    gap: '20px', 
                    marginBottom: '24px', 
                    borderBottom: '1px solid var(--glass-border)', 
                    paddingBottom: '20px' 
                  }}>
                    <div>
                      <h3 className="luxury-serif" style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 600, 
                        margin: '0 0 6px 0', 
                        color: 'var(--text-light)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        letterSpacing: '0.02em'
                      }}>
                        🤖 Local Machine Learning Optimization
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                        Offline RAG pattern-matching powered by WanderNest's local KNN algorithm over historical traveler diaries.
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--primary)',
                        padding: '12px 20px',
                        borderRadius: '12px',
                        color: 'white',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
                      }}>
                        <span className="luxury-serif" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: 1 }}>{mlMetadata.confidence}%</span>
                        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '0.1em', marginTop: '4px' }}>Match Quality</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {/* Transport Predictions */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '20px' }}>
                      <h4 className="luxury-serif" style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        ✈️ Transport Carrier Grounding
                      </h4>
                      <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)' }}>
                        <div><span style={{ color: 'var(--text-muted)' }}>Recommended mode:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.transport_mode || 'N/A'}</strong></div>
                        <div><span style={{ color: 'var(--text-muted)' }}>Carrier service:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.transport_name || 'N/A'}</strong></div>
                        <div><span style={{ color: 'var(--text-muted)' }}>Local transit:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.local_transport || 'N/A'}</strong></div>
                      </div>
                    </div>

                    {/* Culinary Predictions */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '20px' }}>
                      <h4 className="luxury-serif" style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🍳 Curated Culinary Highlight
                      </h4>
                      <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)' }}>
                        <div><span style={{ color: 'var(--text-muted)' }}>Top restaurant:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.restaurant || 'N/A'}</strong></div>
                        <div><span style={{ color: 'var(--text-muted)' }}>Signature dish:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.best_dish || 'N/A'}</strong></div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>Extracted via semantic clustering</div>
                      </div>
                    </div>

                    {/* Statistical Insight */}
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '20px' }}>
                      <h4 className="luxury-serif" style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🎯 Traveler Profile Match
                      </h4>
                      <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)' }}>
                        <div><span style={{ color: 'var(--text-muted)' }}>Similar journals:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.matched_travelers || 5} travelers</strong></div>
                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Famous spots:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.places_visited ? mlMetadata.places_visited.slice(0, 2).join(', ') : 'N/A'}</strong>
                        </div>
                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Top activity:</span> <strong style={{ color: 'var(--text-light)' }}>{mlMetadata.activities ? mlMetadata.activities[0] : 'N/A'}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ✨ <span>Historical travel trends and local nodes are fully integrated into this optimized schedule.</span>
                  </div>
                </div>
              )}

              {/* Parse the itinerary to check if structured view is possible */}
              {(() => {
                const parsedItinerary = parseItinerary(generatedPlan);
                
                return (
                  <div style={{ marginBottom: '40px' }}>
                    {/* Interactive Navigation Tabs */}
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '24px',
                      overflowX: 'auto',
                      paddingBottom: '8px',
                      borderBottom: '1px solid var(--glass-border)'
                    }}>
                      {[
                        { id: 'timeline', label: '📅 Timeline', enabled: !!parsedItinerary },
                        { id: 'stays', label: '🏨 Stays', enabled: !!parsedItinerary && parsedItinerary.stays && parsedItinerary.stays.length > 0 },
                        { id: 'attractions', label: '🏛️ Sights & Savor', enabled: !!parsedItinerary && parsedItinerary.days && parsedItinerary.days.length > 0 },
                        { id: 'budget', label: '💰 Budget', enabled: !!parsedItinerary && parsedItinerary.budget },
                        { id: 'raw', label: '📖 Editorial Guide', enabled: true }
                      ].map(tab => {
                        if (!tab.enabled) return null;
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                              padding: '12px 24px',
                              border: 'none',
                              borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                              background: 'transparent',
                              color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                              fontWeight: isActive ? 600 : 500,
                              fontSize: '0.95rem',
                              letterSpacing: '0.05em',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              transition: 'all 0.3s',
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Timeline Tab */}
                    {activeTab === 'timeline' && parsedItinerary && (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', minHeight: '500px' }}>
                        
                        {/* Left Sidebar Days List & Rounded Pinterest Photo */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto', maxHeight: '350px', paddingRight: '8px' }}>
                            {parsedItinerary.days.map((day, idx) => {
                              const isSelected = selectedDay === idx;
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setSelectedDay(idx)}
                                  className={isSelected ? 'luxury-day-active' : ''}
                                  style={{
                                    padding: '20px',
                                    borderRadius: '12px',
                                    background: isSelected ? 'rgba(242, 107, 56, 0.15)' : 'rgba(255,255,255,0.02)',
                                    border: isSelected ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                    color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                                  }}
                                >
                                  <span className="luxury-day-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: isSelected ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600 }}>Day {idx + 1}</span>
                                  <span className="luxury-day-title luxury-serif" style={{ fontSize: '1.2rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', color: isSelected ? 'var(--text-light)' : 'var(--text-muted)' }}>
                                    {day.title || `Day ${idx + 1} Schedule`}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Pinterest-style dynamic attraction photograph */}
                          <div style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            height: '240px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)'
                          }}>
                            <img 
                              src={getImageForQuery(parsedItinerary.days[selectedDay]?.title || formData.to, 'scenic')} 
                              alt={`Day ${selectedDay + 1}`} 
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                            <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(to top, rgba(30, 28, 26, 0.8) 0%, transparent 100%)',
                              padding: '16px',
                              color: '#FAF7F0'
                            }}>
                              <span className="luxury-serif" style={{ fontSize: '0.85rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>
                                Curated daily highlight for Day {selectedDay + 1}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right Main Day Detail Panel */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--glass-border)',
                          borderRadius: '20px',
                          padding: '40px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '32px',
                          overflowY: 'auto',
                          maxHeight: '610px',
                          color: 'var(--text-light)'
                        }}>
                          <h3 className="luxury-serif" style={{ 
                            fontSize: '2rem', 
                            fontWeight: 600, 
                            color: 'var(--text-light)', 
                            borderBottom: '1px solid var(--glass-border)', 
                            paddingBottom: '16px', 
                            margin: '0',
                            letterSpacing: '0.02em'
                          }}>
                            Day {selectedDay + 1} — {parsedItinerary.days[selectedDay]?.title || 'Sojourn & Discovery'}
                          </h3>

                          {/* Daily Timeline Time Blocks */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {(parsedItinerary.days[selectedDay]?.sections || []).map((section, secIdx) => {
                              const periodIcon = section.period.includes('Morning') ? '☀️' : 
                                                 section.period.includes('Lunch') ? '🍽️' : 
                                                 section.period.includes('Afternoon') ? '🏛️' : 
                                                 section.period.includes('Evening') || section.period.includes('Dinner') ? '🌆' : '💡';
                              
                              const hasTransport = !!section.transport;
                              const hasRestaurant = !!section.restaurant;
                              
                              return (
                                <div key={secIdx} style={{
                                  display: 'flex',
                                  gap: '24px',
                                  position: 'relative',
                                  paddingBottom: '32px'
                                }}>
                                  {/* Vertical Timeline Thread */}
                                  {secIdx < parsedItinerary.days[selectedDay].sections.length - 1 && (
                                    <div style={{
                                      position: 'absolute',
                                      left: '20px',
                                      top: '40px',
                                      bottom: '-12px',
                                      width: '2px',
                                      borderLeft: '2px dashed var(--glass-border)'
                                    }} />
                                  )}
                                  
                                  {/* Period Icon Dot */}
                                  <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
                                    zIndex: 2,
                                    flexShrink: 0
                                  }}>
                                    {periodIcon}
                                  </div>
                                  
                                  {/* Content Block */}
                                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                      <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                        {section.period} {section.time ? `• ${section.time}` : ''}
                                      </span>
                                      {section.location && (
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                          📍 {section.location}
                                        </span>
                                      )}
                                    </div>
                                    
                                    <h4 className="luxury-serif" style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-light)', margin: 0 }}>
                                      {section.activity}
                                    </h4>
                                    
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65', margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                      {section.description}
                                    </p>

                                    {/* Cinematic Scenic Photo for standard attractions */}
                                    {!hasTransport && !hasRestaurant && section.period !== 'Logistics Note' && (
                                      <div style={{
                                        position: 'relative',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        height: '240px',
                                        border: '1px solid var(--glass-border)',
                                        boxShadow: 'var(--glass-shadow)',
                                        marginTop: '8px'
                                      }}>
                                        <img 
                                          src={getImageForQuery(section.location || section.activity, 'scenic')} 
                                          alt={section.activity} 
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                          }}
                                          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                                          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        <div style={{
                                          position: 'absolute',
                                          bottom: 0,
                                          left: 0,
                                          right: 0,
                                          background: 'linear-gradient(to top, rgba(30, 28, 26, 0.8) 0%, transparent 100%)',
                                          padding: '12px 16px',
                                          color: '#FAF7F0',
                                          fontSize: '0.8rem',
                                          fontWeight: 500
                                        }}>
                                          ✨ {section.location || 'Featured Sight'}
                                        </div>
                                      </div>
                                    )}

                                    {/* Transport Detail sub-card */}
                                    {hasTransport && (
                                      <div style={{
                                        background: 'rgba(255, 255, 255, 0.01)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '12px',
                                        padding: '16px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 2fr',
                                        gap: '16px',
                                        alignItems: 'center',
                                        marginTop: '8px'
                                      }}>
                                        <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}>
                                          <img 
                                            src={getImageForQuery(section.transport.name || section.transport.type, 'transport')} 
                                            alt={section.transport.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                          />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.05em' }}>
                                            Transit Boarding
                                          </span>
                                          <strong style={{ fontSize: '1rem', color: 'var(--text-light)' }}>
                                            {section.transport.name}
                                          </strong>
                                          <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            <span>⭐ {section.transport.rating || '4.5'} Rating</span>
                                            {section.transport.price && <span>• {section.transport.price}</span>}
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {/* Dining & Restaurant sub-card */}
                                    {hasRestaurant && (
                                      <div style={{
                                        background: 'rgba(255, 255, 255, 0.01)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '12px',
                                        padding: '16px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 2fr',
                                        gap: '16px',
                                        alignItems: 'center',
                                        marginTop: '8px'
                                      }}>
                                        <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden' }}>
                                          <img 
                                            src={getImageForQuery(section.restaurant.name || (section.food && section.food[0]?.name), 'food')} 
                                            alt={section.restaurant.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                          />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>
                                            Chef Recommended Gastronomy
                                          </span>
                                          <strong style={{ fontSize: '1.05rem', color: 'var(--text-light)' }}>
                                            {section.restaurant.name}
                                          </strong>
                                          <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                                            <span>⭐ {section.restaurant.rating || '4.6'} Rating</span>
                                            {section.restaurant.cost && <span>• {section.restaurant.cost}</span>}
                                          </div>
                                          {section.food && section.food.length > 0 && (
                                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                                              {section.food.map((f, fIdx) => (
                                                <span key={fIdx} style={{
                                                  background: 'rgba(242, 107, 56, 0.1)',
                                                  border: '1px solid rgba(242, 107, 56, 0.2)',
                                                  color: 'var(--primary)',
                                                  fontSize: '0.7rem',
                                                  padding: '2px 8px',
                                                  borderRadius: '4px',
                                                  fontWeight: 500
                                                }}>
                                                  🍳 Signature Dish: {f.name}
                                                </span>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Stays Tab */}
                    {activeTab === 'stays' && parsedItinerary && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {parsedItinerary.stays.map((stay, idx) => {
                          return (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: 'var(--glass-shadow)',
                                transition: 'all 0.3s ease',
                                color: 'var(--text-light)'
                              }}
                              onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.borderColor = 'rgba(242, 107, 56, 0.3)';
                              }}
                              onMouseOut={e => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                              }}
                            >
                              {/* Hotel Visual Image */}
                              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                <img 
                                  src={getImageForQuery(stay.name, 'hotel')} 
                                  alt={stay.name} 
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                {/* Class Badge */}
                                <span style={{
                                  position: 'absolute',
                                  top: '16px',
                                  right: '16px',
                                  background: 'rgba(30, 28, 26, 0.75)',
                                  border: '1px solid rgba(255,255,255,0.15)',
                                  color: '#FAF7F0',
                                  fontSize: '0.7rem',
                                  fontWeight: 600,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.1em',
                                  padding: '4px 12px',
                                  borderRadius: '99px'
                                }}>{stay.type || 'Stay Option'}</span>
                                
                                {/* Rating Pill */}
                                <span style={{
                                  position: 'absolute',
                                  bottom: '16px',
                                  left: '16px',
                                  background: 'var(--primary)',
                                  color: 'white',
                                  fontSize: '0.75rem',
                                  fontWeight: 'bold',
                                  padding: '4px 10px',
                                  borderRadius: '6px',
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                }}>
                                  ⭐ {stay.rating || '4.5'}
                                </span>
                              </div>

                              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                                <h4 className="luxury-serif" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-light)', margin: 0 }}>
                                  {stay.name}
                                </h4>
                                <span style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600 }}>
                                  {stay.price}
                                </span>
                                <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--glass-border)' }} />
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', flexGrow: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                  {stay.description}
                                </p>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                                  {(stay.amenities || []).map((amenity, aIdx) => (
                                    <span key={aIdx} style={{
                                      background: 'rgba(255, 255, 255, 0.03)',
                                      border: '1px solid var(--glass-border)',
                                      color: 'var(--text-light)',
                                      fontSize: '0.7rem',
                                      padding: '3px 8px',
                                      borderRadius: '4px',
                                      fontWeight: 500
                                    }}>
                                      {amenity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Sights & Savor (Attractions) Tab */}
                    {activeTab === 'attractions' && parsedItinerary && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                        {(() => {
                          const attractions = [];
                          parsedItinerary.days.forEach(day => {
                            day.sections.forEach(sec => {
                              if (sec.period === 'Logistics Note' || sec.transport) return;
                              attractions.push({
                                day: day.day,
                                activity: sec.activity,
                                description: sec.description,
                                location: sec.location || sec.activity,
                                time: sec.time,
                                restaurant: sec.restaurant,
                                food: sec.food
                              });
                            });
                          });

                          return attractions.map((item, idx) => (
                            <div key={idx} style={{
                              background: 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid var(--glass-border)',
                              borderRadius: '16px',
                              overflow: 'hidden',
                              display: 'flex',
                              flexDirection: 'column',
                              boxShadow: 'var(--glass-shadow)',
                              transition: 'all 0.3s ease',
                              color: 'var(--text-light)'
                            }}
                            onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(242, 107, 56, 0.3)'}
                            onMouseOut={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                            >
                              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                                <img 
                                  src={getImageForQuery(item.location || item.activity, item.restaurant ? 'food' : 'scenic')} 
                                  alt={item.activity} 
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <span style={{
                                  position: 'absolute',
                                  top: '12px',
                                  left: '12px',
                                  background: 'var(--primary)',
                                  color: 'white',
                                  fontSize: '0.7rem',
                                  fontWeight: 'bold',
                                  padding: '3px 8px',
                                  borderRadius: '4px'
                                }}>Day {item.day}</span>
                                {item.restaurant && (
                                  <span style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    background: '#8A2BE2',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    padding: '3px 8px',
                                    borderRadius: '4px'
                                  }}>🍽️ Culinary</span>
                                )}
                              </div>
                              
                              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                  🕒 {item.time} | 📍 {item.location}
                                </span>
                                <h4 className="luxury-serif" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-light)', margin: '4px 0 0 0' }}>
                                  {item.activity}
                                </h4>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', flexGrow: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                  {item.description}
                                </p>
                                {item.restaurant && (
                                  <div style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '8px',
                                    padding: '8px 12px',
                                    fontSize: '0.75rem',
                                    color: 'var(--text-light)',
                                    marginTop: '8px'
                                  }}>
                                    ⭐ {item.restaurant.rating || '4.5'} rating | {item.food && item.food.length > 0 ? `Dish: ${item.food[0].name}` : 'Curated Dining'}
                                  </div>
                                )}
                              </div>
                            </div>
                          ));
                        })()}
                      </div>
                    )}

                    {/* Budget Tab */}
                    {activeTab === 'budget' && parsedItinerary && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '750px', margin: '0 auto', color: 'var(--text-light)' }}>
                        {/* Total Budget Hero Circle Badge */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--glass-border)',
                          padding: '40px',
                          borderRadius: '24px',
                          boxShadow: 'var(--glass-shadow)',
                          textAlign: 'center'
                        }}>
                          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '8px' }}>Total Projected Investment</span>
                          <h2 className="luxury-serif" style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--primary)', margin: 0 }}>
                            {parsedItinerary.budget.total}
                          </h2>
                          <p style={{ margin: '8px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                            Based on traveler trends and live local node pricing bounds.
                          </p>
                        </div>

                        {/* Budget Category Allocation cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                          {(parsedItinerary.budget.categories || []).map((cat, idx) => {
                            const barColors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', '#8A2BE2'];
                            const catIcons = {
                              'Transport': '✈️',
                              'Stay': '🏨',
                              'Food & Dining': '🍽️',
                              'Sightseeing & Activities': '🏛️'
                            };
                            const defaultIcon = '💰';
                            const icon = catIcons[cat.name] || defaultIcon;

                            return (
                              <div key={idx} style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                              }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: barColors[idx % 4] }}>
                                    {cat.percent}% Share
                                  </span>
                                </div>
                                <div>
                                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>{cat.name}</strong>
                                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-light)', marginTop: '4px' }}>{cat.cost}</div>
                                </div>
                                
                                {/* Progress line */}
                                <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
                                  <div style={{
                                    height: '100%',
                                    background: barColors[idx % 4],
                                    width: `${cat.percent}%`,
                                    borderRadius: '3px'
                                  }}></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Editorial Guide (Magazine Storytelling) Tab */}
                    {activeTab === 'raw' && parsedItinerary && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
                        {parsedItinerary.days.map((day, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            style={{
                              background: 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid var(--glass-border)',
                              borderRadius: '24px',
                              padding: '40px',
                              boxShadow: 'var(--glass-shadow)',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '32px',
                              boxSizing: 'border-box',
                              color: 'var(--text-light)'
                            }}
                          >
                            {/* Visual Day Header */}
                            <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '24px' }}>
                              <span className="luxury-serif" style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                                — EDITION {idx + 1} —
                              </span>
                              <h2 className="luxury-serif" style={{ fontSize: '2.4rem', fontWeight: 600, color: 'var(--text-light)', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                                Day {day.day} Brochure — {day.title}
                              </h2>
                            </div>

                            {/* Storytelling Timeline Content Grid */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                              {(day.sections || []).map((sec, secIdx) => {
                                const hasPhoto = sec.period !== 'Logistics Note' && !sec.transport;
                                const photoUrl = getImageForQuery(sec.location || sec.activity, sec.restaurant ? 'food' : 'scenic');
                                
                                return (
                                  <div key={secIdx} style={{
                                    display: 'grid',
                                    gridTemplateColumns: hasPhoto ? '1fr 1fr' : '1fr',
                                    gap: '32px',
                                    alignItems: 'center',
                                    borderBottom: secIdx < day.sections.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                                    paddingBottom: '24px'
                                  }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <span style={{ fontSize: '1.2rem' }}>
                                          {sec.period.includes('Morning') ? '☀️' : 
                                           sec.period.includes('Lunch') ? '🍽️' : 
                                           sec.period.includes('Afternoon') ? '🏛️' : 
                                           sec.period.includes('Evening') || sec.period.includes('Dinner') ? '🌆' : '💡'}
                                        </span>
                                        <h3 className="luxury-serif" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--primary)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                          {sec.period} {sec.time ? `(${sec.time})` : ''}
                                        </h3>
                                      </div>
                                      
                                      {sec.location && (
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📍 {sec.location}</span>
                                      )}
                                      
                                      <strong style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontWeight: 600 }}>
                                        {sec.activity}
                                      </strong>
                                      
                                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        {sec.description}
                                      </p>

                                      {/* Transport Detail sub-box inside Editorial */}
                                      {sec.transport && (
                                        <div style={{
                                          background: 'rgba(255, 255, 255, 0.01)',
                                          border: '1px solid var(--glass-border)',
                                          borderRadius: '8px',
                                          padding: '12px',
                                          fontSize: '0.85rem',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '12px',
                                          marginTop: '8px'
                                        }}>
                                          <span>✈️ Transit: <strong>{sec.transport.name}</strong> ({sec.transport.type})</span>
                                          <span>• ⭐ {sec.transport.rating || '4.5'} rating</span>
                                        </div>
                                      )}

                                      {/* Restaurant & Dish detail sub-box inside Editorial */}
                                      {sec.restaurant && (
                                        <div style={{
                                          background: 'rgba(255, 255, 255, 0.01)',
                                          border: '1px solid var(--glass-border)',
                                          borderRadius: '8px',
                                          padding: '12px',
                                          fontSize: '0.85rem',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '6px',
                                          marginTop: '8px'
                                        }}>
                                          <span>🍽️ Curated Dining: <strong>{sec.restaurant.name}</strong> (⭐ {sec.restaurant.rating || '4.5'})</span>
                                          {sec.food && sec.food.length > 0 && (
                                            <span>🍳 Signature Dish: <em>{sec.food[0].name}</em></span>
                                          )}
                                        </div>
                                      )}
                                    </div>

                                    {/* Right Photo Frame */}
                                    {hasPhoto && (
                                      <div style={{
                                        position: 'relative',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        height: '240px',
                                        border: '1px solid var(--glass-border)'
                                      }}>
                                        <img 
                                          src={photoUrl} 
                                          alt={sec.activity} 
                                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        />
                                        <div style={{
                                          position: 'absolute',
                                          bottom: '12px',
                                          left: '12px',
                                          background: 'rgba(30, 28, 26, 0.8)',
                                          padding: '4px 12px',
                                          borderRadius: '4px',
                                          fontSize: '0.75rem',
                                          textTransform: 'uppercase',
                                          letterSpacing: '0.05em',
                                          color: 'var(--text-light)'
                                        }}>
                                          {sec.period} Highlight
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

              <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--glass-border)', paddingTop: '32px' }}>
                <button 
                  onClick={() => { setStep(1); setMlMetadata(null); setGeneratedPlan(''); }} 
                  className="luxury-serif"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    background: 'var(--gradient-brand)',
                    color: 'white',
                    border: 'none',
                    padding: '16px 36px',
                    borderRadius: '99px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 15px rgba(242, 107, 56, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Plan Another Dream Journey
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        {step < 5 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
            <button onClick={prevStep} disabled={step === 1 || loading} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: step === 1 ? 0.5 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}>
              <ArrowLeft size={18} /> Back
            </button>
            
            {step < 4 ? (
              <button onClick={nextStep} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Continue <ArrowRight size={18} />
              </button>
            ) : (
              <button onClick={generateItinerary} disabled={loading} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', opacity: loading ? 0.7 : 1 }}>
                {loading ? <Loader size={18} className="spin" /> : <Check size={18} />} 
                {loading ? 'Generating...' : 'Generate Itinerary'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;
