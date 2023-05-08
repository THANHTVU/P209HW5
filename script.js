// define the object constructor
function MyObject(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

// function to handle form submission
function saveData() {
  // get form values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;

  // create new object
  var myObject = new MyObject(name, age, email);

  // initialize an array to hold our objects
  var myObjects = [];

  // add object to array
  myObjects.push(myObject);

  // store the array in local storage
  localStorage.setItem("myObjects", JSON.stringify(myObjects));

  // clear form values
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";

  // redirect to display page
  window.location.href = "displaypage.html";
}

// function to display objects in table
function displayObjects() {
  var table = document.getElementById("table-body");

  // get array from local storage
  myObjects = JSON.parse(localStorage.getItem("myObjects"));

  // check if array is null
  if (myObjects === null) {
    return;
  }

  // loop through objects in array
  for (var i = 0; i < myObjects.length; i++) {
    // create new row
    var row = table.insertRow();

    // insert cells with object data
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = myObjects[i].name;

    var ageCell = row.insertCell(1);
    ageCell.innerHTML = myObjects[i].age;

    var emailCell = row.insertCell(2);
    emailCell.innerHTML = myObjects[i].email;
  }
}

// call displayObjects function on load of display page
if (window.location.href.includes("displaypage.html")) {
  displayObjects();
}
