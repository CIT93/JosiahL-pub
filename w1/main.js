console.log("hello from inside then main.js file");

//let myVar;

const myVar = "Josiah";
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);



function runNow () {    
    if(myVarType === "number") {  
        console.log(`will 11 this one run?`);
    }else { 
        console.log(`will 13 this one run?`);
    }
}

runNow();
runNow();

