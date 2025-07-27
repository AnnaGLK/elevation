function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.floor(Math.random() * 10);
      if (failed <= 1) reject("Dicefell of the table");
      else {
        const roll = Math.floor(Math.random() * 6) + 1;
        resolve(roll);
      }
    }, 500);
  });
}
rollDice()
  .then((data) => console.log("You rolled:",data))
  .catch((err) => console.log("Error:",err));
