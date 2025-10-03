// Switch between sections
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  const section = document.getElementById(id);
  if (section) section.style.display = "flex";
}

// Floating hearts (works now)
function spawnHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

// Mini Game: Creeper Catch
let score = 0;
let creeperTimer;
let spawnSpeed = 2000;

function playGame() {
  showSection('game');
  score = 0;
  spawnSpeed = 2000;
  document.getElementById("score").innerText = "Score: 0";
  startCreeper();
}

function startCreeper() {
  const gameArea = document.getElementById("game-area");
  gameArea.innerHTML = "";
  let creeper = document.createElement("img");
  creeper.src = "enderman.gif";
  creeper.className = "creeper";
  creeper.style.left = Math.random() * (gameArea.offsetWidth - 80) + "px";
  creeper.style.top = Math.random() * (gameArea.offsetHeight - 80) + "px";
  creeper.addEventListener("click", () => {
    score++;
    document.getElementById("score").innerText = "Score: " + score;
    clearTimeout(creeperTimer);
    if (spawnSpeed > 600) spawnSpeed -= 100;
    startCreeper();
  });
  gameArea.appendChild(creeper);

  creeperTimer = setTimeout(() => {
    gameArea.innerHTML = `<h3 style="color:red;">💥 BOOM! Game Over 💥</h3>
                          <p>Your score: ${score}</p>
                          <button class="cute-btn" onclick="playGame()">Play Again</button>`;
  }, spawnSpeed);
}

// Love Chest
const messages = [
  "You’re the diamond I’ll never trade 💎❤️.",
  "No potion could ever make me feel as high as your love 💖✨.",
  "You’re the rarest block I’ve ever found in this world 🟪💎.",
  "You’re my sunrise in the Minecraft plains 🌅💛.",
  "You’re my emerald in a world full of stone 💚🪨❤️.",
  "Even in survival mode, you make life feel like creative mode 🛠️💖.",
  "You’re the Redstone powering every heartbeat in my chest ⚡💘.",
  "You’re the golden apple that heals my heart 🍏💛.",
  "Even if I fall into lava, your love is the water bucket saving me 🌊💘.",
  "I’d craft a thousand hearts just to give you one for every day 💌💎.",
  "You light up my Nether 🌋",
  "You’re the torch in my cave 🕯️",
  "No TNT could ever explode my love for you 💣❤️.",
  "You’re rarer than netherite 😍",
  "You make my heart blocky with love 💖",
  "Together we mine happiness 💎✨",
  "You’re my spawn point in this crazy world💕✨",
  "You’re the Redstone to my circuits, you make everything work ⚡❤️",
  "You’re my favorite player in this game called life 🌍💖",
  "No Creeper explosion could ever blow up what we have 💣💘.",
  "You’re the potion that keeps my heart enchanted 🧪💖.",


];

document.addEventListener("DOMContentLoaded", () => {
  const chest = document.getElementById("chest");
  if (chest) {
    chest.addEventListener("click", () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      document.getElementById("love-message").innerText = msg;
      spawnHearts();
    });
  }
});
