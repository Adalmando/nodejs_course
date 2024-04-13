const dias_da_semana = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
];

// ADICIONANDO UM ELEMENTO AO FINAL DA LISTA:
dias_da_semana.push("teste");

// PRINTANDO TUDO DA LISTA EM FORMA DE TABLEA:
console.table(dias_da_semana);

// PRINTANDO TUDO DA LISTA COM MAP (ELE PERCORRE A LISTA):
dias_da_semana.map((dia) => console.log(dia));

dias_da_semana.splice(2,1);
// removendo "terça-feira"
console.log(dias_da_semana);

dias_da_semana.splice(1,3);
// removendo "segunda-feira", "terça-feira", "quarta-feira"
console.log(dias_da_semana);

// removendo o primeiro elemento do array:
dias_da_semana.shift();

// removendo o ultimo elemento do array:
dias_da_semana.pop();


// Exemplo:
const produto = {
    nome: 'New Super Mario Bros.', qnt: 1, valor: 250
};

const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
];

// Insere o produto no carrinho
carrinho.push(produto);

// Remove o item "Super Mario Kart 8"
carrinho.splice(1,1);

// Remove todos os elementos do carrinho
const totalElementos = carrinho.length;
carrinho.splice(0,totalElementos);