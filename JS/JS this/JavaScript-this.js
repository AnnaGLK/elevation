// --------------------------------- Exercise 1

// Copy/paste the following code into some .js file. Fix the errors to make it work:

const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      //this.
      hungry = false;
      console.log("Im no longer hungry!");
    }
  },
};

person.feed(); //should log "I'm no longer hungry"

// ---------------------------------Exercise 2

// Fix the errors to make this work. Here there are two errors in this one.
const pump = function (amount) {
  this.liters += amount; //this.
  console.log("You put " + amount + " liters in " + this.name); //this.
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);

// --------------------------------- Exercise 3

// There are 2 errors to fix here:

const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 10, //  Initialize fuel
  fly: function () {
    if (this.fuel < 2) {
      //this.
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());

// --------------------------------- Exercise 4

// Create a method called stealCoins that takes a number parameter and decreases the tipJar's coins by that amount:

const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (x) {
    this.coinCount -= x;
  },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

// --------------------------------- Exercise 5
// Aside from the usual, this code also has 3 syntax errors. Fix everything:
const revealSecret = function () {
  return this.secret; //this.
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result); //+
};

const avi = {
  name: "Avi", //,
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis", //,
  secret: "I don't have secrets because I'm zen like that.",
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

// --------------------------------- Exercise 6

// Read over it, then complete the makeDrink method so that it:
// Only allows you make a drink if it's a drink in the drinkRequirements object. Otherwise log: "Sorry, we don't make "
// Reduces the beans count according to the drinkRequirements object and the given drinkType
// Logs "Sorry, we're all out of beans!" if there are not enough beans to make that drink

const coffeeShop = {
  beans: 40,
  money: 100, // initial money
  beanCost: 2, // cost per bean

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink(drinkType) {
    const drink = this.drinkRequirements[drinkType];
    
    if (!drink) {
      console.log(`Sorry, we don't make ${drinkType}`);
      return;
    }

    if (this.beans < drink.beanRequirement) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    this.beans -= drink.beanRequirement;
    console.log(`Here's your ${drinkType}!`);
  },

  buyBeans(numBeans) {
    const totalCost = numBeans * this.beanCost;

    if (this.money >= totalCost) {
      this.money -= totalCost;
      this.beans += numBeans;
      console.log(`Bought ${numBeans} beans for $${totalCost}.`);
    } else {
      console.log("Not enough money to buy beans.");
    }
  },

  buyDrink(drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log(`Sorry, we don't sell ${drinkType}`);
      return;
    }

    this.money += drink.price;
    this.makeDrink(drinkType);
  }
};



coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.makeDrink("doubleShot"); //out of beans
coffeeShop.buyBeans(20);
