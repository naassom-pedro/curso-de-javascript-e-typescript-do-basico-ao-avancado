/*
    Trabalhando com classes
    Ao trabalhar com classes, automaticamente os métodos¹ são colocados no prototype-
    não sendo necessário ser incluso manualmente, como ocorre com as funções construtoras.

    Dica: (Toda classe tem seus atributos e métodos)
*/

class Pessoa {
    constructor(nome, sobreN) { // pode ter ou não um construtor
        this.nome = nome;
        this.sobreN = sobreN;
    }

    falar() { // 1 - métodos quando em classe, automaticamente colocados no prototype.
        console.log(`${this.nome} está falando...`);
    }
}

/*
    Criando objetos a partir da classe
*/
const p1 = new Pessoa('Naassom', 'S.');
const p2 = new Pessoa('Miguel', 'O.');
