// tupla
const array: [string, number] = ['Pedro', 34]
array[0] = 'João'
console.log(array)

// com readonly os valores não podem ser alterdos

const nomes: readonly [string, string] = ['Pedro', 'Maria']
console.log(nomes)