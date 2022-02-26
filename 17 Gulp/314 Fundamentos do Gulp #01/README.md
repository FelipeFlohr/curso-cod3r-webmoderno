# Gulp
O Gulp serve para automatizar o workflow da aplicação.

## Copiando arquivos da pasta A para a pasta B
Por enquanto, o código abaixo será apenas um "teste":
```js
const gulp = require("gulp") // <- Utilizando o padrão do Node CommonJS
const series = gulp.series

// Funções com o Gulp
function copiar(callback) { // <- Funções com o Gulp precisam de uma callback para notificar que a função foi concluída
    console.log("Tarefa de copiar!")
    return callback()
}

// Para o gulp reconhecer a função, a mesma precisa ser exportada
module.exports.default = series(copiar) // <- O gulp ao ser chamado precisa ter uma função no campo "default". Por isso, ao exportar, foi atribuído ao mesmo a função "series"
```
Para chamar o Gulp, o seguinte comando do terminal pode ser executado na pasta "Gulp/basico":
```
gulp
```

O resultado obtido foi:
```js
[19:29:46] Using gulpfile ~\minhas-pastas\curso-cod3r-webmoderno\17 Gulp\Gulp\basico\gulpfile.js
[19:29:46] Starting 'default'...
[19:29:46] Starting 'copiar'...
Tarefa de copiar!
[19:29:46] Finished 'copiar' after 2.41 ms
[19:29:46] Finished 'default' after 5.66 ms
```