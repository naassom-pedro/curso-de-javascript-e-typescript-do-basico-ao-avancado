/*
    Funções recursivas são funcções que são executadas e o final volta a chamar ela mesma.
    É importate colocar um parametro limite, para que ela possa parar em algum momento.
*/


function recursiva(max) {
    console.log(max) // para exibir os valores
    if(max >= 10) return; // param de parada
    max++ // incrementa o valor

    recursiva(max); // a função chama si mesma (função recursiva)
}

// utilizando a função
recursiva(0);