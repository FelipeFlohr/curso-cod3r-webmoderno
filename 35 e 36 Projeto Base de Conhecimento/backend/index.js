const app = require("express")()
const consign = require("consign")
const db = require("./config/db")

app.db = db

consign()
    .then("./config/middlewares.js")
    .then("./api/validation.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app) // Injeta as dependências do Consign no App

app.listen(3000, () => {
    console.log("Backend executando na porta 3000")
})