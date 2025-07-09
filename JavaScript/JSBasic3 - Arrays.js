// //Here is an array of numbers:

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// Copy to clipboardErrorCopied
// Now follow these instructions:

// delete the second and third elements
// change the fourth element to 1
// delete the last 4 elements
// add another element 0 to the beginning of the array
// print the modified array

const numbers = [1,2,3,4,5,6,7,8,9,10]

const clipboardErrorCopied = numbers;  // Copy to clipboardErrorCopied

clipboardErrorCopied.splice( 1, 2)  // delete the second and third elements

clipboardErrorCopied.splice( 3, 1, 1) // change the fourth element to 1

clipboardErrorCopied.splice( clipboardErrorCopied.length-4, 4) // delete the last 4 elements

clipboardErrorCopied.splice( 0, 0, 0)  // add another element 0 to the beginning of the array


console.log(clipboardErrorCopied)