const gulp = require("gulp")
const { series, parallel } = require("gulp")

const antes1 = callback => {
    console.log("Tarefa Antes 1!")
    return callback()
}

const antes2 = callback => {
    console.log("Tarefa Antes 2!")
    return callback()
}

function copiar(callback) {
    gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"]) // <- Define os arquivos de entrada para esse workflow
        .pipe(gulp.dest("pastaB")) // <- Função "pipe" serve para aplicar transformações para os arquivos que foram definidos como os arquivos de entrada. A função "gulp.dest" serve para marcar a pasta de destino como a "pastaB"
    return callback()
}

const fim = callback => {
    console.log("Tarefa Fim!")
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)