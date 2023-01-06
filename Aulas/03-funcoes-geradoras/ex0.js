/*
    Funções geradoras, são um pouco diferentes do que estamos aconstumados, elas entrgam um valor diferente a cada vez que são chamadas.
    Também recebem um asterisco (*) junto da palavra 'function' e usam a palavra 'yield' para especificar cada valor.
*/

function* geradora1() {
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
}

let g1 = geradora1();
console.log(g1.next().value); // primeira chamada
console.log(g1.next().value); // segunda chamada
console.log(g1.next().value); // terceira chamada
console.log(g1.next()); // imprimindo o objeto gerado
