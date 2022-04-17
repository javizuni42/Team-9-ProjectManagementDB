let arr = ["Monte Falterona", "Monte Falco", "Casentinesi", "kilimanjaro"]
let arr2 = ["Falterona", "Falco"]


let mountains = [
  { Sunday: null, Monday: null, Tuesday: null, Wednesday: arr2,
    Thursday: arr, Friday: arr, Saturday: arr2 },
  { Sunday: arr2, Monday: arr, Tuesday: arr, Wednesday: null,
    Thursday: arr2, Friday: null, Saturday: arr },
  { Sunday: arr2, Monday: null, Tuesday: null, Wednesday: arr2,
    Thursday: arr, Friday: arr, Saturday: null },
  { Sunday: null, Monday: arr2, Tuesday: arr, Wednesday: null,
    Thursday: arr, Friday: null, Saturday: arr },
  { Sunday: arr2, Monday: null, Tuesday: arr, Wednesday: arr,
    Thursday: arr2, Friday: null, Saturday: null }
];

let travel = 3// Fix me: 6 week months don't fit

Date.monthDays= function(){
    const d1 = new Date();
    let d= new Date(d1.getFullYear(), d1.getMonth()+1+travel, 0);
    return d.getDate();
}

Date.start= function(){
    const d = new Date();
    let d1= new Date(d.getFullYear(), d.getMonth()+travel, 0);
    let day = d1.getDay()+1
    if (day === 7) day = 0;
    return day;
}

let date_start = Date.start()
let date_end = Date.monthDays()
console.log(date_start, date_end)


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }}

function test(x){
  console.log(x)
}

function makeEvents(array, date) {
    let list = document.createElement('table');
    list.className = "events";

    let row = list.insertRow();
    let cell = row.insertCell();
    cell.appendChild(document.createTextNode(date));
    cell.className = "date"

    for (key in array) {
      if (key != null) {
      let row = list.insertRow();
      let cell = row.insertCell();
        cell.appendChild(document.createTextNode(array[key]));

        cell.onclick = function () {cell.style = "background: orange"}

      }}
    return list;
}


function generateTable(table, data) {
  let date = -date_start
  for (let element of data) {
    let row = table.insertRow();

    for (key in element) {
      date += 1
      let cell = row.insertCell();

      if (date>0 && date <= date_end) cell.appendChild(makeEvents(element[key], date));
    }}}


let table = document.querySelector("table.calendar");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);
