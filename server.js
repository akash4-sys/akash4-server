const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path:'./config.env'});

const PORT = process.env.PORT || 80;

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to my portfolio`);
});

app.use('/github', require('./routes/github'));

app.get('*', (req,res) => {
    res.status(404).send('404 Page Not Found');
});

app.listen(PORT, (req, res) => {
    console.log('Backend server is running');
})