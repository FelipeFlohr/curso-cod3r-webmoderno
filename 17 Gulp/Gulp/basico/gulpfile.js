const gulp = require("gulp") // <- Utilizando o padrão do Node CommonJS
const series = gulp.series

// Funções com o Gulp
function copiar(callback) { // <- Funções com o Gulp precisam de uma callback para notificar que a função foi concluída
    console.log("Tarefa de copiar!")
    return callback()
}

// Para o gulp reconhecer a função, a mesma precisa ser exportada
module.exports.default = series(copiar) // <- O gulp ao ser chamado precisa ter uma função no campo "default". Por isso, ao exportar, for atribuído ao mesmo a função "series"