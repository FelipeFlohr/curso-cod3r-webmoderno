// Função factory: função que retorna um objeto
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Siva"
    }
}

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarPessoa())
console.log(criarProduto())