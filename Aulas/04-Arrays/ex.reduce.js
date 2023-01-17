// reduce serve para reduzir o tamanho de uma array para penas um valor

// retornando valores pares em uma array
const numeros = [45,2,6,778,96,3,2,78,5,3];
const pares = numeros.reduce(function(acumulador, valor, index, array) {
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []); // esse ultimo parametro é opcional, no caso um array '[]', se não colocar o acumulador recebe o promeiro valor

console.log(pares)