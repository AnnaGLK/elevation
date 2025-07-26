const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initialize the balance
let balance = 100; // Starting balance

// Function to display the menu
function displayMenu() {
  console.log("=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
}

// Function to handle menu choice
function handleMenuChoice(choice) {
  switch (choice) {
    case '1':
      console.log(`Your current balance is: $${balance}`);
      break;
    case '2':
      handleDeposit();
      break;
    case '3':
      handleWithdraw();
      break;
    case '4':
      console.log("Thank you for using the Banking System. Goodbye!");
      rl.close();
      return;
    default:
      console.log("Invalid choice, please select between 1-4.");
      break;
  }
  promptMenu(); // Keep asking for menu choice after each action
}

// Function to handle deposit
function handleDeposit() {
  rl.question("Enter amount to deposit: $", (amount) => {
    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Please enter a positive number.");
    } else {
      balance += depositAmount;
      console.log(`You have deposited $${depositAmount}. New balance: $${balance}`);
    }
    promptMenu(); // Return to menu after handling deposit
  });
}

// Function to handle withdrawal
function handleWithdraw() {
  rl.question("Enter amount to withdraw: $", (amount) => {
    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      console.log("Please enter a positive number.");
    } else if (withdrawAmount > balance) {
      console.log("Insufficient funds.");
    } else {
      balance -= withdrawAmount;
      console.log(`You have withdrawn $${withdrawAmount}. New balance: $${balance}`);
    }
    promptMenu(); // Return to menu after handling withdrawal
  });
}

// Function to prompt the user for a menu choice
function promptMenu() {
  displayMenu();
  rl.question("Choose option (1-4): ", (choice) => {
    handleMenuChoice(choice);
  });
}

// Start the banking system by prompting the menu
promptMenu();
