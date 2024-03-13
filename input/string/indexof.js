let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

// se no comentário conter essa frase:
if ( comentario.indexOf(expressao_proibida) > -1 ){
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}

console.log(comentario); // venda de passaporte falso