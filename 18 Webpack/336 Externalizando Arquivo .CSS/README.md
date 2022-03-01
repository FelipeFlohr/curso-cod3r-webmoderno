# Externalizando Arquivo .CSS
No módulo anterior, os arquivos CSS estavam sendo carregados através da DOM. Nesse módulo os mesmos foram externalizados. Para isso, foi necessário baixar um plugin para o Webpack:
```json
"mini-css-extract-plugin": "^2.5.3"
```

## webpack.config.js
Foi necessário alterar o *webpack.config.js* para configurar o plugin, veja:
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
    plugins: [ // Define os plugins do Webpack
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Adiciona o loader do MiniCssExtractPlugin
                    "css-loader"
                ]
            }
        ]
    }
}
```

## Carregando no HTML
Para carregar o arquivo no HTML basta adicionar o arquivo normalmente ao Head, veja:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capítulo Webpack</title>
    <link rel="stylesheet" href="./estilo.css">
</head>
<body>
    <script src="./principal.js"></script>
</body>
</html>
```