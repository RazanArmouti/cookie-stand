'use strict';
const seattle = {
    minHour : 23,
    maxHour : 65,
    averageCookiesCustomer : 6.3,
    randomNoCust : 0,
    CookiesArray :[],
    TotalCookies : 0,
    Location :'Seattle',
    Time :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getGenerateNo : function(min,max) {
      
        min = Math.ceil(min);
        max = Math.floor(max);
        let no= Math.floor(Math.random() * (max - min +1 ) + min).toFixed(0);
        this.randomNoCust= Math.round(no);
        
    },
   
    getCookies : function(){
        let CookCounter;
        let result =0;
         for(CookCounter=0; CookCounter<=13;CookCounter++){
            this.getGenerateNo(this.minHour,this.maxHour);
            this.CookiesArray[CookCounter] =(Math.round( this.randomNoCust).toFixed(0) * this.averageCookiesCustomer).toFixed(0);
            console.log(this.CookiesArray[CookCounter]);
            result= result +parseInt( this.CookiesArray[CookCounter]);
                   
        }  //End for 
        console.log(result);
        this.TotalCookies=result;
    },

    render : function(){
        let seattleDiv =document.getElementById('seattleProfile');
        console.log(seattleDiv);
        //p
        let pElement =document.createElement('p');
        pElement.textContent= this.Location;
        seattleDiv.appendChild(pElement);
        //ul
        let ulElement =document.createElement('ul');
        seattleDiv.appendChild(ulElement);
        //li
        for(let indexLi=0;indexLi< this.CookiesArray.length;indexLi++ ){
            let liElement= document.createElement('li');
            liElement.textContent= this.Time[indexLi] + ' : ' + this.CookiesArray[indexLi] +' cookies';
            ulElement.appendChild(liElement);
        }
        let liElement= document.createElement('li');
        liElement.textContent= 'Total : ' + this.TotalCookies + ' cookies';
        ulElement.appendChild(liElement);
    }

   };// End of seattle Object 

   const tokyo = {
    minHour : 3,
    maxHour : 24,
    averageCookiesCustomer : 1.2,
    randomNoCust : 0,
    CookiesArray :[],
    TotalCookies : 0,
    Location :'Tokyo',
    Time :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getGenerateNo : function(min,max) {
      
        min = Math.ceil(min);
        max = Math.floor(max);
        let no= Math.floor(Math.random() * (max - min +1 ) + min).toFixed(0);
        this.randomNoCust= Math.round(no);
        
    },
   
    getCookies : function(){
        let CookCounter;
        let result =0;
         for(CookCounter=0; CookCounter<=13;CookCounter++){
            this.getGenerateNo(this.minHour,this.maxHour);
            this.CookiesArray[CookCounter] =(Math.round( this.randomNoCust).toFixed(0) * this.averageCookiesCustomer).toFixed(0);
            console.log(this.CookiesArray[CookCounter]);
            result= result +parseInt( this.CookiesArray[CookCounter]);
                   
        }  //End for 
        console.log(result);
        this.TotalCookies=result;
    },

    render : function(){
        let seattleDiv =document.getElementById('tokyoProfile');
        console.log(seattleDiv);
        //p
        let pElement =document.createElement('p');
        pElement.textContent= this.Location;
        seattleDiv.appendChild(pElement);
        //ul
        let ulElement =document.createElement('ul');
        seattleDiv.appendChild(ulElement);
        //li
        for(let indexLi=0;indexLi< this.CookiesArray.length;indexLi++ ){
            let liElement= document.createElement('li');
            liElement.textContent= this.Time[indexLi] + ' : ' + this.CookiesArray[indexLi] +' cookies';
            ulElement.appendChild(liElement);
        }
        let liElement= document.createElement('li');
        liElement.textContent= 'Total : ' + this.TotalCookies + ' cookies';
        ulElement.appendChild(liElement);
    }

   };// End of Tokyo Object   

   const dubai = {
    minHour : 3,
    maxHour : 24,
    averageCookiesCustomer : 1.2,
    randomNoCust : 0,
    CookiesArray :[],
    TotalCookies : 0,
    Location :'Dubai',
    Time :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getGenerateNo : function(min,max) {
      
        min = Math.ceil(min);
        max = Math.floor(max);
        let no= Math.floor(Math.random() * (max - min +1 ) + min).toFixed(0);
        this.randomNoCust= Math.round(no);
        
    },
   
    getCookies : function(){
        let CookCounter;
        let result =0;
         for(CookCounter=0; CookCounter<=13;CookCounter++){
            this.getGenerateNo(this.minHour,this.maxHour);
            this.CookiesArray[CookCounter] =(Math.round( this.randomNoCust).toFixed(0) * this.averageCookiesCustomer).toFixed(0);
            console.log(this.CookiesArray[CookCounter]);
            result= result +parseInt( this.CookiesArray[CookCounter]);
                   
        }  //End for 
        console.log(result);
        this.TotalCookies=result;
    },

    render : function(){
        let seattleDiv =document.getElementById('dubaiProfile');
        console.log(seattleDiv);
        //p
        let pElement =document.createElement('p');
        pElement.textContent= this.Location;
        seattleDiv.appendChild(pElement);
        //ul
        let ulElement =document.createElement('ul');
        seattleDiv.appendChild(ulElement);
        //li
        for(let indexLi=0;indexLi< this.CookiesArray.length;indexLi++ ){
            let liElement= document.createElement('li');
            liElement.textContent= this.Time[indexLi] + ' : ' + this.CookiesArray[indexLi] +' cookies';
            ulElement.appendChild(liElement);
        }
        let liElement= document.createElement('li');
        liElement.textContent= 'Total : ' + this.TotalCookies + ' cookies';
        ulElement.appendChild(liElement);
    }

   };// End of Dubai Object   
   const paris = {
    minHour : 3,
    maxHour : 24,
    averageCookiesCustomer : 1.2,
    randomNoCust : 0,
    CookiesArray :[],
    TotalCookies : 0,
    Location :'Paris',
    Time :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getGenerateNo : function(min,max) {
      
        min = Math.ceil(min);
        max = Math.floor(max);
        let no= Math.floor(Math.random() * (max - min +1 ) + min).toFixed(0);
        this.randomNoCust= Math.round(no);
        
    },
   
    getCookies : function(){
        let CookCounter;
        let result =0;
         for(CookCounter=0; CookCounter<=13;CookCounter++){
            this.getGenerateNo(this.minHour,this.maxHour);
            this.CookiesArray[CookCounter] =(Math.round( this.randomNoCust).toFixed(0) * this.averageCookiesCustomer).toFixed(0);
            console.log(this.CookiesArray[CookCounter]);
            result= result +parseInt( this.CookiesArray[CookCounter]);
                   
        }  //End for 
        console.log(result);
        this.TotalCookies=result;
    },

    render : function(){
        let seattleDiv =document.getElementById('parisProfile');
        console.log(seattleDiv);
        //p
        let pElement =document.createElement('p');
        pElement.textContent= this.Location;
        seattleDiv.appendChild(pElement);
        //ul
        let ulElement =document.createElement('ul');
        seattleDiv.appendChild(ulElement);
        //li
        for(let indexLi=0;indexLi< this.CookiesArray.length;indexLi++ ){
            let liElement= document.createElement('li');
            liElement.textContent= this.Time[indexLi] + ' : ' + this.CookiesArray[indexLi] +' cookies';
            ulElement.appendChild(liElement);
        }
        let liElement= document.createElement('li');
        liElement.textContent= 'Total : ' + this.TotalCookies + ' cookies';
        ulElement.appendChild(liElement);
    }

   };// End of paris Object   

   const lima = {
    minHour : 3,
    maxHour : 24,
    averageCookiesCustomer : 1.2,
    randomNoCust : 0,
    CookiesArray :[],
    TotalCookies : 0,
    Location :'Lima',
    Time :['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getGenerateNo : function(min,max) {
      
        min = Math.ceil(min);
        max = Math.floor(max);
        let no= Math.floor(Math.random() * (max - min +1 ) + min).toFixed(0);
        this.randomNoCust= Math.round(no);
        
    },
   
    getCookies : function(){
        let CookCounter;
        let result =0;
         for(CookCounter=0; CookCounter<=13;CookCounter++){
            this.getGenerateNo(this.minHour,this.maxHour);
            this.CookiesArray[CookCounter] =(Math.round( this.randomNoCust).toFixed(0) * this.averageCookiesCustomer).toFixed(0);
            console.log(this.CookiesArray[CookCounter]);
            result= result +parseInt( this.CookiesArray[CookCounter]);
                   
        }  //End for 
        console.log(result);
        this.TotalCookies=result;
    },

    render : function(){
        let seattleDiv =document.getElementById('limaProfile');
        console.log(seattleDiv);
        //p
        let pElement =document.createElement('p');
        pElement.textContent= this.Location;
        seattleDiv.appendChild(pElement);
        //ul
        let ulElement =document.createElement('ul');
        seattleDiv.appendChild(ulElement);
        //li
        for(let indexLi=0;indexLi< this.CookiesArray.length;indexLi++ ){
            let liElement= document.createElement('li');
            liElement.textContent= this.Time[indexLi] + ' : ' + this.CookiesArray[indexLi] +' cookies';
            ulElement.appendChild(liElement);
        }
        let liElement= document.createElement('li');
        liElement.textContent= 'Total : ' + this.TotalCookies + ' cookies';
        ulElement.appendChild(liElement);
    }

   };// End of lima Object 


function seattleShop(){
seattle.getCookies();
console.log(seattle);
seattle.render();
};

function tokyoShop(){
    tokyo.getCookies();
    console.log(seattle);
    tokyo.render();
};

function dubaiShop(){
    dubai.getCookies();
    console.log(dubai);
    dubai.render();
};

function parisShop(){
    paris.getCookies();
    console.log(paris);
    paris.render();
};

function limaShop(){
    lima.getCookies();
    console.log(lima);
    lima.render();
};

seattleShop();
tokyoShop();
dubaiShop();
parisShop();
limaShop();
