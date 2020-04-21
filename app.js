var express = require('express');
var app = express();
const axios = require('axios');

//routes

app.get('/dayone', function (req, res) {
  axios.get('https://api.covid19api.com/dayone/country/south-africa')
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
})

app.get('/live', function (req, res) {
  res.send('live')
})

app.get('/countrydates', function (req, res) {
  res.send('countrydates')
})

app.get('/total', function (req, res) {
  res.send('total')
})

app.get('/countries', function (req, res) {
  res.send('countries')
})

app.get('/summary', function (req, res) {
  res.send('summary')
})

app.get('/worlddates', function (req, res) {
  res.send('worlddates')
})

app.get('/worldtotal', function (req, res) {
  res.send('worldtotal')
})

app.get('/datadump', function (req, res) {
  res.send('datadump')
})

app.get('/stats', function (req, res) {
  res.send('stats')
})

app.use(function (req, res) {
  res.sendStatus(404);
})

app.listen(3000, process.env.PORT, function () {
  console.log('Starting up...');
});

