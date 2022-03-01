# Configurando a Pasta de Saída
Para definir a pasta de saída, é necessário colocar o atributo "output" no "*webpack.config.js*", veja:
```js
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: { // Define o output do arquivo
        filename: "principal.js",
        path: __dirname + "/public"
    }
}
```