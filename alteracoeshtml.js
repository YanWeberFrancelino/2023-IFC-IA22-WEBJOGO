// Criação dos elementos
const divBackgroundWrap = document.createElement("div");
divBackgroundWrap.id = "background-wrap";

// Criação das nuvens
for (let i = 1; i <= 10; i++) {
  const divX = document.createElement("div");
  divX.className = "x" + i;
  const divCloud = document.createElement("div");
  divCloud.className = "cloud";
  divX.appendChild(divCloud);
  divBackgroundWrap.appendChild(divX);
}

// Inserção no documento HTML
const main = document.querySelector("main");
main.insertBefore(divBackgroundWrap, main.firstChild);

