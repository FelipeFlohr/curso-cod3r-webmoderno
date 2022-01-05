function tratarErroELancar(erro) {
    throw new Error("Nome inválido")
}

function printarNomeCaixaAlta(obj) {
    try {
        console.log(obj.name.toUpperCase())
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { name: "Roberto" }
const obj2 = { nome: "Felipe" }
printarNomeCaixaAlta(obj)
printarNomeCaixaAlta(obj2)