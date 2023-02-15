/* Classes criam objetos*/
/* Ao criar uma classe criamos também um TIPO que podemos usar no decorrer do projeto */



export class Colaborador {
    readonly nome: string;
    readonly idade: number;
    private readonly colaboradores: Colaborador[] = [];

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    addColaborador(obj: Colaborador): void {
        this.colaboradores.push(obj)
        }

    mostrarColaborador(): void {
        for(let i of this.colaboradores) {
            console.log(i)
        }
    }
}

const colaborador1 = new Colaborador('João', 25);
colaborador1.addColaborador(colaborador1);
colaborador1.mostrarColaborador();

