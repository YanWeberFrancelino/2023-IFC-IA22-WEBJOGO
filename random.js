/*const fs = require('fs');
const path = require('path');

const palavrasPath = path.join(__dirname, 'plugins', 'palavras.txt');
const loremPath = path.join(__dirname, '..', 'input', 'lorem.txt');

fs.readFile(palavrasPath, 'utf8', (err, palavrasData) => {
  if (err) {
    console.error('Erro ao ler o arquivo palavras.txt:', err);
    return;
  }

  fs.writeFile(loremPath, palavrasData, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo lorem.txt:', err);
      return;
    }

    console.log('Texto substituído com sucesso!');
  });
});*/
