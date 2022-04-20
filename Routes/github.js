const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/archive', (req, res) => {
    axios({
        method: 'get',
        url:`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
        header: { 
            Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-preview+json"
        }
    }).then(response => {
        res.send(response.data);
    }).catch(err => {
        res.send(err);
    })
});

module.exports = router;