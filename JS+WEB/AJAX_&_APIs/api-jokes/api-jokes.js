fetch(`https://official-joke-api.appspot.com/random_joke`)
.then((data) => data.json())
.then((data) => {
    console.log(data)
document.getElementById("setup").innerHTML = data.setup
document.getElementById("punchLine").innerHTML = data.punchLine
})
.catch((err) => console.error(err));

document.getElementById("new-joke-btn").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("setup").textContent = data.setup;
      document.getElementById("punchline").textContent = data.punchline;
    })
    .catch((err) => console.error(err));
});