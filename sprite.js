const canvasWidth = 2000;
const canvasHeight = 1000;
const spriteWidth = 1400;
const spriteHeight = 766;
const cols = 5;
const baseAnimationSpeed = 1000 / 8;
const maxAnimationSpeed = 200;
const minAnimationSpeed = baseAnimationSpeed;
const speedStep = 50;

const width = spriteWidth / cols;
const height = spriteHeight / rows;

let curFrame = 0;
const frameCount = 10; 
const x = (canvasWidth - width) / 2;
let y = -40; 
const srcY = -20; 
let animationSpeed = baseAnimationSpeed;
let lastKeyPressTime = 0;

const canvas = document.createElement('canvas');
const footer = document.querySelector("footer");
footer.parentNode.insertBefore(canvas, footer);
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");

const character = new Image();
character.src = "plugins/character.png";

function updateFrame() {
  curFrame = ++curFrame % frameCount;
}

function draw() {
  updateFrame();
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  const row = Math.floor(curFrame / cols);
  const col = curFrame % cols;
  ctx.drawImage(character, col * width, row * height, width, height, x, y, width, height);
}


function adjustAnimationSpeed() {
  const currentTime = Date.now();
  const timeSinceLastKeyPress = currentTime - lastKeyPressTime;

  if (timeSinceLastKeyPress < speedStep) {
    animationSpeed = maxAnimationSpeed;
  } else {
    animationSpeed = minAnimationSpeed;
  }

  lastKeyPressTime = currentTime;

  requestAnimationFrame(draw);
}

document.addEventListener('keydown', adjustAnimationSpeed);

setInterval(adjustAnimationSpeed, baseAnimationSpeed);
draw();

var chao = document.createElement("div");

chao.style.backgroundColor = "green";
chao.style.position = "fixed";
chao.style.bottom = "0";
chao.style.left = "0";
chao.style.right = "0";
chao.style.height = "20px"; 


document.body.appendChild(chao);

