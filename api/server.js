import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import PORT from './config.js'
const app = express();

app.use(bodyParser.json());
import Message from './schemas/MessageSchema.js';  
import User from './schemas/UserSchema.js';  
import Conversation from './schemas/ConversationSchema.js';  

try {
    mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    exit(1);
}

app.get('/', (req, res) => {
    if (!req.body) { // Check if there's no request body (including JSON)
      res.send({
        status: "Operational",
        message: "No parameters provided"
      });
    } else {
      res.send({
        status: "Operational",
        message: `Hello ${req.body.name}!`
      });
    }
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
