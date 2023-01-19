/*
    DefineProperties semelhante ao Property, mas aqui é possivel aplicar definições
    para cada chave em especifico.
*/ 

// definindo as propriedades de uma função construtoras
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

    // definição de propriedades de cada chave individualmente
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra as chaves
            value: nome, //define o valor que será recebido
            writable: true, //pode alterar com o true
            configurable: true, //configuravél, pode ser reatribuido por exemplo
        },

        preco: {
            enumerable: true, //mostra as chaves
            value: preco, //define o valor que será recebido
            writable: true, //pode alterar com o true
            configurable: true, //configuravél, pode ser reatribuido por exemplo
        }
    
    }); // recebe um objeto no final dos parametros
};

// resultado
const p1 = new Produto('Camisa', 50.99, 5);
console.log(p1);