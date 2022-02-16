// Acessando atributos personalizados utilizando a notação ponto
// Obs.: só é possível fazer a leitura dos mesmos
const lista = document.querySelector("#compras")

console.log(lista.attributes)
console.log(lista.attributes[0])
console.log(lista.attributes.destino)
console.log(lista.attributes['data-urgencia'])