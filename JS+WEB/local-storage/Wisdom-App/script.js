const input = document.getElementById("wisdomInput");
const addBtn = document.getElementById("addWisdomBtn");
const clearBtn = document.getElementById("clearWisdomBtn");
const list = document.getElementById("wisdomList");

let wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];

// Render all wisdom from array
function renderWisdom() {
  list.innerHTML = "";
  wisdom.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.text}
      <button class="delete-btn" onclick="deleteWisdom(${item.id})">x</button>
    `;
    list.appendChild(li);
  });
}

// Add new wisdom
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const newWisdom = { id: Date.now(), text };
  wisdom.push(newWisdom);
  input.value = "";
  renderWisdom();

  // Save every other click
  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }
});

// Delete specific wisdom
function deleteWisdom(id) {
  wisdom = wisdom.filter(item => item.id !== id);
  localStorage.setItem("wisdom", JSON.stringify(wisdom));
  renderWisdom();
}

// Clear all wisdom
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("wisdom");
  wisdom = [];
  renderWisdom();
});

// On page load
renderWisdom();