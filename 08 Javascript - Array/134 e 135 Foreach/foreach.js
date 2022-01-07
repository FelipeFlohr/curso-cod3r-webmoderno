const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]

// Foreach em JS acontece de maneira similar ao Java
aprovados.forEach(function (nome, indice) {
    console.log(`Aprovado: #${indice} ${nome}`) // Para cada iteração do loop, esse callback será chamado
})

// Criando uma função com foreach
const exibirAprovados = aprovado => console.log("Aprovado: " + aprovado)
aprovados.forEach(exibirAprovados)

// Criando uma "versão" do foreach
Array.prototype.forEach2 = function(callback) { // Função foreach2 atribuida no Array
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // Executa a função callback passando o nome, o índice e array
    }
}

aprovados.forEach2(function (nome, indice, array) {
    console.log(`Nome: ${nome} | Índice: ${indice} | Array: ${array}`)
})