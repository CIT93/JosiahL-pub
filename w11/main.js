import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./calculate.js";
import { cfpData, saveLS } from "./storage.js";
import { FP } from "./fp.js";

FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value);
    cfpData.push(fpObj);
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
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

renderTbl(cfpData);







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
