const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite o número: '));

if (numero < 100 || numero >= 1000) {
    console.log("Erro... Não é uma centena.");
    return
}

const num1 = Math.floor(numero/100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10

console.log(`A centena invertida é R$ ${num3}${num2}${num1}`)
