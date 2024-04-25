document.getElementById("sortButton").addEventListener("click", sortNumber);

var evenNumbers = [];
var oddNumbers = [];

function sortNumber() {
  var numberInput = document.getElementById("numberInput").value;
  var evenList = document.getElementById("evenList");
  var oddList = document.getElementById("oddList");
  if (isNaN(numberInput)) {
    alert("Please enter a valid number!");
    return;
  }
  numberInput = parseInt(numberInput);
  if (numberInput % 2 === 0) {
    evenNumbers.push(numberInput);
    updateList(evenList, evenNumbers);
  } else {
    oddNumbers.push(numberInput);
    updateList(oddList, oddNumbers);
  }
}

function updateList(listElement, numbers) {
  listElement.innerHTML = "";
  numbers.forEach(function(number) {
    var listItem = document.createElement("li");
    listItem.textContent = number;
    listElement.appendChild(listItem);
  });
}
