const modoDev = process.env.NODE_ENV !== "production" // Pega a variável de ambiente do Node e verifica se ela está no modo "production"
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const uglifyJs = require("terser-webpack-plugin")
const minimizeCSS = require("css-minimizer-webpack-plugin")

module.exports = {
    mode: modoDev ? "development" : "production",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    optimization: {
        minimizer: [
            new uglifyJs({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),
            new minimizeCSS({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}