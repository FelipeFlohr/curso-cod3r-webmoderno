// ES - Map: estrutura chave-valor na qual a chave pode ser uma função, um objeto, etc.
const tecnologias = new Map()
tecnologias.set("react", { framework: false })
tecnologias.set("angular", { framework: true })

// Pegando um elemento
console.log(tecnologias.get("react"))

// Criando uma lista variada e percorrendo por ela
const chavesVariadas = new Map([
    [function () {}, "Função"],
    [{}, "Objeto"],
    [123, "Número"],
])

chavesVariadas.forEach((valor , chave) => {
    console.log(chave, valor)
})

// Verificando se há um item no Map
console.log("\nHá o item 123: " + chavesVariadas.has(123))