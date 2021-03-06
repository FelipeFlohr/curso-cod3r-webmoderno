const gulp = require("gulp")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const sass = require("gulp-sass")(require("sass"))
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")

function appHTML(callback) {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"))
}

function appCSS(callback) {
    return gulp.src("src/assets/sass/index.scss") // Arquivo principal SCSS
        .pipe(sass().on("error", sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest("build/assets/css"))
}

function appJS(callback) {
    return gulp.src("src/assets/js/**/*.js")
        .pipe(babel({ presets: ["@babel/preset-env"]}))
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("build/assets/js"))
}

function appIMG(callback) {
    return gulp.src("src/assets/imgs/**/*.*")
        .pipe(gulp.dest("build/assets/imgs"))
}

gulp.task("appHTML", appHTML) // Registra uma task no Gulp
gulp.task("appCSS", appCSS)
gulp.task("appJS", appJS)
gulp.task("appIMG", appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}