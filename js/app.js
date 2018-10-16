'use strict';

var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Array to hold Store objects
var allStores = [];

// We need to access the table that is in the DOM
var storeTable = document.getElementById('stores');

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

  // make a tr
  var trEl = document.createElement('tr');

  for (var i = 0; i < hours.length; i++) {
    // make a td
    var tdEl = document.createElement('td');
    // give it name content
    tdEl.textContent = this.cookiesPerHour[i];
    //append td to tr
    trEl.appendChild(tdEl);
  };

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);

  // append tr to table
  storeTable.appendChild(trEl);
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

function makeHeaderRow() {
  // create a tr
  var trEl = document.createElement('tr');

  for (var i = 0; i < hours.length; i++) {
    // create a th
    var thEl = document.createElement('th');
    // give it content
    thEl.textContent = hours[i];
    // append to the tr
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th');
  thEl.textContent = 'Total Daily Sales';
  trEl.appendChild(thEl);

  // Append to table
  storeTable.appendChild(trEl);
}
makeHeaderRow();
renderAllStores();

// console.table(allStores);
