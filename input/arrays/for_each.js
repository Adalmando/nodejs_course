// A função forEach é usada para percorrer um array e executar uma função para cada elemento
const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
  ];
  
  // index é a posição do elemento dentro do arary:
  function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
  }
  
  // o metodo pode ser usado com um array e uma função, no caso imprimirProduto:
  produtos.forEach(imprimirProduto);


  const carrinho = [
    {  nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    {  nome: 'Super Mario Kart 8', qnt: 2, valor: 300 },
    {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
  ];
  
  function imprimirItem( produto, index ) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;
  
    console.log( texto );
  }
  
  carrinho.forEach(imprimirItem);