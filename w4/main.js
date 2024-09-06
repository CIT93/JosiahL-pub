const cfpData = [];

function determineHouseHoldPts(numberInHousehold) {
    console.log("Inside block scope");
    let householdPoints = 0;
    if (numberInHousehold === 1) {
       householdPoints = 14;
    } else if (numberInHousehold === 2) {
        householdPoints =  12;
    } else if (numberInHousehold === 3) {
        householdPoints =  10;
    } else if (numberInHousehold === 4) {
        householdPoints =  8;
    } else if (numberInHousehold === 5) {
        householdPoints =   6;
    } else if (numberInHousehold === 6) {
        householdPoints =  4;
    } else if (numberInHousehold >= 7) {
        householdPoints =  2;
    }
    
}

console.log("global scope");

//const numberInHousehold = 3;







function determineHomeSizePts(sizeOfHouse) {
    console.log("Inside block scope");
    if (sizeOfHouse === "large") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (sizeOfHouse === "medium-sized") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (sizeOfHouse === "small") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (sizeOfHouse === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    
}


//determineHouseHoldPts(3);


// first notes




console.log("top of file")
function determineHomeSizePts(sizeOfHouse) {
    console.log("Inside block scope");
    let housesizePoints = 0
    if (sizeOfHouse === "large") {
        housesizePoints =  10;
    } else if (sizeOfHouse === "medium-sized") {
        housesizePoints = 7;
    } else if (sizeOfHouse === "small") {
        housesizePoints = 4;
    } else if (sizeOfHouse === "apartment") {
        housesizePoints = 2;
    }

return housesizePoints

}

function start (houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const housesizePTS = determineHomeSizePts(houseSize);   
    const total = houseHoldPTS + housesizePTS; 
    cfpData.push([houseHoldMembers,houseSize,houseHoldPTS,housesizePTS,total]);
    
    }


    //Last code along for week 4 - does it make sense to have all of this in one array ?
   // const myInputs = [5, "apt"];

   function displayOutput(){

   }

start(5, "apt");
start(4, "large");
start(3, "medium");

displayOutput()


// where do we put the console.log for house size 

//arrays

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[1]);
console.log(myArr[4]);
console.log(myArr[0] = 10);
console.log(myArr.push(1));
