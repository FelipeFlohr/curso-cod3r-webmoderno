// Importando através do Node utilizando a prática do CommonJS
const moduloA = require("./exportando.js")
const moduloB = require("./exportandoObjeto")

// Chamando imports do Módulo A
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

// Chamando imports do Módulo B
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)