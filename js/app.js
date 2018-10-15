'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

function  estimateCustomers(min, max) {
  var estimates = [];
  for (var i = 0; i < hours.length; i++) {
    var custThisHour = getRandomInclusive(min, max);
    estimates.push(custThisHour);
  }
  return estimates;
};

function calcCookieSales(hourlyCustArray, averageSales) {
  var hourlySales = [];
  for (var i = 0; i < hourlyCustArray.length; i++) {
    var salesThisHour = Math.floor(hourlyCustArray[i] * averageSales);
    hourlySales.push(salesThisHour);
  };
  return hourlySales;
};

var firstPike = {
  locationName: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
};

firstPike.estCust = estimateCustomers(firstPike.minCust, firstPike.maxCust);
firstPike.estSales = calcCookieSales(firstPike.estCust, firstPike.avgSales);

