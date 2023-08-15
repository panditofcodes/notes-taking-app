const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser'); // Moved to the top
const authenticate = require('./middleware/authenticate'); // Moved to the top
require('./database');

app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Moved up
app.use(express.static(path.join(__dirname, './frontend/build')));

// Define API routes
app.use(require('./routes/router'));

// Serve React app for any route not matched by API
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is Live!');
});
