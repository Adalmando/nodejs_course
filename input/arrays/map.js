const produtosCadastrados = [
    {id: 1, nome: 'Açucar', estoque: 100, valor: 2.00},
    {id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95},
    {id: 3, nome: 'Lucas descartaveis', estoque: 1000, valor: 2.50}
];

// função que recebe um objeto produto e retorna um objeto produtoExibicao:
function retornaProduto (produto){
    const produtoExibicao = {
        nome: produto.nome,
        valor:"R$ " + produto.valor.toFixed(2)
    }
    return produtoExibicao;
}

// Criando um novo array com os dados de produtosCadastrados modificados:
const produtosExibicao = produtosCadastrados.map(retornaProduto);

// Imprimindo o novo array que foi criado modificando o antigo:
console.log(produtosExibicao);


// Outro exemplo:
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'Chevrolet', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
];

// retorna uma string para cada carro:
function carroSimples(carro){
    return `${carro.marca} ${carro.modelo} ano: ${carro.anoFabricacao}`;
}

const carrosSimples = carros.map(carroSimples);
console.log(carrosSimples);

// outro exemplo:
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  function abreviar(mes) {
    return mes.substr(0,3)
  }

  const mesesAbreviados = meses.map(abreviar);

  console.log(mesesAbreviados);
