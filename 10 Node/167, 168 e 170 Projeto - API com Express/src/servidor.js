const porta = 3003

const express = require("express")
const app = express()

// Fazendo um get utilizando o padrão Middleware
app.get("/produtos", (req, res, next) => {
    console.log("Middleware 1")
    next() // <- Com o next, o Middleware responde e passa para o Next
})

app.get("/produtos", (req, res, next) => {
    res.send({ nome: "Notebook", preco: 1234.56 }) // Converte automáticamente para JSON
})

// Executando o Express
app.listen(porta, () => {
    console.log(`Servidor rodando e escutando na porta ${porta}.`)
})