//A função nativa (método) sort é utilizada para alterar a ordenação dos 
//itens de um array.

//Essa função ordena o array com base em uma função de comparação e em seguida 
//retorna o array ordenado.

const frutas = ["Morango", "Maçã", "Pêra", "Manga"];

// ordenando por ordem alfabética
console.log(frutas.sort());

// Agora, veremos como ordenar um array numérico:

const numeros = [10, 2, 144, 22];
console.log(numeros.sort());

//Legal, agora que vimos o problema da ordenação de números, vamos ver como 
//resolvê-lo através da customização do sort.

function ordenaNumerosCrescente (a, b){
    return a - b;
}

function ordenaNumerosDecrescente (a, b){
    return b - a;
}

console.log(numeros.sort(ordenaNumerosCrescente));
console.log(numeros.sort(ordenaNumerosDecrescente));

// vamos ver como ordenar um array de objetos.

const alunos = [
    {nome: "Adalmando", matricula: 122},
    {nome: "Amanda", matricula: 300},
    {nome: "Francisca", matricula: 221},
    {nome: "Armando", matricula: 121},
];

// aqui escolhemos o atributo que usaremos para ordenar, e no retorno dizemos
// se será ordenado em ordem crescente ou decrescente.
function ordenaMatricula(a, b){
    return a.matricula - b.matricula;
}

console.log(alunos.sort(ordenaMatricula));

// exemplo de ordenação de array de objetos por um atributo especifico:
const equipes = [
    {id: 1, nome: 'Fluminense', pontos: 70},
    {id: 2, nome: 'Vasco', pontos: 60},
    {id: 3, nome: 'Flamengo', pontos: 100},
];

function ordenaEquipesByPontos (a, b){
    return b.pontos - a.pontos;
}

console.log(equipes.sort(ordenaEquipesByPontos));