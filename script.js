var table = document.querySelector("#table");
var selectedCells = table.getElementsByClassName("selected");

//crate an array to store the two most recent cells
var arr = [];


table.addEventListener("click", function (e) {
  var td = e.target;
  arr.push(td);
  
  //if length of array gets more than 2, change the class (get color back to blue) of 0th index and pop (shift) it from the array 
  if (arr.length > 2) {
    arr[0].className = "";
    arr.shift();
  }


  //change the colors of all the cells present in the array to red
  for (let i = 0; i < arr.length; i++) {
    arr[i].className = "selected";
  }
});
