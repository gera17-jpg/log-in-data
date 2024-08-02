/*let names = [ ];
let dateTime = new Date();

function addName(){
    let lastname= document.getElementsByClassName("last")[0].value;
    let firstname= document.getElementsByClassName("first")
    [0].value;
    let wholename = lastname+" "+firstname;
    let display = document.querySelector(".displayContainer");
    names.push(wholename);
    console.log(names);
}

function displayName(){
    const tbl= document.createElement("table");
    tbl.style.border = "2";
    const tblHead= document.createElement("thead");
    const tblBody= document.createElement("tbody");

    for(let i=0; i<names.length; i++){
        const row= document.createElement("tr");

        for(let j=0;j<names[i].length;j++){
            const cell =i === 0 ? document.createElement("th") : document.createElement("td");
            const cellText = document.createTextNode(names[i][j]);
            cell.appendChild(names);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    const container = document.getElementById("submit");
    container.appendChild(table);
}

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector(".submit").addEventListener("click",addName);
    document.querySelector(".submit").addEventListener("click",displayName);
}) */

function User(firstname,lastname,age,date){
    this.fname= firstname;
    this.lname = lastname;
    this.age = age;
    this.date = date.toDateString();
    this.displayName = function(){
        return `Name : ${fname} ${lname} Age: ${age} Date: ${date}`;
    }
}
