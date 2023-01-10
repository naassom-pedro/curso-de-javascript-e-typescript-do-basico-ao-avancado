// formas de criar uma array (lista) comum:
const nomes = ['pedro','joão','maria'];
const nomesEx2 = new Array('naassom','miguel','natã'); //menos usual

// não é uma cópia, mas nomeEx3 apenas aponta para nomes, e um irá refletir no outro
const nomeEx3 = nomes;
nomes.pop(); //apagando ultimo valor

// para criar uma cópia e ambos serem independentesa deve-se usar o spreed (...), ai sim tem-se uma cópia
// onde um não refletira mais no outro
const nomesEx4 = [...nomes];
nomesEx4.pop();


console.log(nomes, nomeEx3)
console.log(nomesEx4);
