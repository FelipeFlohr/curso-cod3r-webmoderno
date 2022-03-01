const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: { // Define o output do arquivo
        filename: "principal.js",
        path: __dirname + "/public"
    }
}