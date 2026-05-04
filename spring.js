const music = document.getElementById("spring-music");

document.body.addEventListener("click", () => {
  if (music.paused) music.play();
});