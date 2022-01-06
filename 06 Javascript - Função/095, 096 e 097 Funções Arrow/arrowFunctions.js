// Funções Arrows (introduzidas no ES2015)

// Função normal
let dobro = function (a) {
    return 2 * a
}

// Função arrow
dobro = (a) => {
    return 2 * a
}

// Função arrow mais compacta
dobro = a => 2 * a // <- Return implícito

console.log(dobro(2))

// Função arrow sem parâmetro
let ola = () => "Olá"
console.log(ola())

// "this" e Funções Arrow
// Repare que não há a necessidade de "bindar" o this abaixo, pois
// o this dentro de uma função arrow é léxico, isto é, se 
function Pessoa() {
    this.idade = 0

    let intervalo = setInterval(() => {
        this.idade++
        console.log("Utilizando this dentro de uma função Arrow: " + this.idade)

        if (this.idade >= 5) {
            clearInterval(intervalo)
        }
    }, 1000)
}

new Pessoa

let objQualquer = {}
let comparaComThisArrow = (nomeParam, param) => console.log(nomeParam + " é igual a this dentro da Arrow Function: " + (this === param))
comparaComThisArrow("global", global)
comparaComThisArrow("module.exports", module.exports)
comparaComThisArrow = comparaComThisArrow.bind(objQualquer)
comparaComThisArrow("Com um objeto qualquer bindado á uma Arrow Function, esta mesma", objQualquer) // Uma arrow function é mais forte que um bind