// o método splice atua como os outros métodos anteriores.
// os argumentos são: variavel.splice(indice, quantosValoresADeletar, elem1, elem2...);

// simulando unshift (adicionando no inicio do array)
const nomes = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
nomes.splice(0, 0, 'Doquinha')
console.log(nomes)

// simulando shift (deletando no inicio do array)
const nomes1 = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
nomes.splice(0, 1);
console.log(nomes)

// simulando push
const nomes2 = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
nomes.splice(Number.MAX_VALUE, 0, 'Doquinha'); 
console.log(nomes)

// simulando pop()
const nomes3 = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
nomes.splice(-1, 1)
console.log(nomes)

// vendo a lista dos itens deletados
const nomes4 = ['laura','sonia','luiz','miguel','joao','maria','pedro'];
nomes4.pop()
nomes4.pop()
nomes4.pop()
nomesDeletados = nomes4.splice(-3, 3)
console.log(nomes4, nomesDeletados)



