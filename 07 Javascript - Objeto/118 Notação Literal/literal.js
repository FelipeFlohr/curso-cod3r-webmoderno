/**
 * Uma notação literal de um objeto é basicamente um vetor de
 * chave : valor separado por "dois pontos"
 */

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // <- Utilizando notação literal
const obj2 = { a, b, c }

console.log(obj1, obj2)