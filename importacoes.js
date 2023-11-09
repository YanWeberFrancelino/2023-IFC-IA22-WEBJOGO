let css = document.createElement('link');
css.rel = "stylesheet";
css.href = "plugins/style.css";
document.head.appendChild(css);

let ccss = document.createElement('link');
ccss.rel = "stylesheet";
ccss.href = "plugins/character.css";
document.head.appendChild(ccss);

function importScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}


importScript("plugins/sprite.js");

importScript("plugins/music.js");

