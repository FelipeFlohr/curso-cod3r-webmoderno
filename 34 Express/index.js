const express = require("express")
const app = express()

// Inicia a aplicação
app.listen(3000, () => {
    console.log("Aplicação rondando na porta 3000.")
})

// Com o "use", qualquer requisição HTTP retornará "Bom dia!"
app.use("/opa", (req, res) => {
    res.send("Bom dia!")
})

app.get("/mensagem", (req, res) => {
    res.send("Mensagem de bom dia!")
})