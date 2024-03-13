import entradaDados from 'readline-sync';

let array_anos = [
    {ano: 2010, salario: 510, ipca: 5.91},
    {ano: 2011, salario: 545, ipca: 6.50},
    {ano: 2012, salario: 622, ipca: 5.84},
    {ano: 2013, salario: 678, ipca: 5.91},
    {ano: 2014, salario: 724, ipca: 6.41},
    {ano: 2015, salario: 788, ipca: 10.67},
    {ano: 2016, salario: 880, ipca: 6.29},
    {ano: 2017, salario: 937, ipca: 2.95},
    {ano: 2018, salario: 954, ipca: 3.75},
    {ano: 2019, salario: 998, ipca: 4.31},
    {ano: 2020, salario: 1045, ipca: 4.52},
];

console.log("Escolha uma das alternativas:\n");
console.log("1- Listar os salários mínimos de 2010 à 2020");
console.log("2- Listar o índice IPCA de 2010 à 2020");
console.log("3- Comparação entre o percentual de aumento salarial e o IPCA\n");

let opcao = entradaDados.questionInt("Digite o número da sua escolha: ");

switch(opcao){
    
    case 1: 
        for(let objeto of array_anos){
            let label_ano = "Ano: ".padEnd(30, ".");
            let valor_ano = objeto.ano;
            let label_salario = "Salário mínimo: ".padEnd(30, ".");
            let valor_salairo = "R$ " + objeto.salario + ",00";
            let salario_formatado = label_ano + valor_ano + "\n" + label_salario + valor_salairo;
            console.log("\n" + salario_formatado);
        }
    break;

    case 2: 
        for(let objeto of array_anos){
            let label_ano = "Ano: ".padEnd(30, ".");
            let valor_ano = objeto.ano;
            let label_ipca = "Inflação IPCA: ".padEnd(30, ".");
            let valor_ipca = objeto.ipca.toFixed(2) + "%";
            let ipca_formatado = label_ano + valor_ano + "\n" + label_ipca + valor_ipca;
            console.log("\n" + ipca_formatado);
        }
    break;

    case 3: 
        for(let contador = 0; contador < array_anos.length; contador++){

            let label_ano = "Ano: ".padEnd(30, ".");
            let valor_ano = array_anos[contador].ano;
                
            let label_salario = "Salário mínimo: ".padEnd(30, ".");
            let valor_salario = "R$ " + array_anos[contador].salario.toFixed(2) + ",00";

            let label_cresimento = "Crescimento salarial: ".padEnd(30, ".");
                
            let valor_cresimento = 0.00;

            if(contador != 0){
                let objeto_anterior = array_anos[contador-1];
                let salario_anterior = objeto_anterior.salario;
                let salario_atual = array_anos[contador].salario;
                valor_cresimento = (((salario_atual - salario_anterior) / salario_anterior) * 100.00).toFixed(2);
            }else{
                valor_cresimento = "-";
            }
            

            let label_ipca = "Inflação IPCA: ".padEnd(30, ".");
            let valor_ipca = array_anos[contador].ipca;
                
            let comparacao_formatada = 
            `${label_ano}${valor_ano}
            ${label_salario}${valor_salario}
            ${label_cresimento}${valor_cresimento}%
            ${label_ipca}${valor_ipca}`;

            console.log("\n" + comparacao_formatada);
        }
    break;
    
    default: console.log("Opção inválida"); break;
}