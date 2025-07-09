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


// Exercise 2

// Based off the people array from before, write a loop that prints out "Ashley is 23 years old", "Donovan is 47 years old", etc.

// Again, consider which loop is most appropriate.

// Note that this is different from Exercise 1 ;)

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}


// Exercise 3

// Write some code that removes the post with an id of 2 from the posts array. Can't have any negative reviews of our product!

// Obviously, do not do posts.splice(1, 1) - you have to find the post to remove! (Of course, you will use splice - just not hard coded!)

const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]