const TBL = document.getElementById("tab-data");

function renderTblHeading () {
	const table = document.createElement("table");
	const thead = document.createElement("thead");
	const tr = document.createElement("tr");
// const headingTextArr = ["Name","HouseHold","HouseSize","Footprint", "Actions"];
const headingTextArr = ["Name","Footprint"];
headingTextArr.forEach(function(text) {
	const th = document.createElement("th");
	th.textContent = text;
	tr.appendChild(th);
});
thead.appendChild(tr);
table.appendChild(thead);
return table
}

function renderTbl(data) {
TBL.innetHTML ="";
const table = renderTblHeading();	
const tbody = document.createElement("tbody");

// const trTextArr = ["Josiah",3, "large", 20,];
data.forEach(function(obj){
const tr = document.createElement("tr");
for (const [key, value] of Object.entries (obj)){
console.log(`key ${key} value ${value}`);
if (key === "lastName" || key === "houseMPTS" || key === "houseSMPTS"){
	const td = document .createElement("td");
	td.textContent = value;
	tr.appendChild(td);
	} 
}
tbody.appendChild(tr)
})

// const td =	document.createElement("td")
// const btnEdit = document.createElement("button");
// const btnDel = document.createElement("button");
// btnEdit.textContent = "Edit";
// btnDel.textContent = "Del";
// td.appendChild(btnEdit);
// td.appendChild(btnDel);
// tr.appendChild(td);
// tbody.appendChild(tr)
table.appendChild(tbody);
TBL.appendChild(table);
}

export{renderTbl};