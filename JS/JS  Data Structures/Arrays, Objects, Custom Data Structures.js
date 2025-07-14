// Exercise 1

// Create a data structure called UniqueArray
// Effectively, this data structure works like a normal array (for the most part), but:
// It only works for primitive types
// It only allows you to add unique items to it

class UniqueArray {
  constructor() {
    this.items = [];            // Stores values in order
    this.itemSet = new Set();   // Tracks unique values
  }
  
  add(item) {
    // Only add primitive types (string, number, boolean, null, undefined, symbol)
    if (item !== null && typeof item === 'object') {
      console.log('Only primitive types are allowed.');
      return;
    }

    if (!this.itemSet.has(item)) {
      this.items.push(item);
      this.itemSet.add(item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  exists(item) {
    console.log(this.itemSet.has(item));
    return this.itemSet.has(item);
  }

  get(index) {
    if (index < 0 || index >= this.items.length) return -1;
    return this.items[index];
  }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"



// Exercise 2
// Currently your UniqueArray only knows to handle primitive types.

// Modify it so that it can work with any type of data.

class UniqueArray2 {
  constructor() {
    this.items = [];
    this.itemMap = new Map(); // key: serialized item, value: original item
  }

  // Custom serialization to use as a key
  _serialize(item) {
    if (item === null) return 'null';
    if (typeof item === 'undefined') return 'undefined';
    if (typeof item === 'function') return item.toString();
    if (typeof item === 'symbol') return item.toString();
    try {
      return typeof item + ':' + JSON.stringify(item);
    } catch {
      return typeof item + ':' + item.toString();
    }
  }

  add(item) {
    const key = this._serialize(item);

    if (!this.itemMap.has(key)) {
      this.items.push(item);
      this.itemMap.set(key, item);
    }
  }

  showAll() {
    console.log(this.items);
  }

  exists(item) {
    const key = this._serialize(item);
    return this.itemMap.has(key);
  }

  get(index) {
    if (index < 0 || index >= this.items.length) return -1;
    return this.items[index];
  }
}

const uniqueStuff2 = new UniqueArray2();

uniqueStuff2.add("toy");
uniqueStuff2.add("toy");
uniqueStuff2.add({ x: 1 });
uniqueStuff2.add({ x: 1 }); // same structure as above, should not be added
uniqueStuff2.add({ y: 2 });
uniqueStuff2.add([1, 2, 3]);
uniqueStuff2.add([1, 2, 3]); // duplicate array, should not be added

uniqueStuff2.showAll();
// Output: [ "toy", { x: 1 }, { y: 2 }, [1, 2, 3] ]

console.log(uniqueStuff2.exists("toy"));         // true
console.log(uniqueStuff2.exists({ x: 1 }));      // true
console.log(uniqueStuff2.exists([1, 2, 3]));      // true
console.log(uniqueStuff2.exists({ y: 999 }));    // false

console.log(uniqueStuff2.get(2));                // { y: 2 }
console.log(uniqueStuff2.get(10));               // -1