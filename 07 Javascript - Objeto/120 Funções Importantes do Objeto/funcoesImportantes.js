const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log("Chaves do objeto pessoa: " + Object.keys(pessoa))
console.log("Valores do objeto pessoa: " + Object.values(pessoa))
console.log("Array multidimensional com as chaves e valores do objeto pessoa: " + Object.entries(pessoa))

Object.entries(pessoa).forEach(entry => {
    console.log("Chave: " + entry[0] + " | Valor: " + entry[1])
})

// O método "defineProperty" define uma propiedade com parâmetros
// personalizados, veja:
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, // <- Passível a ser listada
    writable: false, // Não pode ser modificada
    value: "06/01/2022"
})

console.log("Atributo dataNascimento do objeto pessoa: " + pessoa.dataNascimento)

// Object.assign (ES2015) atribui atributos á um objeto
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(destino, o1, o2)
console.log("\nObjeto 'destino' após utilizar assign():")
console.log(destino)

// Object.freeze congelo um objeto
const obj2 = {}
Object.freeze(obj2)
obj2.c = 1234
console.log("\nobj2 após ser freezado:")
console.log(obj2)