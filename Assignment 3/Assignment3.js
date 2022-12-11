/*
Question 1
Given the following array and implement the table dynamically
*/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

var tabl = document.getElementById("tbl");
var tHead = document.createElement("thead");
var tBody = document.createElement("tbody");

tabl.appendChild(tHead);
tabl.appendChild(tBody);

var fieldTitles = tableInfo.tableHeader;
var fieldContent = tableInfo.tableContent;

var tHeadRow = document.createElement("tr");
tHead.appendChild(tHeadRow);

//create table head
fieldTitles.forEach(function (tabledata) {
  var tCol = document.createElement("th");
  tCol.innerHTML = tabledata;
  tHeadRow.appendChild(tCol);
});
for (var i = 0; i < fieldContent.length; i++) {
  var tRow = document.createElement("tr");
  tabl.appendChild(tRow);

  //create table content
  fieldTitles.forEach(function (tabledata) {
    var tCol = document.createElement("td");
    tCol.innerHTML = fieldContent[i][tabledata];
    tRow.appendChild(tCol);
  });
}

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//unordered list
const data = document.getElementById("List");
list.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  data.appendChild(li);
});

//ordered list
const data2 = document.getElementById("List2");
list.forEach((item) => {
  let li2 = document.createElement("li");
  li2.innerText = item;
  data2.appendChild(li2);
});

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

var Menu = document.getElementById("Dropdown");

//Create the array list of "content" in "dropDownList"
const content = dropDownList.map((element) => {
  return element.content;
});

//Create & append list
var selectList = document.createElement("select");
Menu.appendChild(selectList);

//Create & append option
for (var i = 0; i < content.length; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", content[i]);
  option.text = content[i];
  selectList.appendChild(option);
}
