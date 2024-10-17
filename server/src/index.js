const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

const authRoutes = require('./routes/auth');
const accountRoutes = require('./routes/account');

// create database connection
mongoose
  .connect('mongodb://localhost/nevmo')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/accounts', accountRoutes);

app.get('/', (req, res) => {
  res.send('Nevmo Server is running!');
});

app.listen(PORT, () => {
  console.log(`Nevmo Server running on port ${PORT}`);
});
