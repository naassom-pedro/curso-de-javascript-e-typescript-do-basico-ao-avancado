const objA = {
    chaveA: 'Valor A'
}

const objB = {
    chaveB: 'Valor B'
}


Object.setPrototypeOf(objB, objA); // trazendo os prototypes de objA para objB
console.log(objB.chaveA);
