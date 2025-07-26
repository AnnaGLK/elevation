const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Object to store user information
let userInfo = {};

// Function to ask questions and collect user input
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function collectUserInfo() {
  // Ask for each piece of information and store it in the userInfo object
  userInfo.name = await askQuestion("Enter your name: ");
  userInfo.email = await askQuestion("Enter your email: ");
  userInfo.age = await askQuestion("Enter your age: ");
  userInfo.favoriteColor = await askQuestion("Enter your favorite color: ");

  // Close the readline interface
  rl.close();

  // Display the summary of the user's input
  console.log("\nRegistration Summary:");
  console.log(`Name: ${userInfo.name}`);
  console.log(`Email: ${userInfo.email}`);
  console.log(`Age: ${userInfo.age}`);
  console.log(`Favorite Color: ${userInfo.favoriteColor}`);
}

// Start the collection process
collectUserInfo();
