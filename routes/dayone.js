const axios = require('axios');
const urls = require('../config/urls');

module.exports = function (req, res, next) {

  axios.get(urls.covid + '/dayone/country/' + req.params.country)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}