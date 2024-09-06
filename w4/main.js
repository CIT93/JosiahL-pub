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



function displayOutput() {
    for (arr of cfpData) {
      console.log(arr)
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      newP.textContent = `If the size of my household is ${arr[0]}, then I will add ${arr[2]} points. If the size of my home is ${arr[1]}, then I will add ${arr[3]} points. This will make the Carbon Footprint total is ${arr[4]}.`;
      output.appendChild(newP)
    }
}


start(1, "apt");
start(2, "apt");
start(3, "apt");
start(4, "apt");
start(5, "apt");
start(6, "apt");
start(7, "apt");
start(1, "small");
start(2, "small");
start(3, "small");
start(4, "small");
start(5, "small");
start(6, "small");
start(7, "small");
start(1, "medium");
start(2, "medium");
start(3, "medium");
start(4, "medium");
start(5, "medium");
start(6, "medium");
start(7, "medium");
start(1, "large");
start(2, "large");


// where do we put the console.log for house size 

//arrays

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[1]);
console.log(myArr[4]);
console.log(myArr[0] = 10);
console.log(myArr.push(1));
