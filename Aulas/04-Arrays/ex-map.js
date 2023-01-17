// usando o map
/*
    1. Retorne apenas os nomes das pessoas.
    2. Remova apenas a chave nome do objeto.
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// resultados
const apenasNome = pessoas.map(function(obj) {
    return obj.nome
});

const  deleteNome = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});
console.log(apenasNome)
console.log(deleteNome)