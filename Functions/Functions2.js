// Exercise 1

// Finish writing the helper functions (getAge, capitalizeProfession, capitalizeCatchphrase, etc.).
// Write a loop that calls getSummary for each person in people_info.

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase()      // first letter, capitalized
  capitalizedStr += str.slice(1)              // rest of the string
  return capitalizedStr
}
console.log(capitalize("hello"))

const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
  summary += //call function for profession
  summary += //call function for country + city
  summary += //call function for catchphrase
  return summary
}
console.log(getSummary(people_info[0]))


function getAge(arr){
  for (let age of arr) {
   console.log (age);
  }
}