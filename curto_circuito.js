var media = 7;

var aprovado = media >= 7 ? true : false;

console.log(aprovado)

// CURTO CIRCUITO FAZ ALGO SE A CONDIÇÃO FOR TRUE, NESSE CASO O aprovado É TRUE, ENTAO ELE PRINTA:
aprovado&&console.log("Parabéns foi aprovado!");
// CASO A CONDIÇÃO SEJA FALSE, ELE RETORNA UM FALSE!