# Adicionando WebServer
Para adicionar um WebServer, foi necessário instalar o seguinte:
```json
"webpack-dev-server": "^4.7.4"
```

Para configurar o WebServer, o arquivo "*webpack.config.js*" ficou da seguinte maneira:
```js
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
    devServer: {
        static: {
            directory: "./public"
        },
        compress: true,
        port: 5500
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
```