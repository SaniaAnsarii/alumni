import express from "express"
// const cors = require('cors');
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"


import alumniRoutes from './routes/alumniRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { checkConnection } from "./config/db.js";
import createAllTable from "./utils/dbUtils.js"


// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
dotenv.config();

// const { checkConnection } = require('./config/db');
// const { default: createAllTable } = require('./utils/dbUtils');


const app = express();
const PORT =3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/alumni', alumniRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);       // Authentication routes
// app.use('/api/alumni', alumniRoutes);   // Protected alumni routes


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(8000, async() => {
  console.log('Server running on port 8000');
  try {
    await checkConnection();
    await createAllTable();
  } catch (error) {
    console.log("Failed to initialize the database",error);
    
  }
});
