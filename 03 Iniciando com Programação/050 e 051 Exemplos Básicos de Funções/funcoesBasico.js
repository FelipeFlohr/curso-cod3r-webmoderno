// Para declarar uma função em JS, usa-se a palavra reservada "function"
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // Utilizando a função
imprimirSoma(2) // Utilizando a função com menos parâmetros que o requirido irá retornar NaN (Not a Number)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Utilizando a função com mais parâmetros do que os requiridos apenas irá contabilizar os selecionados (nesse caso os dois primeiros)
imprimirSoma() // Utilizando a função com menos parâmetros que o requirido irá retornar NaN (Not a Number)

// Função com retorno em JS funciona igual qualquer outra língua
function soma(a, b = 0) { // Pode-se passar um argumento "default" igual em Python
    return a + b;
}
console.log("Utilizando a função soma: " + soma(2))

// Armazenando uma função em uma variável
const somaConst = function (a, b) {
    console.log("Função em uma constante: " + (a + b))
}
somaConst(2, 3)

// Funções Arrow: introduzidas no ES2015, são uma forma reduzida de
// fazer uma função
const somaArrow = (a, b) => {
    return a + b
}
console.log("Utilizando função arrow: " + somaArrow(2, 3))

// Também é possível fazer um retorno implícito
const somaArrowImplicito = (a, b) => a + b
console.log("Utilizando função arrow com retorno implícito: " + somaArrowImplicito(2, 3))