// Tipos de declaração
// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x - y
}

// Named function expression
const mult = function mult(x, y) { // A vantagem desse tipo de declaração é na hora de debugar (pois irá aparecer o nome da função) ou na hora de ver o stack trace
    return x * y
}

/**
 * Obs.: enquanto as funções tradicionais (function declaration)
 * podem ser chamadas fora da ordem do algoritmo através do Hoisting,
 * as funções expression precisam estarem ligadas á essa ordem
 */