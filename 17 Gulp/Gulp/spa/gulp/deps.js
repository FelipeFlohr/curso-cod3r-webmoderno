const gulp = require("gulp")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function depsCSS(callback) {
    return gulp.src("node_modules/font-awesome/css/font-awesome.css")
        .pipe(uglifycss({ "uglyComments": false })) // Não irá remover os comentários pois há licença
        .pipe(concat("deps.min.css"))
        .pipe(gulp.dest("build/assets/css"))
}

function depsFonts(callback) {
    return gulp.src("node_modules/font-awesome/fonts/*.*") // Irá pegar todas as fontes dentro da pasta
        .pipe(gulp.dest("build/assets/fonts"))
}

module.exports = {
    depsCSS,
    depsFonts
}