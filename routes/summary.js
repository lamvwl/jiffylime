const axios = require('axios');
const urls = require('../config/urls');
const countrymapping = require('../config/countrymap');

module.exports = function (req, res, next) {

  //For Development only (API rate limit workaround)
  var tempSummary = require('../temp/summary.json'),
    tempSummary = {"data": tempSummary};
    Promise.resolve(tempSummary)
  ////

  // axios.get(urls.covid + '/summary')
    .then(function (response) {

      let totalConfirmed = [];
      var array = response.data.Countries;
      
        for(e in array) {
          var cc = countrymapping.getCountryISO3(array[e].CountryCode)
          let tempArray = [];
          tempArray[0] = cc;
          tempArray[1] = array[e].TotalConfirmed;
          totalConfirmed.push(tempArray);
        }
      return totalConfirmed; 
    })
    .then(function (totalConfirmed) {
      res.send(totalConfirmed);
    })
    .catch(function (error) {
      console.log(error);
    })
}
