const porta = 3003

const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDados")

// Fazendo um get utilizando o padrão Middleware
app.get("/produtos", (req, res, next) => {
    console.log("Middleware 1")
    next() // <- Com o next, o Middleware responde e passa para o Next
})

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte automáticamente para JSON
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Para obter o parâmetro que chegou na URL, menciona-se "req.params" e utiliza o parâmetro
})

app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

// Executando o Express
app.listen(porta, () => {
    console.log(`Servidor rodando e escutando na porta ${porta}.`)
})