// Exercise 1

// Create two 'people' objects, p1 and p2. Each should have the following properties:

// name
// age
// city
// Write some code with the following logic:

// If the people are the same age
// If the people live in the same city
// Print "Jill wanted to date Robert"
// If they're not in the same city
// Print "Jill wanted to date Robert, but couldn't"
// Note that the only data should be in the objects - in your if conditions, make sure to use the objects' properties (keys).

let p1 = {
  name: "Mariah",
  age: 22,
  city: "NY",
};
let p2 = {
  name: "Josef",
  age: 40,
  city: "TA",
};

if (p1.age === p2.age && p1.city === p2.city) {
  // If the people are the same age && If the people live in the same city
  console.log(`${p1.name} wanted to date ${p2.name}`);
} else if (p1.age === p2.age && p1.city !== p2.city) {
  // If they're not in the same city
  console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
} else {
  console.log(`${p1.name} don't want to ${p2.name}`);
}

// Exercise 2

// Create an object called library that has a books key
// The value of books should be an array of book objects
// Each book should have a title and author key
// Create 5 different books

const library = {
  books: [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
  ],
};

console.log(library);

// Exercise 3

// Run the code once with const name = 'Bob'; and then with const name = 'Ted';

// The above code is a reservation system where people can claim their reservations when they arrive.

// If the reservation exists and is unclaimed, welcome the user (console log)
// If the reservation exists and is already claimed, inform the user about the situation
// If there is no reservation, tell the user there is nothing under their name
// Use 'Bob' and 'Ted' to test your code:

// When you test Bob, it should say "Welcome, Bob"
// When you test Ted, it should say "Hmm, someone already claimed this reservation"
// If you try a different name, it should say "You have no reservation"

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const user_name = "Bob"; //'Bob' or 'Ted';

if (reservations[user_name]) {
  if (!reservations[user_name].claimed) {
    console.log(`Welcome, ${user_name}.`);
  } else {
    console.log(
      `Sorry, ${user_name}, someone already claimed this reservation.`
    );
  }
} else {
  console.log(`You have no reservation, ${user_name}.`);
}

// Exercise 3.1
// It so happens that our restaurant has a bunch of open tables.

// Therefore, if someone doesn't have a reservation, add it to the reservations object and set "claimed" to true for that person.
const reservations2 = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const user_name2 = "Tom";

if (reservations2[user_name2]) {
  if (!reservations2[user_name2].claimed) {
    console.log(`Welcome, ${user_name2}.`);
  } else {
    console.log(
      `Sorry, ${user_name2}, someone already claimed this reservation.`
    );
  }
} else {
  user_name2.claimed = true;
  reservations2[user_name2] = { claimed: true };

  console.log(`Hello, ${user_name2}. We've added a reservation for you.`);
}

// Exercise 3.2

// As of now, 'Ted' and 'ted' are two different names in our system. Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same.

const reservations3 = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const inputName = "TeD";
const normalizedInput = inputName.toLowerCase();

// Create a map of normalized names pointing to original keys
const normalizedReservations = {};
for (const key in reservations3) {
  normalizedReservations[key.toLowerCase()] = key;
}

if (normalizedReservations[normalizedInput]) {
  const actualName = normalizedReservations[normalizedInput];
  if (!reservations3[actualName].claimed) {
    console.log(`Welcome, ${actualName}.`);
    reservations3[actualName].claimed = true;
  } else {
    console.log(
      `Sorry, ${actualName}, someone already claimed this reservation.`
    );
  }
} else {
  // Add a new reservation with the original input name
  reservations3[inputName] = { claimed: true };
  console.log(`Welcome, ${inputName}. We've added a reservation for you.`);
}

console.log(reservations3);



// Exercise 4

// You're going to console log these four options conditionally, based on the values you selected for hasOven and works:

// hasOven: true and works: true
// Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.
// hasOven: false and works: true
// Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.
// hasOven: true and works: false
// Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
// hasOven: false and works: false
// Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.


const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: false, // set to true or false
  fridge: {
    price: 500,
    works: false, // set to true or false
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};
const hasOven = kitchen.hasOven;
const fridge = kitchen.fridge;
const works = fridge.works;
const radish = fridge.items.find(item => item.name === "radish");
const daysExpired = date - radish.expiryDate;
const owner = kitchen.owner;
const repairCost = fridge.price / 2;

let message = `${owner}'s ${radish.name} expired ${daysExpired} day${daysExpired !== 1 ? 's' : ''} ago. `;

if (works) {
  message += "Weird, considering her fridge works. ";
} else {
  message += "Probably because her fridge doesn't work. ";
}

if (hasOven) {
  message += `Luckily, she has an oven to cook the ${radish.name} in.`;
} else {
  message += `Too bad she doesn't have an oven to cook the ${radish.name} in.`;
}

if (!works) {
  message += ` And she'll have to pay ${repairCost} to fix the fridge.`;
}

console.log(message);
