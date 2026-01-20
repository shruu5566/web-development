
// Even or Odd (User Input)
//
function checkEvenOdd() {
  let num = document.getElementById("numberInput").value;

  if (num === "") {
    showOutput("Please enter a number");
    return;
  }

  if (num % 2 === 0) {
    showOutput(num + " is Even");
  } else {
    showOutput(num + " is Odd");
  }
}


function findSquare() {
  let num = document.getElementById("squareInput").value;

  if (num === "") {
    showOutput("Please enter a number");
    return;
  }

  let result = num * num;
  showOutput("Square of " + num + " is " + result);
}



// Array Sum

function findArraySum() {
  let input = document.getElementById("arrayInput").value;

  if (input === "") {
    showOutput("Enter numbers like 1,2,3");
    return;
  }

  let numbers = input.split(","); // convert string to array
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }

  showOutput("Sum of array is " + sum);
}



// Common Output Function

function showOutput(message) {
  document.getElementById("output").innerText = message;
}
