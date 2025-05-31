function printNumbers() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += i + "<br>";
  }
  document.getElementById("output").innerHTML = output;
}

function addNumbers() {
  var number1 = parseFloat(document.getElementById("num1").value);
  var number2 = parseFloat(document.getElementById("num2").value);
  var sum = number1 + number2;
  document.getElementById("result").textContent = sum;
}

function findLargest() {
  // Get input values and convert them to numbers
  const a = parseFloat(document.getElementById("large1").value);
  const b = parseFloat(document.getElementById("large2").value);
  const c = parseFloat(document.getElementById("large3").value);

  // Put numbers into an array
  const numbers = [a, b, c];

  // Find the largest using Math.max and spread operator
  const largest1 = Math.max(...numbers);
  let index = numbers.indexOf(largest1);
  if (index > -1) {
    // only splice array when item is found
    numbers.splice(index, 1); // 2nd parameter means remove one item only
  }
  const largest2 = Math.max(...numbers);
  index = numbers.indexOf(largest2);
  if (index > -1) {
    // only splice array when item is found
    numbers.splice(index, 1); // 2nd parameter means remove one item only
  }
  const largest3 = Math.max(...numbers);
  var largest = largest1 + ", " + largest2 + ", " + largest3;
  // Display result
  document.getElementById("largestNumber").textContent = largest;
}

function reverseString() {
  const str = document.getElementById("inputString").value;
  const reversed = str.split("").reverse().join("");
  document.getElementById("resultStruingrReverse").textContent = reversed;
}

function findEvenOdd() {
  const input = document.getElementById("arrayInputOddEven").value;

  // Convert the input string to an array of numbers
  const numbers = input
    .split(",")
    .map((num) => parseInt(num.trim()))
    .filter((num) => !isNaN(num));

  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);

  // Display results
  document.getElementById("evenResult").textContent =
    evenNumbers.join(", ") || "None";
  document.getElementById("oddResult").textContent =
    oddNumbers.join(", ") || "None";
}

function calculateFactorial() {
  const num = parseInt(document.getElementById("factNumInput").value);
  let resultText = "";

  if (isNaN(num) || num < 0) {
    resultText = "Please enter a non-negative integer.";
  } else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    resultText = `${num}! = ${factorial}`;
  }

  document.getElementById("resultFactorial").textContent = resultText;
}

function generateTable() {
  const num = parseInt(document.getElementById("numInputMultipli").value);
  let output = "";

  if (isNaN(num)) {
    output = "Please enter a valid number.";
  } else {
    for (let i = 1; i <= 10; i++) {
      output += `${num} x ${i} = ${num * i}\n`;
    }
  }

  document.getElementById("resultMultipli").textContent = output;
}

function checkPalindrome() {
  const input = document.getElementById("textInputPalindro").value;
  const cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // remove non-alphanumeric and lowercase
  const reversed = cleanInput.split("").reverse().join("");

  if (!input) {
    document.getElementById("resultPalindro").textContent =
      "Please enter a string.";
  } else if (cleanInput === reversed) {
    document.getElementById(
      "resultPalindro"
    ).textContent = `"${input}" is a palindrome.`;
  } else {
    document.getElementById(
      "resultPalindro"
    ).textContent = `"${input}" is not a palindrome.`;
  }
}

function countVowels() {
  const input = document.getElementById("textInputVowel").value;
  const vowels = input.match(/[aeiou]/gi); // case-insensitive match for a, e, i, o, u
  const count = vowels ? vowels.length : 0;

  document.getElementById("resultVowel").textContent = count;
}

function findSquare() {
  const num = parseFloat(document.getElementById("numInputSquare").value);

  if (isNaN(num)) {
    document.getElementById("resultSquare").textContent =
      "Please enter a valid number.";
  } else {
    const square = num * num;
    document.getElementById("resultSquare").textContent = `${num}² = ${square}`;
  }
}

/*=============================================
=            find 2nd Largest number            =
=============================================*/

function findLargest() {
  const num1 = parseFloat(document.getElementById("numInput1st").value);
  const num2 = parseFloat(document.getElementById("numInput2nd").value);
  const num3 = parseFloat(document.getElementById("numInput3rd").value);
  const num4 = parseFloat(document.getElementById("numInput4th").value);

  const numbers = [num1, num2, num3, num4];
  const secondLargest = findSecondLargest(numbers);

  // Display result in HTML
  document.getElementById("secondLargest").innerText =
    "Second largest number is: " + secondLargest;
}

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  if (secondLargest === -Infinity) {
    return "No second largest value (all elements may be the same).";
  }

  return secondLargest;
}

// Example usage
//const numbers = [10, 20, 5, 30, 30];

/*=====  End of find 2nd Largest number  ======*/
