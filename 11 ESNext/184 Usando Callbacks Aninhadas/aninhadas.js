// Usando o método antigo (Callback aninhadas)

// Sem promise
const http = require("http")
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => {
        let resultado = ""

        // Abre-se uma stream de dados
        resposta.on("data", dados => { // Enquanto os dados estiverem chegando, os mesmos serão concatenados ao resultado
            resultado += dados
        })

        // Fecha-se a stream de dados
        resposta.on("end", () => { // Quando a stream acabar, a mesma fechará
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma("A", alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`)) // Pega os alunos A
    getTurma("B", alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`)) // Pega os alunos B
        getTurma("C", alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`)) // Pega os alunos C
            console.log(nomes)
        })
    })
})