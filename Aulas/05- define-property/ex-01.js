// DefineProperty serve para definir as propriedades de uma função por exemplo.

// definindo as propriedades de uma função construtoras
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preço = preco;

    // definição de propriedades
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra as chaves
        value: estoque, //define o valor que será recebido
        writable: true, //pode alterar com o true
        configurable: true, //configuravél, pode ser reatribuido por exemplo
    }); // recebe um objeto no final dos parametros
};

// resultado
const p1 = new Produto('Camisa', 50.99, 5);
console.log(p1);