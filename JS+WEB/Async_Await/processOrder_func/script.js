function processOrder(orderId) {
  return fetch(`/api/orders/${orderId}`)
    .then((response) => response.json())
    .then((order) => {
      return fetch(`/api/inventory/${order.productId}`);
    })
    .then((response) => response.json())
    .then((inventory) => {
      if (inventory.stock > 0) {
        return { success: true, message: "Order processed" };
      } else {
        return { success: false, message: "Out of stock" };
      }
    });
}

// same function with ASYNC/AWAIT

async function processOrder(orderId) {
  const getAPI = await fetch(`/api/orders/${orderId}`);
  const order = await getAPI.json();
  const productId = await fetch(`/api/inventory/${order.productId}`);
  const inventory = await productId.json();
  const stock = inventory.stock;

  return stock > 0
    ? { success: true, message: "Order processed" }
    : { success: false, message: "Out of stock" };
}

