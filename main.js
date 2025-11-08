// Binary rain effect
const canvas = document.getElementById('binary-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join("1").split("");
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  letters.map((y_pos, index) => {
    const text = String.fromCharCode(48 + Math.random() * 33);
    const x_pos = index * 10;
    ctx.fillText(text, x_pos, y_pos);
    letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
  });
}
setInterval(drawMatrix, 50);

// Typewriter effect
const typedText = document.getElementById("typed-text");
const welcomeText = document.getElementById("welcome-text");
const introScreen = document.getElementById("intro-screen");
const textSequence = ["Janagam Sri chaRAN", "The Digital Alchemist"];

let index = 0, charIndex = 0;
function typeWriter() {
  if (charIndex < textSequence[index].length) {
    typedText.textContent += textSequence[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else if (index < textSequence.length - 1) {
    setTimeout(() => {
      typedText.textContent = "";
      index++;
      charIndex = 0;
      typeWriter();
    }, 800);
  } else {
    setTimeout(() => {
      welcomeText.textContent = "> unauthorized curiosity detected... welcome.";
      setTimeout(() => {
        introScreen.style.opacity = "0";
        setTimeout(() => introScreen.remove(), 1000);
      }, 1200);
    }, 800);
  }
}
window.onload = typeWriter;
