// MINHA SOLUÇÃO

/*===============================================================================*/

const cpf = '378.561.158-74'; //Informe o CPF e execute o código

/*===============================================================================*/

let value1 = calculateCpfDigit(cpf);
let value2 = calculateCpfDigit(cpf, true, value1);

let cpfValid = this.compareCpf(cpf, value1, value2)
console.log(cpfValid);

cpfValid? alert(`CPF ${cpf} é válido.`) : alert(`CPF ${cpf} inválido.`)

/* compara se o cpf é válido */
function compareCpf(cpf, digit1=0, digit2=0) {
    let cpfInformed = cpf;
    let cpfForCompare = `${Array.from(cpfInformed).slice(0, 12).toString().replace(/,/g, '')}${digit1}${digit2}`;
    
    return cpfInformed === cpfForCompare;
}

/* cálcula os digitos do cpf */
function calculateCpfDigit(cpf, stageTwo=false, resultOne) {
    const cpfNormalize = cpf.replace(/\D/g, '');
    let endArray;
    let repeat;

    stageTwo === false? endArray = 10 : endArray = 9;
    stageTwo === true? repeat = 11 : repeat = 10

    const shortCpf = Array.from(cpfNormalize.slice(0, endArray));
    let total = 0;
    let index = 0;
    
    if(stageTwo === true) {
        shortCpf.push(String(resultOne));
    }
    
    for(let i=repeat; i > 1; i--) {
        currentValue = Number(shortCpf[index] * i);
        // console.log(`indice: ${i} valor: ${shortCpf[index]} soma: ${currentValue}`);
        total+= currentValue;
        index++;
    }
    
    let result = 11 - (total % 11);
    result > 9 || result < 0 ? result = 0 : result = result;

    return result;
}

