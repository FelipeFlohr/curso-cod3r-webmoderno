import bodyParser from "body-parser";
import express from "express";
import multer from "multer";

const app = express()
app.use(express.static("../.")) // Por padrão, um GET em localhost:3000 irá retornar a página "index.html"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
   destination: function(req, file, callback) { // Definindo aonde o arquivo será salvo
        callback(null, ".")
   },
   filename: function (req, file, callback) { // Renomeando o arquivo para evitar incompatibilidades
       callback(null, `${Date.now()}_${file.originalname}`)
   }
})

const upload = multer({ storage }).single("arquivo") // O arquivo chegará na requisição com o nome "arquivo"

app.post("/upload", (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end("Ocorreu um erro.")
        }
    })
})

app.post("/formulario", (req, res) => {
    res.send({
        ...req.body, // <- Retorna todo o body utilizando o spreader
        id: 1
    })
})

app.get("/parOuImpar", (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? "par" : "impar"
    })
})

app.post("/parOuImpar", (req, res) => {
    const num = req.body.numero
    const par = parseInt(num) % 2 === 0
    res.send({
        resultado : par ? "par" : "impar"
    })
})

app.listen(3000, () => console.log("Servidor rodando e escutando na porta 3000"))