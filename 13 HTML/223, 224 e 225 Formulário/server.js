const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/usuarios", (req, res) => {
    console.log(req.body)
    res.send("<h1>Parabéns. Usuário incluído</h1>")
})

app.post("/usuarios/3", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("<h1>Parabéns. Usuário Alterado!</h1>")
})

app.listen(3003, () => {
    console.log("Servidor rodando e escutano na porta 3003")
})