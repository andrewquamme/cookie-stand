'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function getRandomInclusive(min, max) {
  // receives a min and max as input, calculates a random number inclusive of those numbers
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

function  estimateHourlyCustomers(min, max) {
  // take the estimated min and max customers per hour, and return a random number to estimate the customers per hour for each hour of operation
  var estimates = [];
  for (var i = 0; i < hours.length; i++) {
    var custThisHour = getRandomInclusive(min, max);
    estimates.push(custThisHour);
  }
  return estimates;
};

function calcCookieSales(hourlyCust, averageSales) {
  // take the array of estimated hourly customers and average cookie sales per customer, and return the estimate of hourly cookie sales
  var hourlySales = [];
  for (var i = 0; i < hourlyCust.length; i++) {
    var salesThisHour = Math.floor(hourlyCust[i] * averageSales);
    hourlySales.push(salesThisHour);
  };
  return hourlySales;
};

function calcDailySales(hourlySales) {
  // take the array of hourly cookie sales and calculate the total sales for the day
  var totalSales = 0;
  for (var i = 0; i < hourlySales.length; i++) {
    totalSales += hourlySales[i];
  }
  return totalSales;
};

var firstPike = {
  locationName: 'First and Pike',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgSales: 6.3,
};

firstPike.estHourlyCust = estimateHourlyCustomers(firstPike.minHourlyCust, firstPike.maxHourlyCust);
firstPike.estHourlySales = calcCookieSales(firstPike.estHourlyCust, firstPike.avgSales);
firstPike.totalSales = calcDailySales(firstPike.estHourlySales);
