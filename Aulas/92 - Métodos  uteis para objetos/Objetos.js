const produto = {
    nome: 'caneta',
    cor: 'azul',
    preco: '1.89'
}

Object.defineProperty(produto, 'nome', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));