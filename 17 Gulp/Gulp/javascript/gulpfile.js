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