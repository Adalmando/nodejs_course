import entradaDados from 'readline-sync';

console.log("\nConversor de Celsius para Kelvin\n");

let celsius = entradaDados.questionInt("Informe o valor em ºC: ");
let Kelvin = (celsius + 273.15).toFixed(2);

console.log("" + celsius + "ºC equivalem a " + Kelvin + "ºK\n");