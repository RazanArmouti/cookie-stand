'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalColumn=0;
let totalCookiesArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function Shops(minHour, maxHour, averageCookiesCustomer, Location) {
    this.minHour = minHour;
    this.maxHour = maxHour;
    this.averageCookiesCustomer = averageCookiesCustomer;
    this.randomNoCust = 0;
    this.CookiesArray = [];
    this.TotalCookies = 0;
    this.Location = Location;

};//end of shops constructor
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

    }  //End for 
    console.log(result);
    LocObj.TotalCookies = result;
};


let allShopsDiv = document.getElementById('shopsDiv');
let tableElement = document.createElement('table');
allShopsDiv.appendChild(tableElement);
tableElement.setAttribute("border", "2");

let renderTableHeader = function () {
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    let thElement = document.createElement('th');
    thElement.textContent = "";
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
    let totalRow=0;      
    //Body
    
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    let tdElement = document.createElement('td');
    tdElement.textContent=LocObj.Location;
    trElement.appendChild(tdElement)
    for(let d=0; d<LocObj.CookiesArray.length; d++){
        let tdElement = document.createElement('td');
        tdElement.textContent=LocObj.CookiesArray[d];
        trElement.appendChild(tdElement) 
        totalRow+= parseInt(LocObj.CookiesArray[d]);
        console.log(totalCookiesArray);
        totalCookiesArray[d]+=parseInt(LocObj.CookiesArray[d]);
        console.log(totalCookiesArray [d]);
    }
    let tdElement1 = document.createElement('td');
    tdElement1.textContent=totalRow;
    trElement.appendChild(tdElement1)

    totalColumn+=totalRow;

    //Footer
    
};


let renderTableFooter = function () {

    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    let thElement = document.createElement('th');
    thElement.textContent = "Totals";
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




function allLocShops() {
    let seattle = new Shops(23, 65, 6.3, 'Seattle');
    seattle.getCookies(seattle);
    let tokyo = new Shops(3, 24, 1.2, 'tokyo');
    tokyo.getCookies(tokyo);
    let dubai = new Shops(11, 38, 3.7, 'Dubai');
    dubai.getCookies(dubai);
        let paris = new Shops(20, 38, 2.3, 'Paris');
    paris.getCookies(paris);
       let lima = new Shops(2, 16, 4.6, 'Lima');
    lima.getCookies(lima);
    
    renderTableHeader();
    seattle.render(seattle);
    tokyo.render(tokyo);
    dubai.render(dubai);
    paris.render(paris);
    renderTableFooter();

};



allLocShops();
