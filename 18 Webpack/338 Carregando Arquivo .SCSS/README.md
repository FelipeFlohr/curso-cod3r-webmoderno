# Carregando Arquivo .SCSS
Para carregar um arquivo .SCSS foi necessário adicionar os seguintes plugins:
```json
"node-sass": "^7.0.1",
"sass-loader": "^12.6.0"
```

## webpack.config.js
O arquivo *webpack.config.js* ficou da seguinte maneira:
```js
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
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

## Referênciando os arquivos .SCSS
Os arquivos .SCSS foram referenciados em "src/assets/index.js":
```js
// Importando os arquivos utilizados
import "./css/estilo.css"
import "./scss/index.scss"
```
O mesmo foi importado em "src/principal.js":
```js
import "./assets" // Dentro da pasta "assets", procurará pelo arquivo "index.js"
```

## Arquivos .SCSS
Os arquivos .SCSS utilizados foram os seguintes:

"src/assets/scss/index.scss"
```scss
$cor-botao-padrao: #FFF;
$cor-bg-botao-padrao: #19B3E6;

@import "botao";
```

"src/assets/scss/botao.scss"
```scss
.botao {
    background-color: $cor-bg-botao-padrao;
    color: $cor-botao-padrao;
    font-size: 1.8em;
}
```

## Resultado
O resultado foi o seguinte:

"public/estilo.css"
```css
/*!********************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/estilo.css ***!
  \********************************************************************************************************************/
body {
  background-color: red; }

/*!*********************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/index.scss ***!
  \*********************************************************************************************************************/
.botao {
  background-color: #19B3E6;
  color: #FFF;
  font-size: 1.8em; }
```