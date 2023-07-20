/*
    Herança entre classes

*/


/* classe 1 */
class Device {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}

/* classe 2 herdando classe 1 */
class Smartphone extends Device {
    constructor(nome, marca, modelo, ) {
        super(nome, marca) // parametros herdados
        this.modelo = modelo; // parametro da classe atual
    }
}

const dev = new Smartphone();
dev.nome = 'Galaxy';
dev.marca = 'Samsung';
dev.modelo = 'A8+'
console.log(dev);

