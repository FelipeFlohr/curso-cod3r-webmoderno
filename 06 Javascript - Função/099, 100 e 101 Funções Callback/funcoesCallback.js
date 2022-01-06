// Funções Callback
// Função callback é uma função passada como argumento para outra fun-
// ção, na qual será executada quando um evento acontecer.

const fabricantes = [ "Mercedes", "Audi", "BMW" ]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// No caso abaixo, o evento é o loop que, quando encontra um novo ele-
// mento, dispara a função chamada
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

// Filtrando elementos com e sem callback
// Sem callback
const notas = [ 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0 ]

let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log("Notas baixas sem callback: " + notasBaixas1)

// Com callback
let notasBaixas2 = notas.filter(nota => nota < 7)
console.log("Notas baixas com callback: " + notasBaixas2)