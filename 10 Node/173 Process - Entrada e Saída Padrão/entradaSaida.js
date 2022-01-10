// Criando flags para execução do arquivo
const anonimo = process.argv.indexOf("-a") != -1 // Retorna um booleano se a flag "-a" estiver presente na execução do arquivo
console.log(anonimo)

if (anonimo) {
    process.stdout.write("Fala Anônimo!\n")
    process.exit()
} else {
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on("data", data => { // "data" é o tipo necessário pagar obter informações de entrada do teclado
        const nome = data.toString().replace("\r\n", "")

        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}