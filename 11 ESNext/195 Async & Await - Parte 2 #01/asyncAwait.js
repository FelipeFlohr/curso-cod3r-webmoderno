// Async/Await - Parte 2
// Dá uma cara de síncrono para um código assíncrono

const esperar = (msg, tempo = 1500) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Esperando " + msg)
            res()
        }, tempo)
    })
}

function executarSemAsync() {
    esperar("sem async 1...")
    esperar("sem async 2...")
    esperar("sem async 3...")
}

// Toda função assíncrona devolve uma Promise
async function executarComAsync() {
    await esperar("com async 1...")
    await esperar("com async 2...")
    await esperar("com async 3...")

    return "Retorno"
}

executarSemAsync()
executarComAsync()

// Para pegar um retorno de uma função assíncrona, usa-se then()
executarComAsync().then(valor => console.log("Retorno da função assíncrona: " + valor))