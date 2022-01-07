const produtos = [
    { nome: "Notebook", preco: 3499.90, fragil: true },
    { nome: "Ferro de Passar Roupa", preco: 99.80, fragil: false },
    { nome: "iPad Pro", preco: 6999.99, fragil: true },
    { nome: "Copo de Plástico", preco: 8.99, fragil: false},
    { nome: "Copo de Vidro", preco: 12.49, fragil: true }
]

// Filter: como o próprio nome diz, serve para filtrar elementos
// de um Array. (Praticamente identico á interface funcional de
// mesmo nome no Java)
const produtosFrageis = produtos.filter(function (p) {
    return p.fragil
})
produtosFrageis.forEach(p => console.log(p.nome + " é frágil."))

const produtosCaros = produtos.filter(p => p.preco > 500)
produtosCaros.forEach(p => console.log(p.nome + " é um produto caro"))

// Fazendo uma implementação de "filter"
Array.prototype.filter2 = function(callback) {
    const arrayFiltrado = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arrayFiltrado.push(this[i])
        }
    }

    return arrayFiltrado
}

const produtosFrageis2 = produtos.filter2(p => p.fragil)
console.log(produtosFrageis2)