import bodyParser from "body-parser";
import express from "express";

const app = express()
app.use(express.static("../.")) // Por padrão, um GET em localhost:3000 irá retornar a página "index.html"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/teste", (req, res) => res.send("Ok"))
app.listen(3000, () => console.log("Servidor rodando e escutando na porta 3000"))