const app = require("express")()
const consign = require("consign")

consign()
    .then("./config/middlewares.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app) // Injeta as dependências do Consign no App

app.listen(3000, () => {
    console.log("Backend executando na porta 3000")
})