// encadeando os filter, map e reduce

/*  1. numeros pares
    2. dobro dos numeros pares
    3. soma do dobro dos numeros
*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros
.filter(valor => valor % 2 === 0) //[ 50, 80, 2, 4, 6, 22 ] dobro
.map(valor => valor * 2) // [ 100, 160, 4, 8, 12, 44 ] dobro
.reduce((acumulador, valor) => acumulador + valor)


console.log(pares)