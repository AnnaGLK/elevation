// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of items) {
        if (!inventory[item] || inventory[item].stock <= 0) {
          reject(new Error(`${item} is out of stock`));
          return;
        }
      }
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let subtotal = 0;
      for (let item of items) {
        const product = inventory[item];
        if (!product || product.stock <= 0) {
          reject(new Error(`${item} is out of stock`));
          return;
        }
        subtotal += product.price;
      }
      const tax = subtotal * 0.08;
      const total = subtotal + tax;
      const totalPrice = { subtotal, tax, total };
      resolve(totalPrice);
    }, 200);
  });
}

let transactionCounter = 1; // Unique counter across calls
function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.9; // 90% success rate
      if (!success) {
        reject(new Error(`payment failure`));
        return;
      }
      const transactionId = transactionCounter++;
      resolve({ transactionId, amount, status: "success" });
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of items) {
        const product = inventory[item];
        if (!product || product.stock <= 0) {
          reject(new Error(`${item} out of stock`));
          return;
        }
      }
      //  Reduce stock after confirming all are available
      for (let item of items) {
        inventory[item].stock--;
      }
      resolve({ message: "Inventory updated", inventory });
    }, 300);
  });
}

function checkout(itemNames) {
  // TODO: Create a complete checkout function that:
  // 1. Takes an array of item names
  // 2. Chains all the above functions
  // 3. Returns a promise with the final order result
  // 4. Handles all possible errors appropriately
  return checkInventory(itemNames)
    .then(() => calculateTotal(itemNames))
    .then((pricing) => {
      console.log(
        `Subtotal: $${pricing.subtotal}, Tax: $${pricing.tax}, Total: $${pricing.total}`
      );
      return processPayment(pricing.total).then((paymentInfo) => {
        return updateInventory(itemNames).then(() => {
          return {
            status: "success",
            message: "Checkout completed successfully!",
            items: itemNames,
            pricing,
            payment: paymentInfo,
          };
        });
      });
    })
    .catch((err) => {
      return {
        status: "error",
        message: err.message,
      };
    });
}
// ------------------------------------------TESTS------------------------------------------
// -----checkInventory()-----
checkInventory(["keyboard", "mouse"])
  .then((items) => console.log("All items available:", items))
  .catch((err) => console.error("❌", err.message)); // ❌ keyboard is out of stock

// ----------calculateTotal()-----")
calculateTotal(["laptop", "mouse"])
  .then((result) => {
    console.log("Subtotal:", result.subtotal);
    console.log("Tax:", result.tax);
    console.log("Total:", result.total);
  })
  .catch((err) => console.error("❌", err.message));

// -----------processPayment()-----")
processPayment(100)
  .then((result) => console.log("✅ Payment success:", result))
  .catch((err) => console.error("❌", err.message));

// ----------updateInventory()-----")
updateInventory(["laptop", "mouse"])
  .then((result) => {
    console.log("✅", result.message);
    console.log(result.inventory);
  })
  .catch((err) => {
    console.error("❌", err.message);
  });

// ----------checkout()-----")
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order1 success:", result))
  .catch((error) => console.log("Order1 failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order2 success:", result))
  .catch((error) => console.log("Order2 failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order3 success:", result))
  .catch((error) => console.log("Order3 failed:", error.message));
