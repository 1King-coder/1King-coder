const nome = prompt('digite seu nome:').trim();
const palavras_nome = nome.split(' ')
document.body.innerHTML += `Seu nome é <strong>${nome}</strong><br>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> Letras<br>`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1]}</strong><br>`;
document.body.innerHTML += `Primeiro índice da letra a no seu nome é <strong>${nome.search('a')}</strong><br>`;
document.body.innerHTML += `Último índice da letra a no seu nome é <strong>${nome.lastIndexOf('a')}</strong><br>`;
document.body.innerHTML += `As palavras do  seu nome são <strong>${palavras_nome}</strong><br>`;
document.body.innerHTML += `As últimas três letras do seu nome são <strong>${nome.slice(-3)}</strong><br>`;
document.body.innerHTML += `Seu nome em Maiúsculas é <strong>${nome.toUpperCase()}</strong><br>`;
document.body.innerHTML += `Seu nome em Minúsculas é <strong>${nome.toLowerCase()}</strong><br>`;
