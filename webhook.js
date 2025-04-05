const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables

// Load required environment variables
const SPACE_ID = process.env.GOOGLE_CHAT_SPACE_ID;
const API_KEY = process.env.GOOGLE_CHAT_API_KEY;
const TOKEN = process.env.GOOGLE_CHAT_TOKEN;

// Validate required environment variables
if (!SPACE_ID || !API_KEY || !TOKEN) {
  console.error('❌ Error: Missing required environment variables.');
  console.error('Ensure that GOOGLE_CHAT_SPACE_ID, GOOGLE_CHAT_API_KEY, and GOOGLE_CHAT_TOKEN are set.');
  process.exit(1);
}

// Construct the Google Chat webhook URL
const webhookUrl = `https://chat.googleapis.com/v1/spaces/${SPACE_ID}/messages?key=${API_KEY}&token=${TOKEN}`;

const message = {
  text: 'Hello from my application!',
};

fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  body: JSON.stringify(message),
})
  .then((response) => {
    if (!response.ok) {
      return response.text().then((err) => {
        throw new Error(`HTTP ${response.status}: ${err}`);
      });
    }
    return response.json();
  })
  .then((data) => console.log('✅ Message posted successfully:', data))
  .catch((error) => console.error('❌ Error posting message:', error.message));