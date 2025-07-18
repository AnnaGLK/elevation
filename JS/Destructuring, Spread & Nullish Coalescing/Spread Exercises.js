//  Spread Exercises
// The Factory Mistake
// In a factory there was a big mistake! an overlap has occurred in the packaging

// 🥦 🥬 🍗 🥩 🍖 🥒

// the factory is supposed to pack all the meat ingredients into one array and the vegetables into one

// This is how the arrays usually look like! 
// let meatArr = ["beef","chicken","rabbit"]
// let vegetableArr = ["carrots","potatoes","lettuce"]

// and currently it looks like this now!

// let meatArr = ["beef","chicken"]
// let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

// using the Spread operator , make sure all the ingredients are in the correct spot

let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr,vegetableArr[0]]
vegetableArr = [...vegetableArr.slice(1)]

console.log("Meat:", meatArr);        // ["beef", "chicken", "rabbit"]
console.log("Vegetables:", vegetableArr); // ["carrots", "potatoes", "lettuce"]






// The Torn Passport
// Ofri was about to board to the Europe, however she found out her passport was torn into two Objects

// var firstPiece = { id: 101, name: 'Ofri' }

// var seoncdPiece = { country: 'Israel'}
// Copy to clipboardErrorCopied
// You need to help her glue all her pieces togather into one new object

var firstPiece = { id: 101, name: 'Ofri' }

var secondPiece = { country: 'Israel'}

 var passport = {...firstPiece, ...secondPiece}

 console.log("Passport: ",passport);  