'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomInclusive(min, max) {
  // receives a min and max as input, calculates a random number inclusive of those numbers - from MDN docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
firstPike.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var pikeUl = document.getElementById('first-pike');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.estHourlySales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.estHourlySales[i]} cookies`;
    // 3. append the <li> to the <ul>
    pikeUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalSales} cookies`;
  pikeUl.appendChild(liEl);
};

var seatac = {
  locationName: 'Seatac Airport',
  minHourlyCust: 3,
  maxHourlyCust: 65,
  avgSales: 1.2,
};
seatac.estHourlyCust = estimateHourlyCustomers(seatac.minHourlyCust, seatac.maxHourlyCust);
seatac.estHourlySales = calcCookieSales(seatac.estHourlyCust, seatac.avgSales);
seatac.totalSales = calcDailySales(seatac.estHourlySales);
seatac.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var seatacUl = document.getElementById('seatac');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.estHourlySales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.estHourlySales[i]} cookies`;
    // 3. append the <li> to the <ul>
    seatacUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalSales} cookies`;
  seatacUl.appendChild(liEl);
};

var seaCenter = {
  locationName: 'Seattle Center',
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgSales: 3.7,
};
seaCenter.estHourlyCust = estimateHourlyCustomers(seaCenter.minHourlyCust, seaCenter.maxHourlyCust);
seaCenter.estHourlySales = calcCookieSales(seaCenter.estHourlyCust, seaCenter.avgSales);
seaCenter.totalSales = calcDailySales(seaCenter.estHourlySales);
seaCenter.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var seaCenterUl = document.getElementById('seattle-center');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.estHourlySales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.estHourlySales[i]} cookies`;
    // 3. append the <li> to the <ul>
    seaCenterUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalSales} cookies`;
  seaCenterUl.appendChild(liEl);
};

var capitolHill = {
  locationName: 'Capitol Hill',
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgSales: 2.3,
};
capitolHill.estHourlyCust = estimateHourlyCustomers(capitolHill.minHourlyCust, capitolHill.maxHourlyCust);
capitolHill.estHourlySales = calcCookieSales(capitolHill.estHourlyCust, capitolHill.avgSales);
capitolHill.totalSales = calcDailySales(capitolHill.estHourlySales);
capitolHill.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var capitolHillUl = document.getElementById('capitol-hill');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.estHourlySales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.estHourlySales[i]} cookies`;
    // 3. append the <li> to the <ul>
    capitolHillUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalSales} cookies`;
  capitolHillUl.appendChild(liEl);
};

var alki = {
  locationName: 'Alki',
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgSales: 4.6,
};
alki.estHourlyCust = estimateHourlyCustomers(alki.minHourlyCust, alki.maxHourlyCust);
alki.estHourlySales = calcCookieSales(alki.estHourlyCust, alki.avgSales);
alki.totalSales = calcDailySales(alki.estHourlySales);
alki.render = function() {
  // render store sales info to sales.html page
  // access location to place data
  var alkiUl = document.getElementById('alki');
  // for each element in the cookie sales array, we need to:
  for (var i = 0; i < this.estHourlySales.length; i ++) {
    // 1. create a <li> element
    var liEl = document.createElement('li');
    // 2. give that <li> content
    liEl.textContent = `${hours[i]}: ${this.estHourlySales[i]} cookies`;
    // 3. append the <li> to the <ul>
    alkiUl.appendChild(liEl);
  };
  // add total sales at end of list
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalSales} cookies`;
  alkiUl.appendChild(liEl);
};

firstPike.render();
seatac.render();
seaCenter.render();
capitolHill.render();
alki.render();
