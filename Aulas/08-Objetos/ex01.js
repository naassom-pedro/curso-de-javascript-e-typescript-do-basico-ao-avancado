// Objeto
const user = [{
    id: 1,
    nome: 'Naassom Pedro',
    idade: 34,
    endereco: {
        rua: 'S Carlos',
        numero: 23
    },
    id: 2,
    nome: 'André Pedro',
    idade: 34,
    endereco: {
        rua: 'S Carlos',
        numero: 23
    },
    id: 3,
    nome: 'Marcio Pedro',
    idade: 34,
    endereco: {
        rua: 'S Carlos',
        numero: 23
    }
}]

const enderecoo = user.endereco
console.log(enderecoo)

// pode simplificar se a variavel e a chave tiver o mesmo nome
const {endereco} = user
console.log(endereco)

// configurando um valor pra chave que não existe

// definindo uma variavel padrão e renomeando outra
const {nome, idade: age, nickname = 'Não Informado'} = user
console.log(nome, age, nickname)

