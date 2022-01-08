const moduloA = require("../../150 Módulos/exportando") // <- É necessário respeitar as letras maiúsculas e minúsculas pois o Linux tem problemas ao lidar com isso
console.log(moduloA.ola)
// Obs.: O arquivo "main" de um módulo é o "index.js"

// Utilizando módulos que veem no core do Node
const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080)