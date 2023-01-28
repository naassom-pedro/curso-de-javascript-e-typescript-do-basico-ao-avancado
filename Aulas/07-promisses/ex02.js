// criando a promise
let soma = (a, b) => {
    return new Promise((resolve, reject) => {
      
        // resposta ok (resolve)
        setTimeout(() => {
            if(a + b != 2) reject('Erro: a soma tem que ser dois')
           resolve('A soma é dois')
        }, 2000)
    })
}

// acessando a promise com then, catch e finally
soma(1, 1)
.then(resposta => console.log(resposta))
.catch(e => console.log(e))
.finally(() => {
    console.log('Processo finalizado')
})










// let senha = 13;

// teste(senha, rand(1, 3))
// .then((resposta) => {
//     console.log(resposta)
// })
// .catch((e) => {
//     console.log(e)
// })
// .finally(() => {
//     console.log('Processo finalizado')
// })


// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function teste(msg, time){
//     return new Promise((resolve, reject) => {

//         if(msg != 123) reject('Senha incorreta!')

//         setTimeout(() => {
//             resolve(msg)
//         }, time)
//     })
// }