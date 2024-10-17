const determineHouseHoldPts = function(numberInHousehold) {
	console.log('Inside block scope');
	let householdPoints = 0;
	if (numberInHousehold === 1) {
		householdPoints = 14;
	} else if (numberInHousehold === 2) {
		householdPoints = 12;
	} else if (numberInHousehold === 3) {
		householdPoints = 10;
	} else if (numberInHousehold === 4) {
		householdPoints = 8;
	} else if (numberInHousehold === 5) {
		householdPoints = 6;
	} else if (numberInHousehold === 6) {
		householdPoints = 4;
	} else if (numberInHousehold >= 7) {
		householdPoints = 2;
	}
	return householdPoints;
}




const determineHomeSizePts = function(sizeOfHouse) {
	let housesizePoints = 0;
	if (sizeOfHouse === 'large') {
		housesizePoints = 10;
	} else if (sizeOfHouse === 'medium-sized') {
		housesizePoints = 7;
	} else if (sizeOfHouse === 'small') {
		housesizePoints = 4;
	} else if (sizeOfHouse === 'apartment') {
		housesizePoints = 2;
	}

	return housesizePoints;
}


function displayOutObj(obj) {
	console.log(obj);
	const output = document.getElementById("output");
	const newH2 = document.createElement("h2");
	newH2.textContent = `Cardon Footprint ${obj.cfpTotal} , houseHoldPTS = ${obj.houseM} , houseSize = ${obj.houseS} , houseHoldMpts = ${obj.houseMPTS} , housesizePTS = ${obj.houseSPTS}`;
	output.appendChild(newH2);
}




export{determineHouseHoldPts,determineHomeSizePts,displayOutObj};