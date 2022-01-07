const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) // Transformando o objeto em JSON

// Fazendo um parse de uma string para JSON
try {
    console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Inválido pois as chaves não são marcadas por aspas
} catch (e) {
    console.log("Este formato é inválido. Chaves precisam estar marcadas com aspas")
}

try {
    console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
} catch (e) {
    console.log("Este formato é inválido. Chaves precisam estar marcadas com aspas duplas")
}

try {
    console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
} catch (e) {
    console.log("Este formato é inválido.")
}