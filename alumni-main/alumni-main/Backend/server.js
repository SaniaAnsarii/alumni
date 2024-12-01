const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const alumniRoutes = require('./routes/alumniRoutes');
const eventRoutes = require('./routes/eventRoutes');
const jobRoutes = require('./routes/jobRoutes');
const messageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT =8008;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/alumni', alumniRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);       // Authentication routes
app.use('/api/alumni', alumniRoutes);   // Protected alumni routes


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
