// Get the arguments from command line input
const args = process.argv.slice(2);

// Ensure that we have exactly three arguments
if (args.length !== 3) {
  console.log("Please provide exactly three arguments: number1, operation (+, -, *, /), number2");
  process.exit(1); // Exit with an error status
}

const num1 = parseFloat(args[0]); // First number
const operator = args[1]; // Operation (+, -, *, /)
const num2 = parseFloat(args[2]); // Second number

// Check if the inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log("Both number1 and number2 should be valid numbers.");
  process.exit(1);
}

// Perform the calculation based on the operator
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`Invalid operation: ${operator}. Please use +, -, *, or /.`);
    process.exit(1);
}

// Display the result
console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
