# Processando [SASS](https://sass-lang.com/) com Gulp
Para processar SASS com o Gulp, foi necessário mexer no package.json
```json
{
  "name": "gulp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Felipe Matheus Flohr",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.17.5",
    "@babel/preset-env": "^7.16.11",
    "babel-core": "^6.26.3",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-cli": "^2.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-sass": "^5.1.0",
    "gulp-typescript": "^6.0.0-alpha.1",
    "gulp-uglify": "^3.0.2",
    "gulp-uglifycss": "^1.1.0",
    "sass": "^1.49.9",
    "typescript": "^4.5.5"
  }
}
```

## gulpfile
O arquivo Gulp ficou da seguinte maneira:
```js
const { series } = require("gulp")
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function transformacaoCSS() {
    return gulp.src("src/sass/index.scss") // Seleciona o arquivo index.scss. Este arquivo contem imports para todos os outros arquivos SCSS
        .pipe(sass().on("error", sass.logError)) // Pega o SASS e converte pra CSS, e se houver algum erro exibe
        .pipe(uglifycss({ "uglyComments": true })) // Minimifica o CSS
        .pipe(concat("estilo.min.css")) // Concatena tudo em um arquivo
        .pipe(gulp.dest("build/css")) // Salva tudo na pasta "build"
}

exports.default = series(transformacaoCSS)
```
---
## Desafio
Desafio: copiar o HTML da pasta para o build fazendo os processamentos necessários.

Resultado:

gulpfile.js
```js
function transformacaoHTML() {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("build"))
}

exports.default = parallel(transformacaoCSS, transformacaoHTML)
```