// Parâmetros variáveis
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // Passando nenhum argumento
console.log(soma(10, 10)) // Passando argumentos