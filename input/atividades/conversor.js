import entradaDados from 'readline-sync';

console.log("\nConversor de milhas para Quilometros\n");

let milhas = entradaDados.questionInt("Informe o valor em Milhas: ");
let quilometros = (milhas * 1.609344).toFixed(3);

console.log("" + milhas + "mi equivalem a " + quilometros + "km\n");