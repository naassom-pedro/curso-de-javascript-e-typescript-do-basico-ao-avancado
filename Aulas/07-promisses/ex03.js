function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

let espera = (msg, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}


espera('Mensagem 1', rand())
    .then(resposta => {
        console.log(resposta)
        return espera('Mensagem 2', rand())
    .then(resposta => {
            console.log(resposta)
            return espera('Mensagem 3', rand())
    .then(resposta => {
            console.log(resposta)
        })
    })
})
