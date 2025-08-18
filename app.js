// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');


const app = express();
const PORT = 4002;

app.use(bodyParser.json());
console.log(process.env.JWT_SECRET)
app.use('/patients', patientRoutes);

app.listen(PORT, () => {
  
  console.log(`Server running on http://localhost:${PORT}`);
});
