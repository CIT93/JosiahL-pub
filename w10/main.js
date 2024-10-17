import { renderTbl} from "./render.js";
import {determineHouseHoldPts,determineHomeSizePts} from "./cfp.js";
import{FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

const start = function (first, last, houseHoldMembers, housesize) {
	const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
	const housesizePTS = determineHomeSizePts(housesize);
	const total = houseHoldPTS + housesizePTS;
	cfpData.push({
		firstName: first,
		lastname: last,
		houseM: houseHoldMembers,
		houseS: housesize,
		houseMPTS: houseHoldPTS,
		houseSPTS: housesizePTS,
		cfpTotal: total,
	});
}

renderTbl(cfpData);

// function to validate a single field
const validateField = function(event) {
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
}
	
// Attach blur event listeners 
FNAME.addEventListener (`blur`, validateField);
LNAME.addEventListener (`blur`, validateField);


FORM.addEventListener('submit', function (e){
	e.preventDefault();
	if (FNAME.value !== '' && LNAME.value !== '') {
	SUBMIT.textContent = '';
	start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
	saveLS(cfpData)
	renderTbl(cfpData);
	FORM.reset();
}else{
	SUBMIT.textContent + "form requires first name and last name";
}
});


const add2 = function(...a) {
	return 2 + a[3];
}

const result = add2(1, 2, 3, 4);

//spread argrument

//IIFE

const a = 3;

(function(a){
console.log("inside IIFE")
console.log(a);
})(a);