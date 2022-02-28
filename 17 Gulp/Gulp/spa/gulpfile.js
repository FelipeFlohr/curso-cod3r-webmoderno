const { series, parallel } = require("gulp")
const gulp = require("gulp")

const { appHTML, appCSS, appJS, appIMG } = require("./gulp/app")
const { depsCSS, depsFonts } = require("./gulp/deps")
const { monitorarArquivos, servidor } = require("./gulp/server")

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)