/*
 * Função em JavaScript é First Class Object, também chamado de
 * Citizens, ou no mundo funcional: High-order function. Isso signi-
 * fica que é possível tratar funções como valores, armazená-las em
 * variáveis e constantes, passar funções como parâmetros em outras
 * funções e até ter funções como retorno de outras funções.
 */

// Criando função de forma literal
function fun1() { }

// Armazenar função em variável
const fun2 = function () { }

// Armazenar função em um array
const array = [function (a, b) { return a + b}, fun1, fun2]

// Utilizando uma função dentro do array
console.log(array[0](2, 3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return "Opa!" }
console.log(obj.falar())

// Passando função como parâmetro
function run(funcao) {
    funcao()
}

run(function () { console.log("Função dentro de função!") })

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3) // <- Usa-se essa sintaxe para invocar a função