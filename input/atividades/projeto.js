import input from 'readline-sync';

console.log("Aplicação de juros:\n");

let valor = input.questionInt("Informe o valor devido: R$ ");

if(valor <= 0)
{
    console.log("O valor da dívida deve ser maior que zero!\n");
} 
else 
{
    let dias = input.questionInt("Informe quantos dias se passaram desde o vencimentodo boleto: ");
    
    if(dias == 0)
    {
        console.log("Você está em dia!\n");
    } 
    else 
    {
        let taxa_juros = (dias > 15) ? 10 : 5;
        let valor_total = ((valor*taxa_juros) / 100) + valor;
        console.log("\nValor original da dívida: R$ " + valor);
        console.log("Dias atrasados: " + dias);
        console.log("Taxa de juros: " + taxa_juros + "%");
        console.log("Valor total com juros: R$ " + valor_total + "\n");
    }    
}