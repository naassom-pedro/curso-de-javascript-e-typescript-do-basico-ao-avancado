/*
    Funções geradoras, são um pouco diferentes do que estamos aconstumados, elas entrgam um valor diferente a cada vez que são chamadas.
    Também recebem um asterisco (*) junto da palavra 'function' e usam a palavra 'yield' para especificar cada valor.
*/


function* geradora1() { // criando uma funcção geradora infinita
    let i = 0;

    while(true) {
        yield 'valor ' + i
        i++
    }
}

let g1 = geradora1(); // criando o objeto
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);