require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
connectDB();

app.use(cors({
    origin: 'https://keeptrack-notes.vercel.app',
    credentials: true
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

module.exports = app;
