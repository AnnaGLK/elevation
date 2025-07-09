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
// It's perfect for iterating over elements in an array.
// It avoids manually dealing with index values like in a for loop.
// Makes the code more expressive when working with object arrays.

// Exercise 3

// Write some code that removes the post with an id of 2 from the posts array. Can't have any negative reviews of our product!

// Obviously, do not do posts.splice(1, 1) - you have to find the post to remove! (Of course, you will use splice - just not hard coded!)

const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];
// Find the index of the post with id 2
const remove = posts.findIndex((post) => post.id === 2);

// If found, remove it
if (remove !== -1) {
  posts.splice(remove, 1);
}

console.log(posts);

// Exercise 4

// You are given 2 as the ID of a post. Write some code that finds the comment with an ID of 3 (inside of a post with an ID of 2), and remove just that one comment.

const postId = 2;
const commentId = 3;

const posts2 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];
const post = posts2.find((p) => p.id === postId);

if (post) {
  //Find the index of the comment with id = 3
  const commentIndex = post.comments.findIndex(
    (comment) => comment.id === commentId
  );

  //Remove the comment if found
  if (commentIndex !== -1) {
    post.comments.splice(commentIndex, 1);
  }
}

console.log(posts2);

// Exercise 5

const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

for (const letter in dictionary) {
  console.log(`Words that begin with  ${letter}:`);
  
  for (const word of dictionary[letter]) {
    console.log(`    ${word}`);
  }
}
