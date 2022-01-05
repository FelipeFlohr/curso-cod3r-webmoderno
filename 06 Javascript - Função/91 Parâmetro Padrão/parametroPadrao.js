// Estratégias para criar parâmetro padrão em JS

// Estratégia 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log("Soma 1: 3 + 3 + 3 -> " + soma1(3, 3, 3)) // Irá retornar 9
console.log("Soma 1: 0 + 0 + 0 -> " + soma1(0, 0, 0)) // Irá retornar 3
// O motivo na qual a "soma 1" retorna 3 utilizando apenas 0 se dá
// ao fato de 0 ser considerado falso

// Estratégia 2, 3 e 4
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // A variável "a" receberá "a" se for diferente de undefined, senão receberá 1
    b = 1 in arguments ? b : 1 // Se existir um argumento no índice #1, "b" receberá este valor, senão receberá 1
    c = isNaN(c) ? 1 : c // Se "c" não for um número, então receberá 1, senão receberá "c". Esta é a melhor estratégia tendo em vista que o objetivo é realizar uma soma
    return a + b + c
}

console.log("Soma 2: 'teste' + false + 5 -> " + (soma2("teste", false, 5)))

// Utilizando valores padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log("Soma 3: 1 -> " + soma3(1))