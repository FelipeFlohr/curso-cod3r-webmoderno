// Herança em JS
const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 160
}

// Por padrão um objeto em JS tem como pai "Object.prototype"
console.log("Proto de Ferrari é igual ao Proto de Object: " + (ferrari.__proto__ == Object.prototype))
console.log("Proto de Object.prototype é nulo: " + (Object.prototype.__proto__ == null))

// Definindo a classe pai
const avo = { nome: "Avô" }
const pai = { __proto__: avo, nome: "Pai"} // Usa-se __proto__ para definir a classe pai
const filho = { nome: "Filho" }
Object.setPrototypeOf(filho, pai) // Também pode ser utilizado o método setPrototypeOf() de Object para definir a classe pai
const printar = [ filho, pai, avo ].forEach(e => console.log(`A classe pai de ${e.nome} é ${e.__proto__.nome}`))

// Criando instâncias filhas de uma classe
const pai2 = { nome: "Pedro", corCabelo: "Preto"}
const filha1 = Object.create(pai2)
filha1.nome = "Ana"
console.log("Cor do cabelo da filha 1: " + filha1.corCabelo)

// Criando instâncias com maior personalização
const filha2 = Object.create(pai2, {
    nome: { value: "Bia", writable: false, enumerable: true }
})
filha2.nome = "Maria" // Como "filha2.nome" é um atributo imutável, não será possível realizar a mudança
console.log(`O nome da filha 2 é: ${filha2.nome} | A cor do cabelo é: ${filha2.corCabelo}`)

// Checando se um atributo pertence ao objeto ou é herança
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(`${key} pertence á filha 2`) : console.log(`${key} é herança`)
}

// Simulando a palavra-chave "new" através de herança em função
function Carro(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

function novo(funcao, ...params) {
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, params)
    return obj
}

console.log(novo(Carro, "Volkswagen", "Up TSI 1.6"))