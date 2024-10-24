import { renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import{FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js";


const start = (...i) => {
	console.log (i)
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseHoldSize = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseHoldSize;
  cfpData.push({
	firstN: i[0],
	lastN: i[1],
	hMem: i[2],
	hSize: i[3],
	hHPTS: houseHoldPTS,
	hHSize: houseHoldSize,
	hTotal: total,
  });
}



FORM.addEventListener("submit", e => {
	e.preventDefault();
	if (FNAME.value !== '' && LNAME.value !== '') {
	  SUBMIT.textContent = "";
	  //start( FNAME.value, LNAME.value, parseInt(FORM.housem.value) , FORM.houses.value );
	  const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value) , FORM.houses.value );
	//   fpObj.houseHoldPoints();
	//   fpObj.houseSizePoints();
	cfpData.push(fpObj)
	  saveLS(cfpData);
	  renderTbl(cfpData); 
	  FORM.reset();
	}
	else {
	  SUBMIT.textContent = "Form requires first and last name";
	}
  })

const validateField = event => {
	const field = event.target.value;
	const fieldID = event.target.id;
	const fieldError = document.getElementById(`${fieldID}Error`);
	if (field === '') {
		fieldError.textContent = `${fieldID} is required`;
		event.target.classList.remove('invalid');
		}else {
			fieldError.textContent = '';
			event.target.classList.remove('invalid');
		}
};
FNAME.addEventListener('blur', validateField);	
LNAME.addEventListener('blur', validateField);







///rest operator
/// const add2 = function(...a) {
/// 	return 2 + a[3];
/// }

/// const result = add2(1, 2, 3, 4);

/// arrow function 

/// const add2 = a => 2 + a;


/// const result = add2(100);

/// //IIFE

/// const a = 3;

/// (function(a){
/// console.log("inside IIFE")
/// console.log(a);
/// })(a);




// const me = {
// 	name: "Josiah",
// 	hairColor: "Black",
// 	location: "Home",
// 	sleepScore: 95,
// 	introduce: function () {
// 		console.log(this)
// 		console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now !`)
// 	}
// }
// me.introduce();



// const you = {
// 	name: "Jan",
// 	hairColor: "Brown",
// 	location: "Home",
// 	sleepScore: 55,
// 	introduce: function () {
// 		console.log(this)
// 		console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now !`)
// 	}
// }
// me.introduce();
// you.introduce();
//


// class Human {
// 	constructor(name,hairColor, location, sleepScore){
// 		this.name = name
// 		this.hairColor = hairColor
// 		this.location = location
// 		this.sleepScore = sleepScore
// 	}
// 	introduce() {
// 		console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleepScore of ${this.sleepScore}! `)	
// 	}
// }

// const Josiah = new Human("josiah","Black", "home",95);
// const Jane = new Human("Jan","Brown", "home",55);
// Josiah.introduce();
// Jane.introduce();
