// A função nativa (método) reduce é utilizada para reduzir um array a um único valor. 
// Esse valor reduzido pode ser um número, uma string, um array ou um objeto.

const itensCarrinho = [
    { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
    { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];
  
function somarValor (total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  
    return total + valorTotal;
}
  
  // começa contando a partir de zero
const valorAPagar = itensCarrinho.reduce(somarValor, 0);
  
console.log(valorAPagar);

// Outro exemplo: 

const jogos = [
  {id: 1, nome: 'Galaxian', anoLancamento: '1979'},
  {id: 2, nome: 'Donkey Kong', anoLancamento: '1981'},
  {id: 3, nome: 'Ms. Pac-Man', anoLancamento: '1981'},
  {id: 4, nome: 'Asteroids', anoLancamento: '1979'},
];

function retornaNomesJogos(nomes, jogos) {
  return nomes + jogos.nome + ', ';
}

const nomesJogos = jogos.reduce(retornaNomesJogos, '');

// slice cria modifica a string nomesJogos pegando do indice zero ate o segundo 
//indice de tras pra frente (-2)
//ou seja, ta cortando os ultimos 2 caracteres da string!
console.log(nomesJogos.slice(0, -2))

// como ficaria sem o slice:
console.log(nomesJogos);

const alunos = [
  { nome: "José", av1: 10, av2: 5, av3: 7 },
  { nome: "Ana", av1: 1, av2: 10, av3: 10 },
  { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
  { nome: "Diego", av1: 10, av2: 2, av3: 8 },
];

const qntAlunos =   alunos.length;

// 0 é o valor da variavel total, o metodo reduce recebe uma variavel e um atributo
// o total é uma variavel que devemos dizer o valor inicial dela, nesse caso 0:
const mediaTurmaAv1 =   alunos.reduce((total, aluno) => total + aluno.av1, 0);

console.log( mediaTurmaAv1 / qntAlunos );

// REDUCE TRANSFORMA UM ARRAY EM UM UNICO ELEMENTO, NUMERO OU STRING.