var produto = "Telefone";

switch(produto){

    // PODEMOS CHECAR VÁRIOS CASOS COM A MESMA SENTENÇA:
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto desconhecido ou inválido");
        break;
}



// OUTRO EXEMPLO: 
var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}