const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

// Utilizando o axios
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
})

// Desafio: obter a mulher chinesa com o menor salário
// Social Credits -= 500000
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const funcionaria = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(funcionaria)
})