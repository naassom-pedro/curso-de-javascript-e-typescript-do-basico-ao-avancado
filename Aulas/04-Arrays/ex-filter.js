// usando o filter para filtrar uma array

const nomes = ['Pedro','Jose','Amara','Paulo','Sofia','Ana']

const nomesA = nomes.filter(function(valor) {
    if(valor.length <= 4) {
        return valor;
    }
})

// Reduzindo a função
const nomesB = nomes.filter(valor => valor.length <= 4)
console.log(nomesA)
console.log(nomesB)