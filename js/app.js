'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var allStores = [];

var storeTable = document.getElementById('stores');

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
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
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

  var trEl = document.createElement('tr');

  tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  };

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);
// new Store('Codefellows', 15, 50, 1.3);
// new Store('Tacoma', 5, 10, 12);

function renderAllStores() {
  for (var i = 0; i < allStores.length; i ++) {
    allStores[i].render();
  }
};

function makeHeaderRow() {

  var trEl = document.createElement('tr');

  thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Total Daily Sales';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

function calcTotalHourlyCookieSales() {
  var hourlyTotals = [];
  var grandTotal = 0;
  for (var i = 0; i < hours.length; i ++){
    hourlyTotals.push(0);
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotals[i] += allStores[j].cookiesPerHour[i];
    };
    grandTotal += hourlyTotals[i];
  };

  return [hourlyTotals, grandTotal];
};

function makeFooterRow() {
  var totals = calcTotalHourlyCookieSales();

  var trEl = document.createElement('tr');

  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = totals[0][i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = totals[1];
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

makeHeaderRow();
renderAllStores();
makeFooterRow();

console.table(allStores);
