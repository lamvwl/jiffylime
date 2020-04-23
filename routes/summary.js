const axios = require('axios');
const urls = require('../config/urls');
const countrymapping = require('../config/countrymap');

module.exports = function (req, res, next) {

  axios.get(urls.covid + '/summary')
    .then(function (response) {

      let totalConfirmed = [];

      response.data.Countries.forEach(function (e) {
        let tempArray = [];
        tempArray[0] = countrymapping.getCountryISO3(e.CountryCode);
        tempArray[1] = e.TotalConfirmed;
        totalConfirmed.push(tempArray);
      }) 

      res.send(totalConfirmed);
    })
    .catch(function (error) {
      console.log(error);
    })
}
