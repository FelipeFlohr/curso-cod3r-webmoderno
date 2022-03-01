const gulp = require("gulp")
const webserver = require("gulp-webserver")
const watch = require("gulp-watch")

function servidor(callback) {
    return gulp.src("build")
        .pipe(webserver({
            port: 5500, // Porta do servidor
            open: true, // Abre o browser assim que o servidor é iniciado
            livereload: true // LiveReload habilitado
        }))
}

function monitorarArquivos(callback) {
    watch("src/**/*.html", () => gulp.series("appHTML")) // Se algum arquivo HTML for modificado, o mesmo gerará um novo "gulp" utilizando a task "appHTML"
    watch("src/**/*.scss", () => gulp.series("appCSS"))
    watch("src/**/*.js", () => gulp.series("appJS"))
    watch("src/assets/imgs/**/*.*", () => gulp.series("appIMG"))

    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}