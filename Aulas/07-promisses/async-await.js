/* Simplificando com o uso de async await*/

async function run() {
    try {
        const fase1 = await espera('Fase 1', rand())
        console.log(fase1)

        const fase2 = await espera('Fase 2', rand())
        console.log(fase2)

        const fase3 = await espera('Fase 3', rand())
        console.log(fase3)

        const fase4 = await espera('Fase 4', rand())
        console.log(fase4)

    } catch (e) {
        console.log(e)
    }
}


function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

let espera = (msg, time) => {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject('ocorreu um erro')
        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

run();