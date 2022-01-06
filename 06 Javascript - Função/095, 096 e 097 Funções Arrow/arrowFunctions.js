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