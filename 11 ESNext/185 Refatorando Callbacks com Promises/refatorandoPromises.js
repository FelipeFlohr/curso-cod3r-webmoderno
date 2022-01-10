// Com promise
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

// Chamando várias promises de uma vez
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")]) // Dispara todas as promises em paralelo, e quando todas estiver prontas, executa os "then" abaixo
    .then(turmas => [].concat(...turmas)) // Como "turmas" é um parâmetro que recebe um Array, o mesmo vai ser utilizado com o operador rest para espalhar na matriz
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))