## Executando várias tarefas em série
Possuímos as seguintes tarefas:
```js
const antes1 = callback => {
    console.log("Tarefa Antes 1!")
    return callback()
}

const antes2 = callback => {
    console.log("Tarefa Antes 2!")
    return callback()
}

function copiar(callback) {
    console.log("Tarefa de copiar!")
    return callback()
}

const fim = callback => {
    console.log("Tarefa Fim!")
    return callback()
}
```

Para executar elas em série, atribui-se as mesmas na função Default, veja:
```js
module.exports.default = series( // Passando várias tarefas para serem executadas em série.
    antes1,
    antes2,
    copiar,
    fim
)
```

## Executando tarefas em paralelo
Para tarefas em paralelo é necessário os seguintes imports:
```js
const { series, parallel } = require("gulp")
```

Para executá-las, usa-se:
```js
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)
```

Dessa maneira, as tarefas "antes1" e "antes2" serão executadas em paralelo, contudo, somente após o fim das tarefas "antes1" e "antes2" que as tarefas "copiar" e "fim" serão executadas.

## Criando a Pasta B fazendo cópia da Pasta A
A função para copiar os arquivos .txt de uma pasta para outra é a seguinte:
```js
function copiar(callback) {
    gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"]) // <- Define os arquivos de entrada para esse workflow
        .pipe(gulp.dest("pastaB")) // <- Função "pipe" serve para aplicar transformações para os arquivos que foram definidos como os arquivos de entrada. A função "gulp.dest" serve para marcar a pasta de destino como a "pastaB"
    return callback()
}
```

Também é possível definir os arquivos de entrada da seguinte maneira:
```js
gulp.src("pastaA/**/*.txt")
```

Dessa maneira, todos os arquivos dentro da "pastaA" que tiverem a extensão .txt serão copiados.