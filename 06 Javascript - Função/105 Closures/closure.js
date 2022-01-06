// Closure é o escopo criado quando uma função é declarada, ou, em
// outras palavras, o contexto léxico em ação

const escopo = "Global"

function fora() {
    const escopo = "Local"
    function dentro() {
        return escopo
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Retorna local
/**
 * O motivo pela qual retorna "local" é por causa que o escopo na qual a
 * função dentro (que é o retorno da função fora) está é o escopo local
 * da função "fora()"
 */