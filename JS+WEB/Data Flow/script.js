let posts = [
  { name: "Uncle Jerome", text: "Happy birthday kiddo!" },
  { name: "BFF Charlene", text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD" },
  { name: "Old High School Teacher", text: "Hey ace, have a good one." },
];

function render() {
  const container = document.getElementById("posts-container");
  container.innerHTML = ""; // Clear previous content to prevent duplication

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<strong>${post.name}:</strong> ${post.text}`;

    //click event to remove post
    postDiv.addEventListener("click", function () {
      removePost(index); // Call removePost with the index
    });

    container.appendChild(postDiv);
  });
}

// Function to remove post from the array
function removePost(index) {
  posts.splice(index, 1); // Remove the post at the given index
  render(); // Re-render the updated posts
}

// Initial render
render();

// Handle post button click
document.getElementById("post-btn").addEventListener("click", function () {
  const nameInput = document.getElementById("name-input");
  const wishInput = document.getElementById("wish-input");

  const name = nameInput.value.trim();
  const text = wishInput.value.trim();

  if (name && text) {
    posts.push({ name, text });
    render();
    nameInput.value = "";
    wishInput.value = "";
  }
});
