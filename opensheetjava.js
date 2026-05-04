document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});


const images = [
  "backgrounds/goat.jpg",
  "backgrounds/sea.jpg",
  "backgrounds/mountain.jpg",
  "backgrounds/ruins.jpg",
  "backgrounds/church.jpg",
  "backgrounds/house.jpg",
  "backgrounds/land.jpg",
  "backgrounds/background.png",
];

let current = 0;
const bgCurrent = document.getElementById("bg-current");
const bgNext    = document.getElementById("bg-next");
const music     = document.getElementById("bg-music");
const hint      = document.getElementById("hint");
const circles = document.getElementById("circles");
bgCurrent.style.backgroundImage = `url("${images[current]}")`;

document.body.addEventListener("click", () => {
  if (current < images.length - 1) {
    const next = current + 1;

    bgNext.style.backgroundImage = `url("${images[next]}")`;
    bgNext.style.opacity = "1";

    setTimeout(() => {
      bgCurrent.style.backgroundImage = `url("${images[next]}")`;
      bgNext.style.opacity = "0";
      current = next;

      if (current === images.length - 1) {
        music.pause();
      }
    }, 600);
  }

  if (music.paused && current < images.length - 1) music.play();
  hint.classList.add("hidden");
});

const clickZone = {
  x1: 600,
  x2: 800,
  y1: 100,
  y2: 200,
};

const pages = ["spring.html", "summer.html", "autumn.html", "winter.html"]; // change these to your actual URLs

let dropCount = 0;

document.body.addEventListener("click", (e) => {
  if (current !== images.length - 1) return;

  const inZone =
    e.clientX >= clickZone.x1 &&
    e.clientX <= clickZone.x2 &&
    e.clientY >= clickZone.y1 &&
    e.clientY <= clickZone.y2;

  if (inZone) {
    const img = document.createElement("img");
    img.src = "pomy.png";
    img.classList.add("falling-image");
    img.style.left = e.clientX - 25 + "px";
    img.style.top = e.clientY + "px";
    img.style.pointerEvents = "none";

    const thisDropNumber = dropCount;

    img.addEventListener("animationend", () => {
      const rect = img.getBoundingClientRect();
      img.style.top = rect.top + "px";
      img.style.left = rect.left + "px";
      img.style.animation = "none";
      img.style.transform = "none";
      img.style.pointerEvents = "auto";

      if (thisDropNumber < 4) {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
          window.location.href = pages[thisDropNumber];
        });
      }
    });

    dropCount++;
    document.body.appendChild(img);
  }
});