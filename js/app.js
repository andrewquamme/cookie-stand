'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomInclusive(min, max) {
  // receives a min and max as input, calculates a random number inclusive of those numbers - from MDN docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Array to hold Store objects
var allStores = [];

// Store constructor
function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
};

Store.prototype.calcCustomersPerHour = function() {
  // take the estimated min and max customers per hour, and return a random number to estimate the customers per hour for each hour of operation
  for (var i = 0; i < hours.length; i++) {
    this.customersPerHour.push(getRandomInclusive(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

Store.prototype.calcHourlyCookieSales = function() {
  // take the array of estimated hourly customers and average cookie sales per customer, and return the estimate of hourly cookie sales
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
    // Add to daily total
    this.totalDailySales += this.cookiesPerHour[i];
  };
};

Store.prototype.render = function(){
  this.calcCustomersPerHour();
  this.calcHourlyCookieSales();
};

// Create instances of Store
/*
1st and Pike	23	65	6.3
SeaTac Airport	3	24	1.2
Seattle Center	11	38	3.7
Capitol Hill	20	38	2.3
Alki	2	16	4.6
*/

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

// Render all stores
function renderAllStores() {
  for (var i = 0; i < allStores.length; i ++) {
    allStores[i].render();
    // console.table(allStores[i]);
  }
};

renderAllStores();
console.table(allStores);
