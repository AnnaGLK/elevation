require('dotenv').config();
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/api/catgif", async (req, res) => {
  const user = process.env.GIFKEY;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${user}&q=cats&limit=1`;
  console.log(url);

  try {
    const response = await axios.get(url);
    const embedUrl = response.data.data[0].embed_url;
    res.json({ embedUrl });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch gif" });
  }
});

module.exports = router;

axios
  .get(url)
  .then((response) => {
    const embedUrl = response.data.data[0].embed_url;
    document.getElementById("catGif").src = embedUrl;
  })
  .catch((error) => {
    console.error("Error fetching GIF:", error);
  });
