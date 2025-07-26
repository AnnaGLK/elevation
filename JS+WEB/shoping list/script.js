function addItem() {
      const input = document.getElementById("item-input");
      const itemText = input.value.trim();

      if (itemText !== "") {
        const list = document.getElementById("shopping-list");
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        list.appendChild(listItem);
        input.value = ""; // Clear input
      }

      input.focus(); // Optional: keep the input focused
    }