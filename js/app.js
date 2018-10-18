'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for hours, objects, and DOM access
var hours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var allStores = [];
var storeTable = document.getElementById('store-table');
var storeForm = document.getElementById('store-form');


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
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
  this.calcCustomersPerHour();
  this.calcHourlyCookieSales();
};

// Randomly estimate customers per hour from min/max
Store.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  }
};

// Calculate hourly cookie sales
Store.prototype.calcHourlyCookieSales = function() {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
    this.totalDailySales += this.cookiesPerHour[i];
  };
};

// Render table data for each object
Store.prototype.render = function(){
  var trEl = document.createElement('tr');
  newElement('td', this.location, trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('td', this.cookiesPerHour[i], trEl);
  };
  newElement('td', this.totalDailySales, trEl);
  storeTable.appendChild(trEl);
};

// Create instances of stores
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 16, 4.6);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS

// New element helper function
function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
};

// Calculate hourly totals for all stores
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

// Table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  newElement('th', '', trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('th', hours[i], trEl);
  };
  newElement('th', 'Total Daily Sales', trEl);
  storeTable.appendChild(trEl);
};

// Table data
function renderTableRows() {
  for (var i = 0; i < allStores.length; i ++) {
    allStores[i].render();
  }
};

// Table footer
function makeFooterRow() {
  var totals = calcTotalHourlyCookieSales();
  var trEl = document.createElement('tr');
  newElement('th', 'Totals', trEl);
  for (var i = 0; i < hours.length; i++) {
    newElement('th', totals[0][i], trEl);
  };
  newElement('th', totals[1], trEl);
  storeTable.appendChild(trEl);
};

function renderAllElements() {
  storeTable.innerHTML = '';
  makeHeaderRow();
  renderTableRows();
  makeFooterRow();
}

function handleFormSubmit(event) {
  event.preventDefault();
  // Get form data
  var storeLocation = event.target.storeLocation.value;
  var minCustomers = Number(event.target.minCustomers.value);
  var maxCustomers = Number(event.target.maxCustomers.value);
  var avgSales = Number(event.target.avgSales.value);
  // Create new store
  new Store(storeLocation, minCustomers, maxCustomers, avgSales);
  // Render new table
  renderAllElements();
  // Clear the form
  event.target.storeLocation.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgSales.value = null;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Executable Code
renderAllElements();

storeForm.addEventListener('submit', handleFormSubmit);