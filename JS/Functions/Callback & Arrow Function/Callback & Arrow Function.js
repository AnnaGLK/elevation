// Exercise 1 - Callbacks

// Write a function pushPull that takes one argument - a function - and invokes that function:

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(action) {
  action();
}



pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"



// Exercise 2 - Callbacks

// You can get the current date/time in Javascript by writing: const time = new Date().
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.



const getTime = function(callback) {
  const time = new Date();
  callback(time);
}
const returnTime = function (time) {
  console.log('The current time is: ' + time)
}


getTime(returnTime)



// Exercise 3 - Callbacks
// Given the following code, what error do you get? Write the missing part to make the code work:
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
const logData = (data) => console.log(data);// const logData = function(data) {
//   console.log(data);
// };

displayData(console.error, logData, "I like to party")   // logData is not defined


// Exercise 4 - Arrow Functions
// Create an arrow function that receives three parameters and returns their sum - it should be one line.

const sum = (x,y,z) => console.log(x+y+z)
sum(2,6,4);


// Exercise 5 - Arrow Functions
// Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:
const capitalize = (str) => console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia


// Exercise 6 - Arrow functions
// Create a one-line arrow function called commentOnWeather that takes one parameter, temp. 
// It should call determineWeather and return the concatenation of "It's " and determineWeather's output:
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => console.log(`It's `+ determineWeather(temp))

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"