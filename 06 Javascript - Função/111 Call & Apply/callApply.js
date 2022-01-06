// Call & Apply são duas formas diferentes de executar uma função
// dentro de JavaScript
function getPreco(moeda = "R$", imposto = 0) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

global.preco = 20 // <- Dessa maneira se define um valor global
global.desc = 0.1
const carro = { preco: 49990, desc: 0.20, nome: "Fiat Mobi", getPreco }

console.log(getPreco()) // <- Chamando a função sem parâmetros
console.log(carro.getPreco())

// Chamando com call e apply
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

/**
 * A diferença entre call e apply está justamente nos parâmetros das
 * duas funções:
 * - call(contexto, parâmetros...)
 * - apply(contexto, [parâmetros]) <- Os parâmetros do apply() são passados dentro de um array
 */