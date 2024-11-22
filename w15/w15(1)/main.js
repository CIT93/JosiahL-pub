import { renderTbl} from "./render.js";
import{FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js";


const start = (...i) => {
	console.log (i)
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseHoldSize = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseHoldSize;
  cfpData.push({
	firstN: i[0],
	lastN: i[1],
	hMem: i[2],
	hSize: i[3],
	hHPTS: houseHoldPTS,
	hHSize: houseHoldSize,
	hTotal: total,
  });
}



FORM.addEventListener("submit", e => {
	e.preventDefault();
	if (FNAME.value !== '' && LNAME.value !== '') {
	  SUBMIT.textContent = "";
	  //start( FNAME.value, LNAME.value, parseInt(FORM.housem.value) , FORM.houses.value );
	  const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value) , FORM.houses.value, FORM.food.value );
	//   fpObj.houseHoldPoints();
	//   fpObj.houseSizePoints();
	cfpData.push(fpObj)
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






// // let pizza STEP 1	
// function orderPizza() {
// console.log ('Order pizza')
// pizza = `🍕`
// console.log (`Pizza was ordered`)
// }
// orderPizza()
// console.log(`Eat ${pizza}`)
// orderPizza
// pizza was ordered 
// Eat 🍕


// // let pizza STEP 2	
// function orderPizza() {
// 	console.log ('Order pizza')
// 	setTimeout(() =>{
// pizza = `🍕`
// console.log('${pizza} is ready')
// 	}, 2000)
// 	console.log (`Pizza was ordered`)
// 	}

// 	orderPizza()
// 	console.log('call jeff')
// 	console.log(`Eat ${pizza}`)
// 	orderPizza
// 	pizza was ordered 
// 	Eat 🍕

// 	// let pizza STEP 3	
// function orderPizza(callback) {
// 	console.log ('Order pizza')
// 	setTimeout(() =>{
// pizza = `🍕`
// setTimeout(() => {
// 	const pizza = '🍕'
// 	callback(pizza)
// }, 2000)
// }
// fucntion pizzaReady(pizza) {
// 	console.log('eat the ${pizza}')
// }
// orderPizza(pizzaReady)
// console.log('call jeff')

// window addEventListener(click , callback)

// fucntion callback() {
// 	console.log('Clicked')
// }
//