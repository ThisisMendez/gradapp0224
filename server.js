const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const app = express(); 
require('cors');
const dotenv = require('dotenv').config(); 
const cors = require('cors');

const grads = require('./routes/api/grads'); 

app.use(cors());
app.use(express.json()); // allows the data to be back into JSON file from the stringify data

//Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Cannot connect to MongoDB"));

//Use 
app.use('/api/grads', grads);
app.use(express.static('public'));


const port = process.env.PORT || 3000; 

app.listen(port, () => { 
    console.log(`Server running on port ${port}.`)
});
