import { renderTbl} from "./render.js";
import {determineHouseHoldPts,determineHomeSizePts} from "./cfp.js";

const FORM = document.getElementById("form")
const output = document.getElementById("output");
const cfpData = [];

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


FORM.addEventListener('submit', function (e){
	e.preventDefault();
	const firstName = FORM.firstname.value;
	const lastName = FORM.lastname.value;
	const houseMembers = parseInt(FORM.housem.value);
	const houseSize = FORM.houses.value;
	start(firstName, lastName, houseMembers, houseSize);
	output.innerHTML = "";
	//displayOutput();
	renderTbl(cfpData);
	FORM.reset();
})

