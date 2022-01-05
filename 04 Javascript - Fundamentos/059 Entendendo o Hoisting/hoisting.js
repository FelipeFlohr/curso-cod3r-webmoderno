// Hoisting (tradução: içar/elevação)

// Em outras linguagens, isso seria impossível (retornaria um erro
// de variável não definida):
console.log("a = ", a) // Retorna undefined
var a = 2
console.log("a = ", a) // Retorna 2

// O motivo de no primeiro "console.log" retornar undefined ao invés
// de gerar um erro, é porque o próprio interpretador do JavaScript
// iça as variáveis para o topo do algoritmo. Ou seja, acontece mais
// ou menos isso daqui:
var b // Variável b declarada porém não definida
console.log("b = ", b) // Retorna undefined
b = 2
console.log("b = ", b) // Retorna 2

// Obs.: o efeito de Hoisting não ocorre com "let"