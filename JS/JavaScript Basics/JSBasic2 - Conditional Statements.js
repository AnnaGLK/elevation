// Exercise 1

// Basic Age Check. Create variables for a person's age and use an if statement to check if they're old enough to vote (18 or older). Display an appropriate message.

let age = 20;
if (age >= 18) {
  console.log("old enough to vote");
  // return "old enough to vote"
} else {
  console.log("too young to vote");
  // return "too young to vote"
}

// Exercise 2

// Grade Classification. Create a variable for a test score (0-100) and use if-else if-else statements to assign and display a letter grade:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60

let score = 85;
if (score >= 90 && score <= 100) {
  console.log("It's A");
} else if (score >= 80 && score <= 89) {
  console.log("It's B");
} else if (score >= 70 && score <= 79) {
  console.log("It's C");
} else if (score >= 60 && score <= 69) {
  console.log("It's D");
} else if (score < 60) {
  console.log("It's F");
}

// Exercise 3

// Weather Decision Making. Create variables for temperature (in Celsius) and weather condition (sunny, rainy, cloudy). Use nested conditionals to decide what activity to recommend:
// If sunny and temp > 24°C: "Go to the beach"
// If sunny and temp 15-24°C: "Go for a walk"
// If sunny and temp < 15°C: "Stay inside and read"
// If rainy: "Watch a movie indoors"
// If cloudy and temp > 21°C: "Go hiking"
// If cloudy and temp <= 21°C: "Visit a museum"

let temperature = 20;
let weather = "sunny";

if (weather === "sunny" && temperature > 24) {
  console.log("Go to the beach");
} else if (weather === "sunny" && temperature >= 15 && temperature <= 24) {
  console.log("Go for a walk");
} else if (weather === "sunny" && temperature < 15) {
  console.log("Stay inside and read");
} else if (weather === "rainy") {
  console.log("Watch a movie indoors");
} else if (weather === "cloudy" && temperature > 21) {
  console.log("Go hiking");
} else if (weather === "cloudy" && temperature <= 21) {
  console.log("Visit a museum");
}

// Exercise 4

// Multiple Condition Validator. Create variables for username length, password length, and user age. Use logical operators (&&, ||, !) to check if a user can create an account:
// Username must be at least 5 characters
// Password must be at least 8 characters
// User must be 13 or older
// Display specific error messages for each failed condition or success message if all pass

let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
  console.log("Account successfully created!");
} else if (usernameLength < 5) {
  console.log("Username is too short!");
} else if (passwordLength < 8) {
  console.log("Password is too short!");
} else if (userAge < 13) {
  console.log("Sorry, you are too young.");
}

// Exercise 5:

// Complex Business Logic. Create variables for customer type (regular, premium, vip), purchase amount, and day of week. Calculate discount using nested conditionals and ternary operators:
// VIP customers: 20% discount always
// Premium customers: 15% on weekends, 10% on weekdays
// Regular customers: 10% if purchase > $100, 5% if purchase > $50, 0% otherwise
// Weekends are represented by day 6 (Saturday) or 0 (Sunday)

let customerType = "Premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

if(customerType === 'VIP'){
    console.log("20% OFF")
}
else if(customerType === 'Premium' && (dayOfWeek === 6 || dayOfWeek === 0) ){
    console.log("15% OFF")
}
else if(customerType === 'Premium' && dayOfWeek >= 1 && dayOfWeek < 6 ){
    console.log("10% OFF")
}
else if(customerType === 'Regular' && (purchaseAmount >= 100)){
    console.log("10% OFF")
}
else if(customerType === 'Premium' && purchaseAmount >= 50 && purchaseAmount < 100){
    console.log("5% OFF")
}
else{console.log("Sorry no discount!")}


// Exercise 6


// Leap Year Calculator. Create a variable for a year and determine if it's a leap year using conditional statements. A year is a leap year if:
// It's divisible by 4 AND
// If it's divisible by 100, then it must also be divisible by 400
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year+ ' is leap' )
}
else {console.log(year+ ' is not leap' )}
