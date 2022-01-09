const porta = 3003

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados")

app.use(bodyParser.urlencoded( {extended: true} )) // <- Toda requisição passará por este middleware. Isto significa que, se a requisição vier em formato "urlencoded", o body parser irá fazer o parse da mesma

// Fazendo um CRUD utilizando o padrão Middleware
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

app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

// Executando o Express
app.listen(porta, () => {
    console.log(`Servidor rodando e escutando na porta ${porta}.`)
})