const produtos = [
    { id: 1, nome: 'Açucar', ativo: true, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', ativo: false, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', ativo: false, valor: 2.50 },
    { id: 4, nome: 'Luvas descartáveis', ativo: true, valor: 2.50 }
];

// retorna todos produtos cujo ativo for true:
function verificaProduto(produto){
    return produto.ativo;
}

// novo array com produtos filtrados pelo metodo que pega apenas os ativos:
const produtosAtivos = produtos.filter(verificaProduto);

console.log(produtosAtivos);

// outro exemplo, filtrando carros da marca fiat:

const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];

function filtraCarros(carro){
    return (carro.marca == 'Fiat');
}

const carros_fiat = carros.filter(filtraCarros);

console.log(carros_fiat);