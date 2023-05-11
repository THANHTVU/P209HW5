// define the object constructor
function MyObject(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

// Page 1: Data Entry
$("#page1-save-button").on("click", function () {
  var name = $("#name").val();
  var age = $("#age").val();
  var email = $("#email").val();

  // create new object
  var myObject = new MyObject(name, age, email);

  // initialize an array to hold our objects
  var myObjects = [];

  // add object to array
  myObjects.push(myObject);

  // store the array in local storage
  localStorage.setItem("myObjects", JSON.stringify(myObjects));
  $("#name").val("");
  $("#age").val("");
  $("#email").val("");
  alert("Data saved successfully!");
  $.mobile.changePage("#displaydata");
});

$(document).on("pagebeforeshow", "#displaydata", function () {
  // Page 2: Display Data
  // get array from local storage
  myObjects = JSON.parse(localStorage.getItem("myObjects"));
  console.log(myObjects);

  // check if array is null
  if (myObjects === null) {
    return;
  }

  // loop through objects in array
  for (var i = 0; i < myObjects.length; i++) {
    $("#table-body").append(
      "<tr><td>" +
        myObjects[i].name +
        "</td><td>" +
        myObjects[i].age +
        "</td><td>" +
        myObjects[i].email +
        "</td></tr>"
    );
  }
});
