// Exercise 1

//Write a function called isEven that accepts a number as a parameter and checks if the number is even or not. Return true if it is even or false if it is odd. Don't Google this one ;) Use modulo %

const isEven = function (num) {
  if (num % 2) {
    // console.log("it is odd");
    return false;
  } else {
    // console.log("it is even");
    return true;
  }
};

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true

// Exercise 2

// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.

function isEven2(num) {
  return num % 2 === 0;
}
function printOddNumbers(numbers) {
  for (let num of numbers) {
    if (!isEven2(num)) {
      console.log(num);
    }
  }
}
printOddNumbers([1, 2, 3, 4, 5, 6, 7]);

// Exercise 3

// Write a JavaScript function that accepts two parameters: one being an array of integers, and the other being a number. The function should return true or false depending on whether the number exists in the array.
// Hint: You should loop through the array, and for each item in the array, check if it equals the number that was passed.
// checkExists([1, 2, 3], 2) - should return true
// checkExists([1, 2, 3], 5) - should return false

function checkExists(arr, number) {
  for (let num1 of arr) {
    if (num1 === number) {
      return true;
    }
  }
  return false;
}

console.log(checkExists([1, 2, 3], 2)); // true
console.log(checkExists([1, 2, 3], 5)); // false



// Exercise 4

// Create an object called calculator.
// It should have two methods: add and subtract
// Both methods take two parameters, and should return the sum/difference of both numbers.

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))


// Exercise 5

// To complete the above you will need to create both the increaseByNameLength and makeRegal functions.
// You should be able to write the body of both functions in one line; there's no trick here - it's just practice.

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log("His Royal Highness, " + name + " has " + money + " gold coins")
}

function increaseByNameLength(c,d){
    return c * d.length;
}

function makeRegal(e){
    return e.toUpperCase();
}



turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


// Exercise 6
// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 153 = 1³ + 5³ + 3³ (1 + 125 + 27 = 153).

// Print all 3-digit Armstrong numbers.
for (let num = 100; num <= 999; num++) {
  const digits = num.toString().split('').map(Number); // split number into digits
  const power = digits.length; // 3 for all these
  const sum = digits.reduce((total, digit) => total + Math.pow(digit, power), 0);

  if (sum === num) {
    console.log(num);
  }
}
