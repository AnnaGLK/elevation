// Importing prompt-sync
const prompt = require('prompt-sync')();

// Array to store questions and answers
const quiz = [
  {
    question: "What is the capital of France?",
    answer: "paris"
  },
  {
    question: "What is 5 + 3?",
    answer: "8"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "shakespeare"
  }
];

// Variable to track the score
let score = 0;

// Function to ask questions and check answers
function askQuestion(q, correctAnswer) {
  const userAnswer = prompt(q).toLowerCase().trim();
  if (userAnswer === correctAnswer.toLowerCase()) {
    score++;
    console.log("Correct!\n");
  } else {
    console.log(`Wrong! The correct answer is: ${correctAnswer}\n`);
  }
}

// Loop through the questions and ask them
quiz.forEach(q => askQuestion(q.question, q.answer));

// Display final score
console.log(`Your final score is: ${score}/${quiz.length}`);