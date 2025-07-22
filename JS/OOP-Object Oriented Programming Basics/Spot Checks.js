// Spot Check 1

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }

  giveBirth(name) {
    console.log("Boom. Birthed " + name);
    this.children.push(name);
  }
}

const cat = new Animal("Puss", 4);
const dog = new Animal("Boss", 4);
console.log(cat.name + " has " + cat.numLegs + " legs"); //prints "Puss has 4 legs"
console.log(dog.name); //prints "Puss has 4 legs"

// Spot Check 2

class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const man1 = new Human("John", 30, true);
const man2 = new Human("Jill", 25, false);
console.log(
  `${man1.name} is ${man1.age} and he is ${
    man1.isFriendly ? "friendly" : "not friendly"
  }`
);
console.log(
  `${man2.name} is ${man2.age} and she is ${
    man2.isFriendly ? "friendly" : "not friendly"
  }`
);

// Spot Check 3

cat.giveBirth("Dolly");
console.log(cat.children); // should print an array with 1 item: ["Dolly"]

// Spot Check 4,5

class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
  }

  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    const price = 30000;
    console.log("Made  " + Vehicle.carsSold * price + " dollars");
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set fuel(amount) {
    // if (amount < 0 || amount > 150) {
    //   return console.log("fuel must be between 0 and 150");
    // }
    if (amount > 150) {
      return console.log("Too much");
    }
    if (amount < 0) {
      return console.log("Not reasonable");
    }
    this._fuel = amount;
  }

  get fuel() {
    return this._fuel;
  }
}
Vehicle.carsSold = 0;

const car1 = new Vehicle(2, 4, 200);
const car2 = new Vehicle(4, 4, 220);
Vehicle.getInfo();
Vehicle.calculateMoney();
const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined
c.speed = 10;
console.log("speed = " + c.speed);
c.fuel = 20;
console.log("fuel = " + c.fuel);
c.fuel = 200;

