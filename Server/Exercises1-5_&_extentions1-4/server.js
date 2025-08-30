const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function normalizeWord(word) {
  return word
    .toLowerCase()          // ignore case
    .replace(/[^a-z]/g, ""); // keep only letters a–z
}

// EXERCISE 1: Sanity check route
app.get("/sanity", (req, res) => {
  res.send("Server is up and running");
});

// EXERCISE 2: Word counter object
const wordCounter = {};

app.get("/word/:word", (req, res) => {
  const word = normalizeWord(req.params.word);
  const count = wordCounter[word] || 0;
  res.send({ count: count });
});

// EXERCISE 3: POST route to add word
app.post("/word", (req, res) => {
  const word = normalizeWord(req.body.word || "");

  if (!word) {
    return res.status(400).send({ error: "Please provide a word" });
  }

  if (wordCounter[word]) {
    wordCounter[word] += 1;
  } else {
    wordCounter[word] = 1;
  }

  res.send({
    text: `Added ${word}`,
    currentCount: wordCounter[word],
  });
});

// EXERCISE 4: POST receives one parameter: sentence
app.post("/sentence", (req, res) => {
  const sentence = req.body.sentence;
  if (!sentence) {
    return res.status(400).send({ error: "Please provide a sentence" });
  }

  const rawWords = sentence.split(" ");
  let numNewWords = 0;
  let numOldWords = 0;

  rawWords.forEach(rawWord => {
    const word = normalizeWord(rawWord);
    if (!word) return; // skip empty/invalid

    if (wordCounter[word]) {
      wordCounter[word] += 1;
      numOldWords++;
    } else {
      wordCounter[word] = 1;
      numNewWords++;
    }
  });

  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

// EXERCISE 5: DELETE route to remove a word
app.delete("/word/:word", (req, res) => {
  const word = normalizeWord(req.params.word);

  if (!wordCounter[word]) {
    // word not found
    return res.status(404).send({
      error: `The word "${word}" does not exist in the counter`
    });
  }

  // delete word
  delete wordCounter[word];

  res.status(200).send({
    message: `The word "${word}" was successfully deleted`
  });
});

// EXTENSION 2: Get most popular word
app.get("/most-popular", (req, res) => {
  // If no words yet
  if (Object.keys(wordCounter).length === 0) {
    return res.status(200).send({ text: null, count: 0 });
  }

  let mostPopular = null;
  let maxCount = 0;

  for (const [word, count] of Object.entries(wordCounter)) {
    if (count > maxCount) {
      mostPopular = word;
      maxCount = count;
    }
  }

  res.send({
    text: mostPopular,
    count: maxCount
  });
});

// EXTENSION 3: Get top 5 most popular words
app.get("/top-5", (req, res) => {
  if (Object.keys(wordCounter).length === 0) {
    return res.status(200).send({ ranking: [] });
  }

  // Convert object into array of [word, count]
  const sorted = Object.entries(wordCounter)
    .sort((a, b) => b[1] - a[1]) // sort by count descending
    .slice(0, 5); // take top 5

  // Format into required structure
  const ranking = sorted.map(([word, count]) => ({ [word]: count }));

  res.send({ ranking });
});

// EXTENSION 4: Get total count of all words
app.get("/total-count", (req, res) => {
  const total = Object.values(wordCounter).reduce((sum, count) => sum + count, 0);

  res.send({
    text: "Total count",
    count: total,
  });
});

// Server start
const port = 1337;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
