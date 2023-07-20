class Pessoa {
    constructor(nome, sexo, idade) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }
    
    falar() {
        console.log(`[Falar] - Não achou o método na classe filha`);
        console.log(`[Falar] - Mas achou na classe pai`);
    }

    static metodoAcessadoSomenteNestaClasse() {
        console.log(`Método estático da classe Pessoa()`);
    }
}

class Usuario extends Pessoa {
    constructor(nome, sexo, idade, login, senha) {
        super(nome, sexo, idade);

        this.login = login;
        this.senha = senha;
    }

    //comente o método abaixo e veja o resultado
    falar() {
        console.log(`[Falar] - Achou na classe filha`);
        console.log(`[Falar] - Assim sobrescreveu o método da classe pai`);
    }
}

const usr = new Usuario('Naassom P.', 'M', 34, 'nsilva', '123456');
console.log(usr);
Pessoa.metodoAcessadoSomenteNestaClasse() // método static, só pode ser acessado através da classe e não de suas instacias
