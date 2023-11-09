// window.addEventListener("gamestarted", ev => console.log("gamestarted"))
// window.addEventListener("letter", ev => console.log("letter"))
// window.addEventListener("correctletter", ev => console.log("correctletter"))
// window.addEventListener("wrongletter", ev => console.log("wrongletter"))
// window.addEventListener("word", ev => console.log("word"))
// window.addEventListener("correctword", ev => console.log("correctword"))
// window.addEventListener("wrongword", ev => console.log("wrongword"))
// window.addEventListener("endgame", ev => console.log("endgame"))

/*


let importacoesScript = document.createElement('script');
importacoesScript.src = 'plugins/importacoes.js';
importacoesScript.async = true;
importacoesScript.defer = true;
document.head.appendChild(importacoesScript);

const spriteScript = document.createElement("script");
spriteScript.src = "sprite.js";
spriteScript.async = true;
spriteScript.defer = true;
document.body.appendChild(spriteScript);

*/
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = 'plugins/style.css';
document.head.append(css);

const divInicio = document.createElement("div");
divInicio.className = "inicio";

const title = document.createElement("div");
title.className = "title";
title.textContent = "REGRAS";

const divBackgroundWrap = document.createElement("div");
divBackgroundWrap.id = "background-wrap";

const playButton = document.createElement("button");
playButton.textContent = "Jogar";
playButton.className = "play-button";
playButton.addEventListener("click", () => {

  divInicio.remove();
  iniciar(); 
});

const rules = document.createElement("div");
rules.className = "rules";
rules.innerHTML = `
  O jogador tem 60 segundos para escrever 30 palavras, contendo 5 vidas, cada palavra errada lhe custa uma vida.<br><br>
  Caso o jogador acerte 5 palavras consecutivas, ele ganha 1 ponto de combo.<br><br>
  Se o jogador cometer um erro, apenas a contagem de acertos consecutivos é reiniciada, não afetando a contagem de combos acumulada.<br><br>
  Quando o jogador atinge 15 acertos consecutivos, ele recebe um bônus de 5 pontos de combo, e a contagem de acertos consecutivos é reiniciada para evitar a contagem dupla do bônus.<br><br>
  Da mesma forma, ao atingir 30 acertos consecutivos, o jogador recebe um bônus de 10 pontos de combo, e a sequência de acertos é reiniciada, os bônus só são pegos apenas uma vez.<br><br>
`;

divInicio.appendChild(title);
divInicio.appendChild(rules);
divInicio.appendChild(playButton);

const pontosdce = document.createElement("span"); 
const footer = document.querySelector('footer');

document.body.append(divInicio);


let vidas = 5;
const evidasdec = document.createElement("span");
let teste = null;


let correctStreak = 0; 
let pontos = 0; 
let bonus15Concedido = false; 
let bonus30Concedido = false; 
let end = false;

const score = document.querySelector("main div.score");
const tempomodal = document.createElement("span");
let tempo = 60;

tempomodal.className = "tempo";
evidasdec.className = "vidas";
pontosdce.className = "pontos"; 
score.append(tempomodal); 
footer.append(evidasdec, pontosdce);

function updates() {
  tempomodal.innerHTML = `Tempo: ${tempo}s`;
  evidasdec.innerHTML = `Vidas: ${vidas}`; 
  pontosdce.innerHTML = `Pontos: ${pontos}`;
}



for (let i = 1; i <= 10; i++) {
  const divX = document.createElement("div");
  divX.className = "x" + i;
  const divCloud = document.createElement("div");
  divCloud.className = "cloud";
  divX.appendChild(divCloud);
  divBackgroundWrap.appendChild(divX);
}

const main = document.querySelector("main");
main.insertBefore(divBackgroundWrap, main.firstChild);

/*

let ccss = document.createElement('link');
ccss.rel = "stylesheet";
ccss.href = "plugins/character.css";
document.head.appendChild(ccss);

*/

/*



const canvasWidth = window.innerWidth;
const canvasHeight = 200;

const divBackgroundWrap = document.createElement("div");
divBackgroundWrap.id = "background-wrap";

for (let i = 1; i <= 10; i++) {
  const divX = document.createElement("div");
  divX.className = "x" + i;
  const divCloud = document.createElement("div");
  divCloud.className = "cloud";
  divX.appendChild(divCloud);
  divBackgroundWrap.appendChild(divX);
}

const main = document.querySelector("main");
main.insertBefore(divBackgroundWrap, main.firstChild);




const canvasWidthbp = window.innerWidth;
const canvasHeightbp = 250;
const spriteWidthbp = 1400;
const spriteHeightbp = 766;
const colsbp = 5;
const rowsbp = 5;
const baseAnimationSpeedbp = 1000 / 8;
const maxAnimationSpeedbp = 200;
const minAnimationSpeedbp = baseAnimationSpeedbp;
const speedStepbp = 50;

const widthbp = spriteWidthbp / colsbp;
const heightbp = spriteHeightbp / rowsbp;

let curFramebp = 0;
const frameCountbp = colsbp * rowsbp;
const xbp = (canvasWidthbp - widthbp) / 2;
let ybp = canvasHeightbp - heightbp - 30;
const srcXbp = 0;
const srcYbp = 0;
let animationSpeedbp = baseAnimationSpeedbp;
let lastKeyPressTimebp = 0;

const canvasbp = document.createElement('canvas');
const mainbp = document.querySelector('main');
const footerbp = document.querySelector('footer');
mainbp.parentNode.insertBefore(canvasbp, footerbp);
canvasbp.width = canvasWidthbp;
canvasbp.height = canvasHeightbp;
const ctxbp = canvasbp.getContext('2d');

const characterbp = new Image();
characterbp.src = 'plugins/character.png';

function updateFramebp() {
  curFramebp = ++curFramebp % frameCountbp;
}

function drawbp() {
  updateFramebp();
  ctxbp.clearRect(0, 0, canvasWidthbp, canvasHeightbp);
  const rowbp = Math.floor(curFramebp / colsbp);
  const colbp = curFramebp % colsbp;
  ctxbp.drawImage(characterbp, colbp * widthbp, rowbp * heightbp, widthbp, heightbp, xbp, ybp, widthbp, heightbp);
}

function adjustAnimationSpeedbp() {
  const currentTimebp = Date.now();
  const timeSinceLastKeyPressbp = currentTimebp - lastKeyPressTimebp;

  if (timeSinceLastKeyPressbp < speedStepbp) {
    animationSpeedbp = maxAnimationSpeedbp;
  } else {
    animationSpeedbp = minAnimationSpeedbp;
  }

  lastKeyPressTimebp = currentTimebp;

  requestAnimationFrame(drawbp);
}

document.addEventListener('keydown', adjustAnimationSpeedbp);

setInterval(() => {
  adjustAnimationSpeedbp();
  drawbp();
}, animationSpeedbp);

characterbp.onload = drawbp;

var chaobp = document.createElement('div');
chaobp.style.backgroundColor = 'green';
chaobp.style.position = 'fixed';
chaobp.style.bottom = '0';
chaobp.style.left = '0';
chaobp.style.right = '0';
chaobp.style.height = '5px'; 
document.body.insertBefore(chaobp, footerbp.nextSibling);

*/


function win() {
  if (end) return; end = true;


  clearInterval(teste);
  const dwin = document.createElement("div"); dwin.className = "modal victory";
  dwin.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.8); // Cor cinza com transparência
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000; // Garante que o modal fique acima de outros elementos
  `;

  const victoryTitle = document.createElement("h1");
  victoryTitle.textContent = "Você ganhou!";
  victoryTitle.style.cssText = `
    color: #fff;
    text-shadow: 0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple);
    font-size: 2.5rem;
    margin-bottom: 20px;
    z-index: 1001;
  `;

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Jogar novamente";
  playAgainButton.className = "play-again-btn";
  playAgainButton.style.cssText = `
    padding: 10px 20px;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #00b4ff;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px var(--neon-shadow), inset 0 0 10px var(--neon-shadow);
    animation: neon 1.5s ease-in-out infinite alternate;
    z-index: 1002;
  `;
  playAgainButton.addEventListener("click", () => window.location.reload());
  dwin.appendChild(victoryTitle);
  dwin.appendChild(playAgainButton);
  document.body.appendChild(dwin);
}







function lose() {
  if (end) return; end = true;
  vidas = 0;
  updates();
  clearInterval(teste);
  document.querySelectorAll('.modal').forEach(modal => modal.remove()); const backgroundOverlay = document.createElement("div");

  
  backgroundOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.8);
    z-index: 999;
  `;
  const dlose = document.createElement("div");
  dlose.className = "modal defeat";
  dlose.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000; 
    background-color: rgba(128, 128, 128, 0.0);
  `;
  const defeatTitle = document.createElement("h1");
  defeatTitle.textContent = "Você perdeu!";
  defeatTitle.style.cssText = `
    color: #fff;
    text-shadow: 0 0 10px #ff4757, 0 0 20px #ff4757;
    font-size: 2.5rem;
    margin-bottom: 20px;
  `;
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Jogar novamente";
  playAgainButton.className = "play-again-btn";
  playAgainButton.style.cssText = `
    padding: 10px 20px;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #ff4757; 
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px #ff4757, inset 0 0 10px #ff4757; 
    animation: neon 1.5s ease-in-out infinite alternate;
  `;
  playAgainButton.addEventListener("click", () => window.location.reload());
  document.body.appendChild(backgroundOverlay);
  dlose.appendChild(defeatTitle);
  dlose.appendChild(playAgainButton);
  document.body.appendChild(dlose);
}

function iniciar() {
  updates();
  teste = setInterval(() => {
    if (tempo > 0) { tempo -= 1 } else {
      lose();
      clearInterval(teste);
    } updates();
  }, 1000);
}

window.addEventListener("correctword", () => {
  correctStreak++;
  

  
  if (correctStreak % 5 === 0) {
    pontos++; 
  }
  
  if (correctStreak === 15 && !bonus15Concedido) {
    pontos += 5;
    bonus15Concedido = true; 
  } else if (correctStreak === 30 && !bonus30Concedido) {
    pontos += 10; 
    bonus30Concedido = true; 
  }



  updates();
});

window.addEventListener("wrongword", () => {
  if (vidas > 0) { vidas -= 1;  }
  correctStreak = 0; bonus15Concedido = false;
  bonus30Concedido = false;
  if (vidas <= 0) { lose();  }
  updates(); 
});



window.addEventListener("endgame", win);



function createFootstepsAudio() {
    const footstepsAudio = document.createElement("audio");
    footstepsAudio.id = "footsteps";
    footstepsAudio.src = "plugins/passos.mp3";
    document.body.appendChild(footstepsAudio);
}


createFootstepsAudio();
const footstepsSound = document.getElementById("footsteps");
let typingTimeout;
let typingStartTime;
let typingEndTime;


function stopFootstepsSound() {
    footstepsSound.pause();
    footstepsSound.currentTime = 0;
}

document.addEventListener("keydown", (event) => {
    clearTimeout(typingTimeout);
    

    if (event.key.match(/^[A-Za-z]$/)) {
        typingStartTime = new Date().getTime();
        footstepsSound.play();
    }
});

document.addEventListener("keyup", () => {
    typingEndTime = new Date().getTime();
    const typingDuration = typingEndTime - typingStartTime;


    let speed = 1.0;

    
    if (typingDuration > 0) {
        speed = 1000 / typingDuration;
    }

    speed = Math.min(Math.max(speed, 0.2), 5.0);

    
    footstepsSound.playbackRate = speed;


    typingTimeout = setTimeout(stopFootstepsSound, 1000);
});

/* 
window.addEventListener('load', () => {
    createFootstepsAudio();
    const footstepsSound = document.getElementById("footsteps");
    const character = new Image();
    character.src = 'plugins/character.png';
    character.onload = () => {
        draw();
    };

});*/