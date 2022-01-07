// Reduce tem o objetivo de "reduzir" os valores de um array resul-
// tando num único valor de retorno
const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true }
]

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    return acumulador + atual
})

console.log("Resultado de todas as notas: " + resultado)

// O método também suporta passar um valor inicial
const numeros = [2, 4, 6, 3]
const resultado2 = numeros.reduce((acumulador, atual) => {
    return acumulador + atual
}, 10)
console.log("Resultado da soma com o acumulador inicial em 10: " + resultado2)

// Desafios
// Desafio 1: Utilizar o reduce para dizer se todos os alunos são bolsistas
// Desafio 2: Utilizar o reduce para dizer se algum aluno é bolsista

// Desafio 1
const todosBolsistas = alunos.reduce((acumulador, atual) => {
    if (!atual.bolsista) {
        acumulador = false
    }
    return acumulador
}, true)
console.log("\nTodos os alunos são bolsistas: " + todosBolsistas)

// Desafio 2
const algumBolsista = alunos.reduce((acumulador, atual) => {
    if (atual.bolsista) {
        acumulador = true
    }
    return acumulador
}, false)
console.log("Algum aluno é bolsista: " + algumBolsista)

// Implementando uma versão própria de reduce
Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1

    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

const nums = [2, 4, 4]
console.log("Utilizando o reduce 2: " + nums.reduce(function (acumulador, atual) {
    return acumulador + atual
}, 10))