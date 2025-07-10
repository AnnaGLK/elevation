// Exercise 2

// Write a program that:

// Counts each unique word in the story
// Ignores case (make everything lowercase)
// Removes special characters
// Stores the result in the wordCounts object

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}


const lowercase = function (str) {
  // let lowercasedStr = "";
  // lowercasedStr += str.toLowerCase(); // lowercased
  // return lowercasedStr;
  return  str.toLowerCase();
};
// console.log(lowercase(story));
let cleanStory = lowercase(story);

for (let char of specialChars) {
  cleanStory = cleanStory.split(char).join('');
}
console.log(cleanStory);

const words = cleanStory.split(/\s+/); // split by any whitespace

for (let word of words) {    // Count words
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
}

console.log(wordCounts);