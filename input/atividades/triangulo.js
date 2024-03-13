import entradaDados from 'readline-sync';

console.log("\nÁrea do triângulo:\n");

let base = entradaDados.questionInt("Informe a base: ");
let altura = entradaDados.questionInt("Informe a altura: ");
let area = ((base * altura) / 2).toFixed(0);

console.log("A área do triângulo é: " + area);