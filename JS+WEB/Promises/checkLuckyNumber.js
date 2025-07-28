function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else {
        resolve("Not lucky");
      }
    }, 800);
  });
}

checkLuckyNumber(14)
  .then(console.log) // "Lucky!"
  .catch(console.error);

checkLuckyNumber(10)
  .then(console.log) // "Not lucky"
  .catch(console.error);

checkLuckyNumber(0)
.then(console.log)
.catch(console.error); // Error: Invalid number
