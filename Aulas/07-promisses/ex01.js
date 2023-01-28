import fetch from "node-fetch";

/*
    Com as promisses processos podem ser executados em paralelos.
    Só será executado o proximo código, depois que o primeiro for resolvido.

    É muito usado para processos que precisam respeitar uma ordem de execução, mas 
    que não sabemos qual o tempo que cada um vai levar para ser retornado.
*/

// função para gerar tempos de respostas diferentes
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // condição para rejeitar
        if(typeof msg != 'string') reject('ERRO não é string');

        // setando um tempo
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// then para quando for resolvido
// catch para quando for rejeitado
esperaAi('Conexão com o banco', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando informações no BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Sanvando as informações', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
    })    
    });
        
});


fetch('https://api.github.com/users/naassom-pedro')
.then(res => {
    return res.json()
})
.then(resp => {
    console.log(resp)
})