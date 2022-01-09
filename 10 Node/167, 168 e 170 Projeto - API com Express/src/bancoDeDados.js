// Simulando um DB
const sequence = {
    _id: 1,
    get id() { return this._id}
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // Se o ID não estiver setado, então o ID do produito vai ser o ID do sequence
    produtos[produto.id] = produto
    return produto // Retorna o produto já com o ID
}

function getProduto(id) {
    return produtos[id] || {} // Caso o produto retornado seja nulo, então retornará um objeto vazio
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }