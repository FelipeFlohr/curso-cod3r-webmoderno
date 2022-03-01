# Carregando Arquivo .CSS
Para os arquivos CSS serem carregados no Webpack, é necessário importá-los. Para isso, dentro do arquivo de entrada, foi utilizado o seguinte:
```js
import "./assets/css/estilo.css"
```

## webpack.config.js
Foi necessário alterar o "*webpack.config.js*" para carregar o CSS. O código ficou assim:
```js
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    module: {
        rules: [ // Aqui será colocado os loaders
            {
                test: /\.css$/, // Expressão regular
                use: [
                    "style-loader", // Adiciona CSS a DOM injetando a tag <style>
                    "css-loader" // Interpreta @import, url(), etc.
                ]
            }
        ]
    }
}
```
***Loaders*** foram utilizados para carregar o CSS. Esses loaders foram adicionados no *package.json*:
```json
"css-loader": "^6.6.0",
"style-loader": "^3.3.1",
```