// usando o reduce retorne a pessoa mais velha
// veja o exemplo:

const pessoas = [
    {nome: 'Luiz', idade: 10},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 101},
    {nome: 'Wallace', idade: 47},
];

// resultado

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);