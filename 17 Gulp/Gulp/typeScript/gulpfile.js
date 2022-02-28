const { series } = require("gulp")
const gulp = require("gulp")
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json") // Passando o arquivo "tsconfig"

function transformacaoTS() {
    return tsProject.src() // Os arquivos TypeScript já foram definidos
        .pipe(tsProject()) // Transpila para JavaScript
        .pipe(gulp.dest("build")) 
}

exports.default = series(transformacaoTS)