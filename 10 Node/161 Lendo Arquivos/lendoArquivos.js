const fs = require("fs") // Importa o "file system"

const caminho = __dirname + "/arquivo.json"

// Carregando arquivo de forma síncrona
const conteudo = fs.readFileSync(caminho, "utf8")
console.log(conteudo + " | Forma síncrona")

// Carregando arquivo de forma assíncrona
fs.readFile(caminho, "utf-8", (erro, conteudo) => {
    const config = JSON.parse(conteudo) // Transformando o JSON em um objeto
    console.log(`\n${config.db.host}: ${config.db.port} | Forma assíncrona`)
})

// Outra maneira de ler um JSON é chamando ele pelo require
const config = require("./arquivo.json")
console.log(`\n${config.db} | Forma síncrona`)

// Lendo um diretório
fs.readdir(__dirname, (erro, arquivos) => {
    console.log("\nConteúdo da pasta de forma assíncrona:")
    console.log(arquivos)
})