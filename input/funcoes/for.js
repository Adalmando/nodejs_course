let funcionarios = [
    {id: 0, nome: "João", habilitado: false},
    {id: 1, nome: "Pedro", habilitado: true},
    {id: 2, nome: "Marcos", habilitado: false},
    {id: 3, nome: "Antonio", habilitado: false}
];

let encontrouHabilitado = false;

for(let contador = 0; contador < funcionarios.length; contador++){
    
    if(funcionarios[contador].habilitado){
        encontrouHabilitado = true;
        console.log("Encontramos um funcionário habilitado: " +funcionarios[contador].nome)
        break; // acaba esse laço de repetição por aqui.
    }
}

if(!encontrouHabilitado){
    console.log("Nenhum funcionário habilitado foi encontrado!")
}