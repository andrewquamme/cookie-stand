'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomInclusive(min, max) {
  // receives a min and max as input, calculates a random number inclusive of those numbers - from MDN docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function  calcCustomersPerHour(min, max) {
  // take the estimated min and max customers per hour, and return a random number to estimate the customers per hour for each hour of operation
  var estimates = [];
  for (var i = 0; i < hours.length; i++) {
    var custThisHour = getRandomInclusive(min, max);
    estimates.push(custThisHour);
  }
  return estimates;
};

function calcHourlyCookieSales(hourlyCust, averageSales) {
  // take the array of estimated hourly customers and average cookie sales per customer, and return the estimate of hourly cookie sales
  var hourlySales = [];
  for (var i = 0; i < hourlyCust.length; i++) {
    var salesThisHour = Math.ceil(hourlyCust[i] * averageSales);
    hourlySales.push(salesThisHour);
  };
  return hourlySales;
};

function calcTotalDailySales(hourlySales) {
  // take the array of hourly cookie sales and calculate the total sales for the day
  var totalSales = 0;
  for (var i = 0; i < hourlySales.length; i++) {
    totalSales += hourlySales[i];
  }
  return totalSales;
};

var firstPike = {
  locationName: 'First and Pike',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
};
firstPike.customersPerHour = calcCustomersPerHour(firstPike.minCustomersPerHour, firstPike.maxCustomersPerHour);
firstPike.hourlyCookieSales = calcHourlyCookieSales(firstPike.customersPerHour, firstPike.avgCookiesPerCustomer);
firstPike.totalDailySales = calcTotalDailySales(firstPike.hourlyCookieSales);
firstPike.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var pikeUl = document.getElementById('first-pike');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.hourlyCookieSales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
    // 3. append the <li> to the <ul>
    pikeUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailySales} cookies`;
  pikeUl.appendChild(liEl);
};

var seatac = {
  locationName: 'Seatac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 1.2,
};
seatac.customersPerHour = calcCustomersPerHour(seatac.minCustomersPerHour, seatac.maxCustomersPerHour);
seatac.hourlyCookieSales = calcHourlyCookieSales(seatac.customersPerHour, seatac.avgCookiesPerCustomer);
seatac.totalDailySales = calcTotalDailySales(seatac.hourlyCookieSales);
seatac.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var seatacUl = document.getElementById('seatac');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.hourlyCookieSales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
    // 3. append the <li> to the <ul>
    seatacUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailySales} cookies`;
  seatacUl.appendChild(liEl);
};

var seaCenter = {
  locationName: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
};
seaCenter.customersPerHour = calcCustomersPerHour(seaCenter.minCustomersPerHour, seaCenter.maxCustomersPerHour);
seaCenter.hourlyCookieSales = calcHourlyCookieSales(seaCenter.customersPerHour, seaCenter.avgCookiesPerCustomer);
seaCenter.totalDailySales = calcTotalDailySales(seaCenter.hourlyCookieSales);
seaCenter.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var seaCenterUl = document.getElementById('seattle-center');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.hourlyCookieSales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
    // 3. append the <li> to the <ul>
    seaCenterUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailySales} cookies`;
  seaCenterUl.appendChild(liEl);
};

var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
};
capitolHill.customersPerHour = calcCustomersPerHour(capitolHill.minCustomersPerHour, capitolHill.maxCustomersPerHour);
capitolHill.hourlyCookieSales = calcHourlyCookieSales(capitolHill.customersPerHour, capitolHill.avgCookiesPerCustomer);
capitolHill.totalDailySales = calcTotalDailySales(capitolHill.hourlyCookieSales);
capitolHill.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var capitolHillUl = document.getElementById('capitol-hill');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.hourlyCookieSales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
    // 3. append the <li> to the <ul>
    capitolHillUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailySales} cookies`;
  capitolHillUl.appendChild(liEl);
};

var alki = {
  locationName: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
};
alki.customersPerHour = calcCustomersPerHour(alki.minCustomersPerHour, alki.maxCustomersPerHour);
alki.hourlyCookieSales = calcHourlyCookieSales(alki.customersPerHour, alki.avgCookiesPerCustomer);
alki.totalDailySales = calcTotalDailySales(alki.hourlyCookieSales);
alki.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var alkiUl = document.getElementById('alki');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.hourlyCookieSales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.hourlyCookieSales[i]} cookies`;
    // 3. append the <li> to the <ul>
    alkiUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalDailySales} cookies`;
  alkiUl.appendChild(liEl);
};

firstPike.render();
seatac.render();
seaCenter.render();
capitolHill.render();
alki.render();
