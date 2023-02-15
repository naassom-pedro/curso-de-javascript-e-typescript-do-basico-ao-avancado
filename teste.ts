function pagina() {
    const status = false;

    if(status) {
        return Promise.resolve("Promise resolvido");
    } else {
        return Promise.reject("Falha")
    }
}

pagina().then(res => console.log(res))
.catch(erro => console.log(erro))