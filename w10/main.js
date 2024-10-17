import { renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import{FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"


const start = (houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseHoldSize = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseHoldSize;
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  cfpData.push({
	firstN: firstName,
	hMem: houseHoldMembers,
	hSize: houseSize,
	hHPTS: houseHoldPTS,
	hHSize: houseHoldSize,
	hTotal: total,
	lastN: lastName
  });
}



FORM.addEventListener("submit", e => {
	e.preventDefault();
	if (FNAME.value !== '' && LNAME.value !== '') {
	  SUBMIT.textContent = "";
	  start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
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





//rest operator
// const add2 = function(...a) {
// 	return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

// arrow function 

const add2 = a => 2 + a;


const result = add2(100);

//IIFE

const a = 3;

(function(a){
console.log("inside IIFE")
console.log(a);
})(a);