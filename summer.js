const music = document.getElementById("summer-music");

document.body.addEventListener("click", () => {
  if (music.paused) music.play();
});