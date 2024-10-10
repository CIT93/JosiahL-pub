import { FORM, TBL } from "./global.js"
import { saveLS } from "./storage.js";

function renderTblHeading() {
	const table = document.createElement("table");
	const thead = document.createElement("thead");
	const tr = document.createElement("tr");
	const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
	headingTextArr.forEach(function (text) {
		const th = document.createElement("th");
		th.textContent = text;
		tr.appendChild(th);
	});
	thead.appendChild(tr);
	tr.appendChild(td);
	return tr
}

function onUpdate(index, data) {
	data.splice(index, 1);
	saveLS(data);
	renderTbl(data);
}

function renderTblBtn(index, data) {
	const td = document.createElement("td")
	const btnEdit = document.createElement("button");
	const btnDel = document.createElement("button");
	btnEdit.textContent = "Edit";
	btnDel.textContent = "Del";
	td.appendChild(btnEdit);
	td.appendChild(btnDel);
	btnDel.addEventListener(`click`, function (e) {
		onUpdate(index, data);
	})
	btnEdit.addEventListener(`click`, function (e) {
		FORM[1].value = obj.firstName;
		FORM[2].value = obj.lastName;
		FORM[3].value = obj.houseM;
		FORM[4].value = obj.houseS;
		onUpdate(index, data);
	})
	return td;
}


function renderTblBody(data) {
	const tbody = createElement("tbody")
	data.forEach(function (obj, index) {
		console(index)
		const tr = document.createElement("tr");
		for (const [key, value] of Object.entries(obj)) {
			if (key === "lastName" || key === "houseMPTS" || key === "houseSMPTS") {
				const td = document.createElement("td");
				td.textContent = value;
				tr.appendChild(td);
			}
		}
		const td = renderTblBtn(obj, index, data);
		tr.appendChild(td);
		tbody.appendChild(tr)
	});
	return tbody;
}

function renderTbl(data) {
	TBL.innerHTML = "";
	if (data.length !== 0) {
		const table = renderTblHeading();
		const tbody = renderTblBody(data);
		table.appendChild(tbody);
		TBL.appendChild(table);
	}

}

export { renderTbl };