# Processando JavaScript com Gulp
Neste módulo será utilizado os arquivos contidos na pasta "javascript". O Workflow será o seguinte:

1. Pegar os arquivos
2. Concatenar os arquivos em um arquivo só
3. Aplicar o [Babel](https://babeljs.io/) para deixar o código numa versão mais compatível
4. Minificar o arquivo

## Código
O arquivo Gulp fica da seguinte maneira:
```js
const { series } = require("gulp")
const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

function padrao(callback) {
    gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false, // Comentários não serão colocados no arquivo final
            presets: ['@babel/preset-env'] // Seleciona o preset como sendo a versão mais atual do JavaScript. Um outro preset, por exemplo, poderia ser o "ES2015"
        }))
        .on("error", err => console.log(err))
        .pipe(uglify()) // Irá minificar os arquivos
        .pipe(concat("codigo.min.js")) // Irá concatenar todos os arquivos selecionados
        .pipe(gulp.dest("build")) // Seleciona o destino como sendo a pasta "build"
    return callback()
}

module.exports.default = series(padrao)
```

Foi **necessário** alterar o *package.json* também:
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
    "typescript": "^4.5.5"
  }
}
```

## Arquivo final
O arquivo final após todas as transformações ficou da seguinte maneira:
```js
"use strict";var Calculadora={_resultado:0,get resultado(){return this._resultado},somar:function(t){return this._resultado+=t+(1<arguments.length&&void 0!==arguments[1]?arguments[1]:0),this},potencia:function(t,r){t=Math.pow(t,r);return this._resultado+=t,this},zerar:function(){return this._resultado=0,this},log:function(){console.log(this._resultado)}};
"use strict";console.log(Calculadora.somar(5).potencia(2,8).resultado),Calculadora.zerar().somar(2,3).somar(3).log();
```