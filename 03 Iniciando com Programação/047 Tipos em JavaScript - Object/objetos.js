// Objetos em JavaScript possuem campos que são criados dinamicamente,
// veja:
const prod1 = {}
prod1.nome = "Celular YYZ"
prod1.preco = 2112,90
prod1["Desconto"] = 0.4 // <- NÃO É correto usar conchetes para criar um campo

console.log("Produto 1:")
console.log(prod1)

// Objetos também podem ser criados em blocos de código
const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90
}
console.log("\nProduto 2:")
console.log(prod2)