let variavelNaoDefinida // <- Essa variável é undefined, pois não foi inicializada
console.log("Valor undefined: " + variavelNaoDefinida)

let valor
valor = null // <- Essa variável é nula pois não está apontando para nenhum endereço na memória
console.log("Valor nulo: " + valor)

// Por boas práticas, não é bom explicitar uma variável undefined,
// mas sim - quando houver a necessidade de zerar o valor de uma va-
// riável - utilizar "null"

const produto = {}
console.log("Campo preco de produto: " + produto.preco)