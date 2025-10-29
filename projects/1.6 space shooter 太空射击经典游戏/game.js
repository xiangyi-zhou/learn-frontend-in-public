const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over");

const bestScoreEl = document.getElementById("best-score");
const bestDisplay = document.getElementById("best-display");
const scoreDisplay = document.getElementById("score-display");
const finalScoreEl = document.getElementById("final-score");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let player, bullets, enemies, score, gameOver, keys;
let bestScore = localStorage.getItem("bestScore") || 0;
bestScoreEl.textContent = bestScore;
bestDisplay.textContent = `Best: ${bestScore}`;

const PLAYER_SPEED = 5;
const BULLET_SPEED = 8;
const ENEMY_SPEED = 2;
const ENEMY_SPAWN_RATE = 60;
const FIRE_COOLDOWN = 15;

let fireCooldown = 0;
let stars = [];

function init() {
  player = { x: canvas.width / 2 - 15, y: canvas.height - 60, w: 30, h: 30 };
  bullets = [];
  enemies = [];
  stars = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: 0.5 + Math.random() * 1.5,
  }));
  score = 0;
  gameOver = false;
  keys = {};
  fireCooldown = 0;
}

function drawStars() {
  ctx.fillStyle = "#0ff";
  stars.forEach((star) => {
    ctx.fillRect(star.x, star.y, star.size, star.size);
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function drawPlayer() {
  ctx.fillStyle = "#0ff";
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

function drawBullets() {
  ctx.fillStyle = "#ff0";
  bullets.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h));
}

function drawEnemies() {
  ctx.fillStyle = "#f00";
  enemies.forEach((e) => ctx.fillRect(e.x, e.y, e.w, e.h));
}

function updatePlayer() {
  if (keys["ArrowLeft"] && player.x > 0) player.x -= PLAYER_SPEED;
  if (keys["ArrowRight"] && player.x + player.w < canvas.width)
    player.x += PLAYER_SPEED;
}

function updateBullets() {
  bullets.forEach((b) => (b.y -= BULLET_SPEED));
  bullets = bullets.filter((b) => b.y > -b.h);
}

function updateEnemies() {
  enemies.forEach((e) => (e.y += ENEMY_SPEED));
  enemies = enemies.filter((e) => e.y < canvas.height + e.h);
}

function spawnEnemy() {
  const x = Math.random() * (canvas.width - 30);
  enemies.push({ x, y: -30, w: 30, h: 30 });
}

function detectCollisions() {
  enemies.forEach((e, ei) => {
    bullets.forEach((b, bi) => {
      if (
        b.x < e.x + e.w &&
        b.x + b.w > e.x &&
        b.y < e.y + e.h &&
        b.y + b.h > e.y
      ) {
        enemies.splice(ei, 1);
        bullets.splice(bi, 1);
        score += 100;
      }
    });

    if (
      e.x < player.x + player.w &&
      e.x + e.w > player.x &&
      e.y < player.y + player.h &&
      e.y + e.h > player.y
    ) {
      gameOver = true;
    }
  });
}

let frame = 0;
function gameLoop() {
  if (gameOver) return endGame();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  updatePlayer();
  updateBullets();
  updateEnemies();

  if (frame % ENEMY_SPAWN_RATE === 0) spawnEnemy();
  detectCollisions();

  drawPlayer();
  drawBullets();
  drawEnemies();

  // 更新分数显示
  scoreDisplay.textContent = `Score: ${score}`;
  bestDisplay.textContent = `Best: ${bestScore}`;

  if (fireCooldown > 0) fireCooldown--;

  frame++;
  requestAnimationFrame(gameLoop);
}

function fireBullet() {
  if (fireCooldown === 0) {
    bullets.push({
      x: player.x + player.w / 2 - 2,
      y: player.y,
      w: 4,
      h: 10,
    });
    fireCooldown = FIRE_COOLDOWN;
  }
}

function endGame() {
  gameScreen.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  finalScoreEl.textContent = score;

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
  }
}

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (e.key === " " && !gameOver) {
    fireBullet();
  }
});
document.addEventListener("keyup", (e) => (keys[e.key] = false));

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  init();
  gameLoop();
};

restartBtn.onclick = () => {
  gameOverScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  init();
  gameLoop();
};
