import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { config } from './config.js';
const app = express();

app.use(bodyParser.json());

import authRoute from './routes/auth/auth.js';
import protectedRoute from './routes/auth/protectedRoute.js';
import defaultRoute from './routes/test/default.js'
import GetUserMessages from './routes/messages/GetUserMessages.js';
import ConversationCompiler from './routes/messages/GetUserConversations.js';

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');

    app.use('/login', authRoute); // Use imported route handler
    app.use('/protectedRoute', protectedRoute); // Use imported route handler
    app.use('/', defaultRoute); 
    app.use('/messages', GetUserMessages)
    app.use('/conversations', ConversationCompiler)

    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);  // Exit on connection error
  }
})();