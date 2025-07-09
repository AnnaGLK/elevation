// Exercise 1

// Write a loop that populates (adds to) the people array with objects, that have a name and age, like this:

// {name: "Ashley", age: 23}
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}

console.log(people);