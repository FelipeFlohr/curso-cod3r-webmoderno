// IIFE (Immediately Invoked Function Expression)
// Uma função anônima que na hora da declaração já ocorre a invocação.
// Serve para fugir do escopo global, tendo em vista que uma variável
// global é fácilmente acessada por todos e isso pode criar bugs inde-
// sejáveis na aplicação.

/**
 * A síntaxe de uma IIFE é a seguinte: a função precisa ser coberta
 * entre parenteses e para de fato ser chamada é necessário utilizar
 * parenteses () no final.
 */

// IIFE - evita o escopo global
(function() {
    console.log("Será executado na hora!")
    console.log("Foge do escopo mais abrangente!")
})() // <- Uso dos () para chamá-la

// Não evita o escopo global
console.log("Será executado na hora!")
console.log("Dentro do escopo mais abrangente!")