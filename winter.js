const music = document.getElementById("winter-music");

document.body.addEventListener("click", () => {
  if (music.paused) music.play();
});