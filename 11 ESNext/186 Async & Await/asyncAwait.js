// Async/Await - EcmaScript 8
// Serve para simplificar o uso de promises

const http = require("http")
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ""

            res.on("data", dados => {
                resultado += dados
            })

            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    const turmaA = await getTurma("A") // A palavra "await" somente funciona dentro de uma função async
    const turmaB = await getTurma("B")
    const turmaC = await getTurma("C")
    return [].concat(turmaA, turmaB, turmaC)
} // Por mais que haja um return de um array, toda função assíncrona retorna um "AsyncFunction"

obterAlunos().then(valor => console.log(valor))
