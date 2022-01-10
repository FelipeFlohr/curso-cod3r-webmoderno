// Promises (promessa) - Usada em processamento assíncrono
// A mesma possuí dois destinos: o processamento foi executado com
// sucesso ou foi rejeitado

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        // Simulando um delay
        setTimeout(() => {
            if (frase.length > 3) {
                resolve(frase)
            } else {
                reject(frase)
            }
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Que legal")
    .then(frase => frase.concat("!!!")) // Trabalhando com o "resolve"
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => console.log("Ocorreu um erro: " + erro)) // Trabalhando com o "reject"

falarDepoisDe(2, "Oi")
    .then(frase => frase.concat("!!!"))
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => console.log("Ocorreu um erro: " + erro))