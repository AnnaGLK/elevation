const SongsManager = function () {
  let urlStart = "https://www.youtube.com/watch?v=";
  let songs = {};

  const addSong = (songName, fullUrl) => {
    // Extract the video ID from the URL
    const id = fullUrl.split("=")[1];
    songs[songName] = id;
  };

  const getSong = (songName) => {
    const id = songs[songName];
    id ? console.log(urlStart + id) : console.log(`Song not found `);
  };

  return {
    addSong,
    getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long");