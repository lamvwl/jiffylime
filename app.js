var express = require('express');
var app = express();
const bunyan = require('bunyan');
const uuid = require('uuid-random');
const morgan = require('morgan');
const axios = require('axios');

//logging
var log = bunyan.createLogger({name: "jiffylime"});
log.info("startup");

morgan.token('uuid', function getId(req) {
    return uuid();
});

app.use(morgan('[:uuid] - :method :status :url :response-time ms'));
////

//FOR DEVELOPMENT ONLY
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
});
////

app.use('/', require('./routes/router.js'))

//routes TODO
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

// app.get('/summary', function (req, res) {
//   res.send('summary')
// })

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

