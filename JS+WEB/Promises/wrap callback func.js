function oldAsyncFunction(callback) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(null, "Success");
    } else {
      callback(new Error("Failed"));
    }
  }, 1000);
}

function wrapped() {
  return new Promise((resolve, reject) => {
    oldAsyncFunction((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

wrapped()
.then(console.log)
.catch(console.error)