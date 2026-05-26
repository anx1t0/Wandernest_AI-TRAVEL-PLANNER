const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
let useLocalDB = false;
global.dbMode = {
  get useLocal() {
    return useLocalDB || mongoose.connection.readyState !== 1;
  }
};

console.log('Connecting to MongoDB Atlas...');
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 3000, // Timeout after 3s instead of 30s
})
  .then(() => {
    console.log('MongoDB connected successfully to Cloud Atlas!');
    useLocalDB = false;
  })
  .catch(err => {
    console.warn('\n⚠️  MongoDB Connection Warning / Timeout! Atlas cluster is offline or network blocked.');
    console.warn('⚡ SELF-HEALING SYSTEM ACTIVE: Automatically switched to resilient local file-based JSON Database fallback!\n');
    useLocalDB = true;
  });

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/itinerary', require('./routes/itineraryRoutes'));

// Basic Route
app.get('/api/status', (req, res) => {
  res.json({ message: 'WanderNest API is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
