function determineHouseHoldPts(numberInHousehold) {
    console.log("Inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold >= 7) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of the members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}`);
}
let carbonFootprintPoints = 0;
//const numberInHousehold = 3;

function determineHomeSizePts(sizeOfHouse) {
    if (sizeOfHouse === "large") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (sizeOfHouse === "medium-sized") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (sizeOfHouse === "small") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (sizeOfHouse === "apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the ${sizeOfHouse} home the points would be ${carbonFootprintPoints}`);
}

// global scope
//determineHouseHoldPts(3);
determineHouseHoldPts(4);
determineHomeSizePts("medium-sized");



