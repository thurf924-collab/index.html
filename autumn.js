const music = document.getElementById("autumn-music");

document.body.addEventListener("click", () => {
  if (music.paused) music.play();
});