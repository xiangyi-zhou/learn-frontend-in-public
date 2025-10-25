const profileImage = document.querySelector(".profile-image");

let angle = 0;
const amplitude = 5;
const speed = 0.02;

function floatImage() {
  const y = Math.sin(angle) * amplitude;
  profileImage.style.transform = `translateY(${y}px)`;
  angle += speed;
  requestAnimationFrame(floatImage);
}

document.addEventListener("DOMContentLoaded", () => {
  floatImage();
});

profileImage.addEventListener("mouseenter", () => {
  profileImage.style.transition = "opacity 0.6s ease";
  let blink = true;

  profileImage.blinkInterval = setInterval(() => {
    profileImage.style.opacity = blink ? "0.7" : "1";
    blink = !blink;
  }, 500);
});

profileImage.addEventListener("mouseleave", () => {
  profileImage.style.opacity = "1";
  clearInterval(profileImage.blinkInterval);
});

const avatarList = [
  "images/profile-image.webp",
  "images/PaintingSquidStock.webp",
  "images/Squid_playing_Clary.webp",
  "images/Squidward_playing_clarinet_stock_art.webp",
];

let currentIndex = 0;

profileImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % avatarList.length;
  profileImage.src = avatarList[currentIndex];
});
