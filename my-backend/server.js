const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Use bodyParser middleware to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Enable CORS for cross-origin requests (adjust as per your security policies)
app.use(cors());

// MongoDB Connection String
// Replace 'your-mongodb-connection-string' with your actual connection string
// Consider using environment variables for sensitive information
const mongoURI = 'your-mongodb-connection-string';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define your Mongoose schema and model
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  itemId: String,
  title: String,
  responses: [{
    question: String,
    answer: String
  }]
});

const DataModel = mongoose.model('Data', DataSchema);

// API Endpoints

// POST endpoint to save data
app.post('/api/save-data', async (req, res) => {
  try {
    const newData = new DataModel(req.body);
    await newData.save();
    res.status(201).send('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data');
  }
});

// Additional API endpoints can be defined here

// Server Port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

