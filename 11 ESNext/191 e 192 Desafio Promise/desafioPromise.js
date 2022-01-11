/**
 * Desafio: criar uma promise que lê um arquivo e retorna os dados
 * do mesmo.
 */

const fileSystem = require("fs")

const lerArquivo = function(path) {
    const fullPath = __dirname + path
    return new Promise((resolve) => {
        const dados = fileSystem.readFile(fullPath, (_, dados) => resolve(dados.toString()))
    })
}

lerArquivo("\\dados.txt").then(dados => console.log(dados))