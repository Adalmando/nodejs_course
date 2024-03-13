let cursos_idiomas = [
    {nome: "Inglês", preco: 2500, cargaHoraria: 160},
    {nome: "Espanhol", preco: 1500, cargaHoraria: 110},
    {nome: "Francês", preco: 3600, cargaHoraria: 200},
    {nome: "Chinês", preco: 5500, cargaHoraria: 400},
    {nome: "Alemão", preco: 3800, cargaHoraria: 230},
];

console.log("\n")
for(let curso of cursos_idiomas){
    let nome = curso.nome;
    let preco = curso.preco;
    let cargaHoraria = curso.cargaHoraria;
    let ehSuperior = preco/cargaHoraria;

    console.log("Nome do curso: " + nome);
    console.log("Carga horária do curso: " + cargaHoraria + " horas");
    console.log("Preço do curso: R$" + preco + ",00");

    if(ehSuperior >= 15){
         console.log("Hora/aula superior ou igual a R$15,00\n");
    }else{
        console.log("Hora/aula inferior a R$15,00\n");
    }
}