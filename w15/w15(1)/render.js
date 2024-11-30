import {FORM, TBL } from "./global.js"
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
	const table = document.createElement("table");
	  const thead = document.createElement("thead");
	  const tr = document.createElement("tr");
	  const headingTextArr = ["Name", "HouseHold", "HouseSize", "food Choice", "Footprint", "Actions"];
	  headingTextArr.forEach(text => {
		const th = document.createElement("th");
		th.textContent = text;
		tr.appendChild(th);
	  });
	  thead.appendChild(tr);
	  table.appendChild(thead);
	  return table
  }

const onUpdate = (index, data) => {
	data.splice(index, 1);
	saveLS(data);
	renderTbl(data);
}

const renderTblBttns = (obj,index, data) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit"
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener("click", e => {
    onUpdate(index, data);
    })
    btnEdit.addEventListener("click", e => {
		FORM[1].value = obj.first;
		FORM[2].value = obj.last;
		FORM[3].value = obj.houseMembers;
		FORM[4].value = obj.houseSize;
		FORM[5].value = obj.foodChoice;
		onUpdate(index, data); 
	})
    return td
  }


const renderTblBody = data => {
	const tbody = document.createElement("tbody")
	data.forEach((obj, index) => {
		console.log(index);
		const tr = document.createElement("tr");
		const keys = ["first", "houseMembers", "houseSize", "foodChoice" "total"]
		 keys.forEach(key => {
			const td = document.createElement("td");
			td.textContent = obj [key];
			tr.appendChild(td);
		 })
			const td = document.createElement("td");
			td.textContent = value;
			tr.appendChild(td);
		
	  const td = renderTblBttns(obj, index, data);
	  tr.appendChild(td);
	  tbody.appendChild(tr);
	  });
	return tbody
	}

	const renderTbl = data => {
		TBL.innerHTML = "";
		if (data.length !== 0) {
		  const table = renderTblHeading();
		  const tbody = renderTblBody(data);
		  table.appendChild(tbody);
		  TBL.appendChild(table);
		}
	  }
	
	  export {renderTbl};