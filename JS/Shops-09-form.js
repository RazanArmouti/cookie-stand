'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalColumn = 0;
let totalCookiesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let LocArray = [['Seattle', 23, 65, 6.3], ['Tokyo', 3, 24, 1.2], ['Dubai', 11, 38, 3.7], ['Paris', 20, 38, 2.3], ['Lima', 2, 16, 4.6]];

function Shops(locationArray) {
  this.minHour = locationArray[1];
  this.maxHour = locationArray[2];
  this.averageCookiesCustomer = locationArray[3];
  this.randomNoCust = 0;
  this.CookiesArray = [];
  this.TotalCookies = 0;
  this.Location = locationArray[0];

}//end of shops constructor
Shops.prototype.getRandomCustNo = function (min, max, LocObj) {

  let no = Math.ceil(Math.random() * (max - min + 1) + min);
  LocObj.randomNoCust = Math.ceil(no);

};
Shops.prototype.getCookies = function (LocObj) {
  let CookCounter;
  let result = 0;
  for (CookCounter = 0; CookCounter <= 13; CookCounter++) {
    LocObj.getRandomCustNo(LocObj.minHour, LocObj.maxHour, LocObj);
    LocObj.CookiesArray.push(Math.ceil(LocObj.randomNoCust * LocObj.averageCookiesCustomer));
    result += parseInt(LocObj.CookiesArray[CookCounter]);

  } //End for
  console.log(result);
  LocObj.TotalCookies = result;
};

let allShopsDiv = document.getElementById('shopsDiv');
let tableElement = document.createElement('table');
allShopsDiv.appendChild(tableElement);
tableElement.setAttribute('border', '2');

let renderTableHeader = function () {
  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let thElement = document.createElement('th');
  thElement.textContent = 'Area';
  trElement.appendChild(thElement);

  for (let H = 0; H < hours.length; H++) {
    let thElement = document.createElement('th');
    thElement.textContent = hours[H];
    trElement.appendChild(thElement);
  }

  let thElement1 = document.createElement('th');
  thElement1.textContent = 'Daily Location Total';
  trElement.appendChild(thElement1);

};
Shops.prototype.render = function (LocObj) {
  let totalRow = 0;
  //Body

  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let tdElement = document.createElement('td');
  tdElement.textContent = LocObj.Location;
  trElement.appendChild(tdElement);
  for (let d = 0; d < LocObj.CookiesArray.length; d++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = LocObj.CookiesArray[d];
    trElement.appendChild(tdElement);
    totalRow += parseInt(LocObj.CookiesArray[d]);
    console.log(totalCookiesArray);
    totalCookiesArray[d] += parseInt(LocObj.CookiesArray[d]);
    console.log(totalCookiesArray[d]);
  }
  let tdElement1 = document.createElement('td');
  tdElement1.textContent = totalRow;
  trElement.appendChild(tdElement1);

  totalColumn += totalRow;

  //Footer

};
let renderTableFooter = function () {

  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);

  for (let H = 0; H < totalCookiesArray.length; H++) {
    let thElement = document.createElement('th');
    thElement.textContent = totalCookiesArray[H];
    trElement.appendChild(thElement);
  }
  let thElement2 = document.createElement('th');
  thElement2.textContent = totalColumn;
  trElement.appendChild(thElement2);
};

allLocShops(LocArray);

function allLocShops(ShopsLocArray) {
  renderTableHeader();
  for (let loc = 0; loc < ShopsLocArray.length; loc++) {
    let shopsObj = new Shops(ShopsLocArray[loc]);
    shopsObj.getCookies(shopsObj);
    shopsObj.render(shopsObj);
  }

  renderTableFooter();

}
let locationForm = document.getElementById('shopsLocForm');
locationForm.addEventListener('submit',SubmitHandlerforRender);

function SubmitHandlerforRender(event){
  event.preventDefault();
  let locationText = event.target.loc.value;
  let minText = event.target.minH.value;
  let maxText = event.target.maxH.value;
  let avgText = event.target.avg.value;
  LocArray[LocArray.length]=[locationText,minText,maxText,avgText]; 
  tableElement.remove();
  tableElement = document.createElement('table');
  allShopsDiv.appendChild(tableElement);
  tableElement.setAttribute('border', '2');
  allLocShops(LocArray);
  shopsLocForm.reset();

}


