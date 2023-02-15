/*publico pode ser acessado em qualquer lugar do código*/
export class Pessoa {
    constructor(
        public readonly nome: string
    ) {}
}

export class Funcionarios {
    private nomes: Pessoa[] = [];

   addNome(nome: Pessoa) {
    this.nomes.push(nome)
   }

    mostrarNomes(): void {
        console.log(nomes)
    }
}

const nome1 = new Funcionarios();
nome1.addNome("Pedro")
nome1.mostrarNomes()