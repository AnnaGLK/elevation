let currentBalance = 100;

function getBalance() {
  return currentBalance;
}

function deposit(amount) {
  //input validation
  currentBalance += amount;

  // return value success/error;
}
function withdraw(amount) {
  // input validation
  // amount is a number
  //amount is positive(not negetive)
  //currentBalabce - amount>0
// console.debug()
  currentBalance -= amount;

  //return value: {success: true/false, message:""}
}
function isValidAmount(amount) {}

modul.exports = { getBalance, deposit, withdraw };
