const canvas = document.getElementById("binary-canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const cols = Math.floor(canvas.width / 14);
const drops = Array(cols).fill(0);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = "14px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = Math.random() > 0.5 ? "0" : "1";
    ctx.fillText(text, i * 14, drops[i] * 18);

    if (drops[i] * 18 > canvas.height && Math.random() > 0.98) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 50);

// Intro typing
const title = "Janagam Sri chaRAN";
const subtitle = "Student Developer | Learning by Building";

let i = 0;
const typedText = document.getElementById("typed-text");
const welcomeText = document.getElementById("welcome-text");

function type() {
  if (i <= title.length) {
    typedText.textContent = title.slice(0, i++);
    setTimeout(type, 80);
  } else {
    welcomeText.textContent = subtitle;
    setTimeout(() => {
      document.getElementById("intro-screen").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("intro-screen").style.display = "none";
      }, 800);
    }, 700);
  }
}
type();
