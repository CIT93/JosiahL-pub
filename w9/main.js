import { renderTbl} from "./render.js";
import {determineHouseHoldPts,determineHomeSizePts} from "./cfp.js";
import{FORM} from "./global.js"
import {saveLS, cfpData} from "./storage.js"


function start(first, lastname, houseHoldMembers, housesize) {
	const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
	const housesizePTS = determineHomeSizePts(housesize);
	const total = houseHoldPTS + housesizePTS;
	cfpData.push({
		houseM: houseHoldMembers,
		houseS: housesize,
		houseMPTS: houseHoldPTS,
		houseSPTS: housesizePTS,
		cfpTotal: total
	});
}


renderTbl(cfpData);

FORM.addEventListener('submit', function (e){
	e.preventDefault();
	const firstName = FORM.firstname.value;
	const lastName = FORM.lastname.value;
	const houseMembers = parseInt(FORM.housem.value);
	const houseSize = FORM.houses.value;
	start(firstName, lastName, houseMembers, houseSize);
	saveLS(cfpData)
	renderTbl(cfpData);
	FORM.reset();
})

