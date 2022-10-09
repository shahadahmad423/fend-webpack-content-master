const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: "'https://api.meaningcloud.com/sentiment-2.1'",
    application_key: "e3717e61123d9b321f465d0aa624ef3a"
  });

console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });