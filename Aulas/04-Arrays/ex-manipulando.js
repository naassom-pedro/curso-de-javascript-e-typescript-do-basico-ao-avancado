const nomes = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
console.log(nomes);

// apagando ultimo valor
nomes.pop();

// apagando primeiro valor
nomes.shift();
console.log(nomes);

// adiciona ao inicio
const nomes2 = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
nomes2.unshift('alexandre');
console.log(nomes2);

// adicionando valor ao final
nomes.push('marcos');
console.log(nomes);

// fatiando a array (pedaço);
const novo = nomes.slice(0, 2);
console.log(novo);

// separando uma string
const nomeInteiro = 'Naassom Pedro Silva';
const nomeSeparado = nomeInteiro.split(' '); // separando por espaço
console.log(nomeSeparado);

// juntando várias strings
const nomeSeparado2 = ['Naassom', 'Pedro', 'Silva']
const nomeEmUnicaString = nomeSeparado2.join(' '); // unindo por espaços
console.log(nomeEmUnicaString);
