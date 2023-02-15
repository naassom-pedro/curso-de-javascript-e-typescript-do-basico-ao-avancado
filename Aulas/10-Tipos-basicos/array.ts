function concat(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase())
}

const texto = concat('a', 'b', 'c');
console.log(texto)