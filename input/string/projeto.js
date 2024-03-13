const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

console.log("=== CHUVAS DE METEOROS - HEMISFÉRIO SUL ===");

for(let objeto of chuvas_meteoros){

    let nome = objeto.nome;
    let velocidade = objeto.velocidade.replace("km/s", "quilômetros por segundo");
    
    let dia_pico = objeto.pico.split(" ")[1];
    let mes_pico = objeto.pico.split(" ")[0];
    
    let pico_formatado;
    
    switch(mes_pico){
        case "Jan": pico_formatado = `${dia_pico} de Janeiro`; break;
        case "Fev": pico_formatado = `${dia_pico} de Fevereiro`; break;
        case "Mar": pico_formatado = `${dia_pico} de Março`; break;
        case "Abr": pico_formatado = `${dia_pico} de Abril`; break;
        case "Mai": pico_formatado = `${dia_pico} de Maio`; break;
        case "Jun": pico_formatado = `${dia_pico} de Junho`; break;
        case "Jul": pico_formatado = `${dia_pico} de Julho`; break;
        case "Ago": pico_formatado = `${dia_pico} de Agosto`; break;
        case "Set": pico_formatado = `${dia_pico} de Setembro`; break;
        case "Out": pico_formatado = `${dia_pico} de Outubro`; break;
        case "Nov": pico_formatado = `${dia_pico} de Novembro`; break;
        case "Dez": pico_formatado = `${dia_pico} de Dezembro`; break;
        default: pico_formatado = "Mês inválido"; break;
    }

    console.log("\n")
    console.log("Nome: ".padEnd(24, ".") + nome.toU);
    console.log("Pico: ".padEnd(24, ".") + pico_formatado);
    console.log("Velocidade: ".padEnd(24, ".") + velocidade);
}