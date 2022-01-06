// Contexto léxico: contexto na qual algo foi declarado

const valor = "Global" // <- Contexto léxico na qual essa constante foi declarada é o contexto global

function minhaFuncao() { // <- Contexto léxico na qual essa função foi declarada é o diretamente no módulo do Node/arquivo. Não foi dentro de uma outra função, nem de um objeto, etc.
    console.log(valor)
}

function executar() {
    const valor = "Local" // <- Escopo local
    minhaFuncao()
}

executar() // Retornará "Global"
/**
 * O motivo da "minhaFuncao()" retornar global é devido ao contexto
 * léxico na qual foi escrita. No JavaScript, além das funções car-
 * regarem atributos, retornos, etc. Elas também carregas uma espécie
 * de "consiência" na qual determina o contexto léxico que foram inse-
 * ridas. Naquele caso, como a função foi escrita no contexto global,
 * consequentemente a constante "valor" imprimida foi a global.
 */