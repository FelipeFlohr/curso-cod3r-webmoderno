// Usando Template Strings. Essa adição chegou no ES2015

// Utilizando concatenação padrão
const nome = "Felipe"
const concatenacao = "Olá, " + nome + "!"

// Utilizando template
const template = `Olá, ${nome}!`

console.log("Concatenação: " + concatenacao)
console.log("Template: " + template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

// Isso é uma função "arrow". Será abordada mais para frente
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado!")}`)