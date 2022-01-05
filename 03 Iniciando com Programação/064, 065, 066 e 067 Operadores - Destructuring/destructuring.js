// Operador Destructuring (introduzido no ES2015)
// Como o próprio nome diz, serve para desestruturar um objeto, trans-
// formando campos do mesmo em variáveis

const pessoa = {
    nome: "Felipe",
    idade: 18,
    endereco: {
        logradouro: "Rua Amarelo",
        numero: 1000
    }
}

// Extrai os dois campos e transforma-os em constantes
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Extraindo de um campo com objeto
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// Destructuring com Arrays
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// Utilizando destructuring para funções
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand(20, 50))
console.log(rand({ min: 955 }))