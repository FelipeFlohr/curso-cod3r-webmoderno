// Move um elemento do inicio até o fim
function mover(elemento, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo

    aparecerElemento(elemento)
    if (novoInicio >= fim) {
        elemento.style.left = novoInicio + "px"
        setTimeout(() => mover(elemento, novoInicio, fim, passo, callback), 7)
    } else {
        desaparecerElemento(elemento)
        callback() // Será chamado assim que a imagem terminar de ter sido movida
    }
}

// Faz um elemento aparecer
function aparecerElemento(elemento) {
    elemento.style.display = "block"
}

// Faz um elemento desaparecer
function desaparecerElemento(elemento) {
    elemento.style.display = "none"
}

// Gera a posição de inicio de um elemento
function gerarPosicaoInicio(elemento) {
    aparecerElemento(elemento)
    const pos = window.innerWidth + elemento.clientWidth
    desaparecerElemento(elemento)
    return pos
}

// Gera a posição de fim de um elemento
function gerarPosicaoFinal(elemento) {
    aparecerElemento(elemento)
    const pos = 0 - elemento.clientWidth
    desaparecerElemento(elemento)
    return pos
}

// Move todos os elementos uma vez
function moverTodosElementos() {
    console.log("Começando a mover")
    const qntElementos = document.getElementsByTagName("p").length
    let elementoAtualIndex = 0
    let elementoAtual = document.getElementsByTagName("p").item(elementoAtualIndex)

    // Checa se o índice do elemento atual é compatível
    const aumentarIndex = () => {
        elementoAtualIndex += 1
        elementoAtual = document.getElementsByTagName("p").item(elementoAtualIndex)
    }

    // Move todos os elementos
    const moverElemento = () => {
        if (elementoAtualIndex < qntElementos) {
            mover(elementoAtual, gerarPosicaoInicio(elementoAtual), gerarPosicaoFinal(elementoAtual), 15, () => {
                aumentarIndex()
                moverElemento()
            })
        } else {
            elementoAtualIndex = 0
            elementoAtual = document.getElementsByTagName("p").item(elementoAtualIndex)
            moverElemento()
        }
    }

    moverElemento()
}

window.onload = () => moverTodosElementos()