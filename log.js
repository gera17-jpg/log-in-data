let records = [];

function addName() {
    let lastname = document.getElementsByClassName("last")[0].value;
    let firstname = document.getElementsByClassName("first")[0].value;
    let datetime = new Date().toLocaleString();
    let record = { name: lastname + " " + firstname, datetime: datetime };
    records.push(record);
    console.log(records);
}

function displayName() {
    const tbl = document.createElement("table");
    tbl.style.border = "2px solid black"; // Corrected border style
    const tblHead = document.createElement("thead");
    const tblBody = document.createElement("tbody");

    // Creating the header row
    const headerRow = document.createElement("tr");
    const headerName = document.createElement("th");
    headerName.appendChild(document.createTextNode("Name"));
    const headerDatetime = document.createElement("th");
    headerDatetime.appendChild(document.createTextNode("Date & Time"));
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerDatetime);
    tblHead.appendChild(headerRow);
    tbl.appendChild(tblHead);

    // Creating the body rows
    for (let i = 0; i < records.length; i++) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const nameText = document.createTextNode(records[i].name);
        nameCell.appendChild(nameText);
        row.appendChild(nameCell);

        const datetimeCell = document.createElement("td");
        const datetimeText = document.createTextNode(records[i].datetime);
        datetimeCell.appendChild(datetimeText);
        row.appendChild(datetimeCell);

        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);

    const container = document.querySelector(".displayContainer");
    container.innerHTML = ""; // Clear previous table before adding new one
    container.appendChild(tbl);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#submit").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        addName();
        displayName();
    });
});
