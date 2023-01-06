/*
    Funções construtoras funcionam como moldes para a criação de um objeto, podendo ser reutilizada através da sintaxe (new).
    Por convesão, usa-se o nome da função com letra maíscula.
*/

function Pessoa(nome, idade) {
    // atributos e métodos públicos quando usa-se o this.
    this.nome = nome;
    this.idade = idade;
    this.bio = function() { console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e meu hobby é: ${hobbies()}`) };

    // atributos e métodos privados, não usa o this, não é possivel utilizar fora da função construtora, apenas internamente.
    const hobby = 'jogar futebol';
    const hobbies = function() {return hobby};
}

// utilizando a função construtora para criar o objeto usuario1
const  usuario1 = new Pessoa('Pedro', 25);
usuario1.bio();