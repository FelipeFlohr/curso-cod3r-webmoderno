// XMLHttpRequest é a forma mais antiga de se implementar Ajax
function ajax(config) {
    const xhr = new XMLHttpRequest()
    xhr.open(config.metodo, config.url, true) // Parâmetros, respectivamente: método HTTP, URL da Request, Requisição de forma assíncrona

    xhr.onload = e => {
        if (xhr.status === 200) {
            config.sucesso(xhr.response)
        } else if (xhr.status >= 400) {
            config.erro({
                code: xhr.status,
                text: xhr.statusText
            })
        }
    }

    xhr.send()
}

ajax({
    url: "../Exercícios/dados/estados.json",
    metodo: "get",
    sucesso(resposta) {
        const estados = JSON.parse(resposta)

        const linhas = estados.map(estado => { // Fazendo um map dos estados para um conjunto de elementos da DOM
            const tdId = document.createElement("td") // td = Table Data
            tdId.innerHTML = estado.id

            const tdNome = document.createElement("td")
            tdNome.innerHTML = estado.nome

            const tdSigla = document.createElement("td")
            tdSigla.innerHTML = estado.sigla

            const tr = document.createElement("tr")

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSigla)

            return tr
        })

        const tabela = document.createElement("table")
        linhas.forEach(linha => tabela.appendChild(linha))
        document.body.appendChild(tabela)
    },
    erro(e) {
        const msg = document.createTextNode(`${e.code}: ${e.text}`)
    }
})