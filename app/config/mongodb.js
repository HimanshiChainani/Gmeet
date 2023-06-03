const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
// Database name
const dbName = 'gmeet';

// Create a MongoDB client
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Get the MongoDB database
  const db = client.db(dbName);

  // Export the MongoDB client and database
  module.exports = { client, db };
});
