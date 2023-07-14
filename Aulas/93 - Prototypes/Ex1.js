// utilizando protótipos

// função contrutora
function Pessoa(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    // caso seja criado aqui a função, então será priorizada pelo JS
}

/* 
    funções que são criadas no prototipo, não é criado sempre que instaciar, fazendo com que não precise ser criada sempre, a não ser que seja chamada a função.
*/
Pessoa.prototype.nomeCompleto = function() {
    const nc =  `${this.nome} ${this.sobreNome}`;
    return `Nome completo: ${nc.toUpperCase()}`
}


const Pessoa1 = new Pessoa('naassom', 'pedro');
const nomeCompletoDaPessoa = Pessoa1.nomeCompleto();
console.log(nomeCompletoDaPessoa);