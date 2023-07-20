/*
    Utilizando métodos acessores e modificadores.
    Em JavaScript, getters e setters são métodos especiais que permitem acessar e modificar-
    os valores de propriedades de um objeto.

    1. Os getters são usados para obter o valor de uma propriedade específica quando ela é acessada.
    2. Os setters são usados para definir ou modificar o valor de uma propriedade específica quando ela é atribuída.

*/

class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    get nomeCompleto() {
        console.log(`GETTER`);
        return this.nome + ' ' + this.sobreNome;
    }

    set nomeCompleto(valor) {
        console.log(`SETTER`);
        valor = valor.split(' ')
        this.nome = valor.shift();
        this.sobreNome = valor.join();
    }
}


const p = new Pessoa();

