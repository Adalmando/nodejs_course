import entradaDados from 'readline-sync';

let x = entradaDados.questionInt("Digite um numero: ");
let y = entradaDados.questionInt("Digite outro numero:");
let soma = x+y;

console.log("A soma entre " + x + " e " + y + " é " + soma);