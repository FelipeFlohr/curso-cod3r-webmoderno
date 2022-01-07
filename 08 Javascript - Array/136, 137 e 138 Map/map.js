// Função do Array: map()
// Serve para fazer uma transformação no Array. Em outras palavras,
// o Map é um "for" com propósito
const nums = [1, 2, 3, 4, 5]

const dobro = nums.map(valor => valor * 2)
console.log("Dobro do array: " + dobro)

// Fazendo uma função para parsear dinheiro
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`
const valores = [89.9320, 75.123, 99.2, 123.456, 78.90]
const valoresFormatados = valores.map(valor => paraDinheiro(valor))
console.log("Valores formatados: " + valoresFormatados)

// Desafio Map: retornar um array apenas com os preços dos objetos abaixo:
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
const precos = carrinho.map(e => {
    let elementoParseado = JSON.parse(e)
    return paraDinheiro(elementoParseado.preco)
})

console.log(precos)

// Fazendo uma implementação de map
Array.prototype.map2 = function(callback) {
    const array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }

    return array
}

const numeros = [1, 2, 3]
const triplicados = numeros.map2(e => e * 3)
console.log("Números triplicados: " + triplicados)