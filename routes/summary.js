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

      let countryPromiseArray = response.data.Countries.map(function (e) {
        return countrymapping.getCountryISO3(e.CountryCode)
          .then(function (result) {
            return [result, e.TotalConfirmed];
        })
      });

      let countryArrayTotalConfirmed = 
        Promise.allSettled(countryPromiseArray)
          .then(function (results) {
          return results.map(function (e) {
            return e.value;
          });
        });

      return countryArrayTotalConfirmed;
    })
    .then(function (totalConfirmed) {
      res.send(totalConfirmed);
    })
    .catch(function (err) {
      next(err);
    })
}
