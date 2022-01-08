// Utilizando instâncias únicas
const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

// Utilizando instâncias novas
const contadorC = require("./instanciaNova")() // <- "()" serve para invocar a função factory
const contadorD = require("./instanciaNova")()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // Retornará 3. O motivo de isso acontecer é porque o Node faz cache das instâncias

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // Retornará 1. Isso pois uma nova instância foi criada