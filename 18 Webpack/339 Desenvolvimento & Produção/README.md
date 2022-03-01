# Desenvolvimento e Produção & Minificando CSS e JS
No ambiente de desenvolvimento, os arquivos não são minificados, enquanto no de produção sim. Para definir os ambientes é necessário para uma variável de ambiente para o Node, na qual foi realizado através do "*package.json*", veja:
```json
"scripts": {
"start": "webpack",
"build": "cross-env NODE_ENV=production webpack"
}
```

## Definindo o ambiente no *webpack.config.js*
Para definir o ambiente no *webpack.config.js*, foi feito o seguinte:
```js
const modoDev = process.env.NODE_ENV !== "production" // Pega a variável de ambiente do Node e verifica se ela está no modo "production"
```

e nas opções:
```js
module.exports = {
    mode: modoDev ? "development" : "production"
```

## Executando o projeto
Para executar no ambiente de desenvolvimento é necessário digitar no terminal:
```
npm start
```

E para executar no ambiente de produção é necessário digitar no terminal:
```
npm run build
```

---
## Minificando os arquivos
Para minificar os arquivos foi necessário mexer no *webpack.config.js*. O mesmo ficou da seguinte maneira:
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
                test: /\.s?[ac]ss$/, // Aceitará arquivos .SASS, .SCSS, e .CSS
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader" // Adiciona o loader para SASS
                ]
            }
        ]
    }
}
```