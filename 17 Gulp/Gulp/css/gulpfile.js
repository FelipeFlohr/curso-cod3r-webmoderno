const { parallel } = require("gulp")
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

// Desafio
function transformacaoHTML() {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("build"))
}

exports.default = parallel(transformacaoCSS, transformacaoHTML)