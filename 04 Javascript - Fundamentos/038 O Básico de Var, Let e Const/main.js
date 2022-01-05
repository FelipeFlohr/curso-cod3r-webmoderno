// Declarando uma variável no JavaScript. Para isso, utilizam-se a
// palavra reservada "var" e/ou "let" (há uma diferença entre as duas)
var a = 3
let b = 4 // É recomendado utilizar "let", pois é uma forma mais moderna de declarar uma variável

// Dentro do JavaScript - diferentemente de qualquer outra língua que
// **eu** já vi - é possível redeclarar uma variável "let" dentro do
// mesmo escopo, como pode ser visto abaixo
var a = 30
b = 40
console.log(a, b)

// Constantes no JavaScript são declaradas usando a palavra reservada
// "const"
const pi = 3.14
console.log(pi)