// For each section, before testing the code, determine the following

// What will console log?
// Will there be an error?
// Why?
// Will something be undefined?
// Why?
// To what scope does each variable belong?
// Global or local? If local, to which specifically?


// -----------------------Section 1

const run = true //Global 

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")  // prints: running (8 times)
    }
    console.log("Finished running " + distance + " miles") // prints: Finished running 8 miles
}

// console.log("Damn, you see this gal? She ran " + distance + " miles") //distance is not defined,  it's Local for if





// -----------------------Section 2

if (13 == "space") {
    let cowSound = "moo"
}
else {
    // console.log("Cow says " + cowSound)   // cowSound is not defined, it's local for if
}




//  -----------------------Section 3
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order    //prints: "special (name of order)"
        console.log("Served a " + specialOrder) //prints: "served a special (name of order)"
    }

    console.log("Finished serving all the orders: " + orders) //prints: "Finished serving all the orders: (arr of orders)"
}
const allOrders = ["fish", "lettuce plate", "curious cheese"] //Global 
serveOrders(allOrders)//prints: "Finished serving all the orders: fish,lettuce plate,curious cheese"



//  -----------------------Section 4

const pot = "red pot with earth in it" // string

const getSeed = function () {
    const seed = "brown seed"   // seed is local in getSeed
    return seed //return seed to get it after
}

const plant = function () {
    getSeed()                  // seed is in plant now with its function
    // console.log("Planting the " + seed + " inside a " + pot) //seed is undefined 
    console.log("Planting the " +  getSeed()  + " inside a " + pot) //this one should work now
}

plant() //prints:"Planting the brown seed inside a red pot with earth in it"


//  -----------------------Section 5


const doesUserExist = function (name) {
    const found = false // added for code running
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }] // users is local in function
    for (let u of users) {
        if (u.name == name) { //if name exist in user.name
            const found = true // found is local in if
            return found // added for code running, return true
        } 
    }
    return found //boolean, works only after line 77 added
}

const userExists = doesUserExist("Luius")//looks for "Lucius", and gets true if found
if (userExists) {//if true
    console.log("We found the ragamuffin!")
}
else {//if false
    console.log("No idea where this person is.")
}


//  -----------------------Section 6

// const isEnough = false //const cannot be reassigned after its initial value.
let isEnough = false;

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true  // illegal reassignment with const
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}