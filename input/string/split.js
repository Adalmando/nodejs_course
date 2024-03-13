let cores_string = "vermelho,azul,branco,cinza,roxo";

let cores_array = cores_string.split(",");

console.log(cores_array); //O método split() aceita um parâmetro que tenha mais de 1 caractere para quebrar strings, porém é mais comum o uso de um único caractere para essa tarefa.

let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)");