const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path:'./config.env'});
require('./config/db');

const PORT = process.env.PORT || 80;

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to my portfolio`);
});

app.use('/github', require('./Routes/github'));
app.use('/contactform', require('./Routes/contactform'));

app.get('*', (req,res) => {
    res.status(404).send('404 Page Not Found');
});

app.listen(PORT, (req, res) => {
    console.log('Portfolio Backend server is running');
})