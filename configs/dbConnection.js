const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb+srv://OsorioCode01:WP-20243105@wplog.9dffobu.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'MessagesLogs';

async function connectDB() {
    try {
      // Use connect method to connect to the server
      await client.connect();
      console.log('Connected successfully to database');
      return client.db(dbName);
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }
  
  module.exports = connectDB;