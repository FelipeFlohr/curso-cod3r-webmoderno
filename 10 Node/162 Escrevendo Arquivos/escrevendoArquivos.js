const fs = require("fs")

const produto = {
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15
}

// Transformando o objeto "produto" em JSON
fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), erro => {  // Forma assíncrona
    console.log(erro || "Arquivo salvo!") // Se erro for nulo, a mensagem "Arquivo salvo!" será mostrada
})