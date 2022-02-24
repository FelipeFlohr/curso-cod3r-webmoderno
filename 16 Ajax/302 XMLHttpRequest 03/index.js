// Carregando os estados através de listas
function ajax(config) {
    const xhr = new XMLHttpRequest()
    xhr.open(config.metodo, config.url, true)

    xhr.onreadystatechange = e => { // Todas as request possuem um ReadyState. https://www.w3schools.com/xml/xml_http.asp
        if (xhr.readyState === 4) { // ReadyState "4" é quando a requisição finalizou e a resposta está pronta
            if (xhr.status === 200) {
                config.sucesso(xhr.responseXML) // Envia o arquivo em um XML formatada, numa espécie de "mini-DOM"
            } else if (xhr.status >= 400) {
                config.erro({
                    codigo: xhr.status,
                    texto: xhr.statusText
                })
            }
        }
    }

    xhr.send()
}

ajax({
    url: "../Exercícios/dados/estados.xml", // Usando o XML invés do JSON
    metodo: "get",
    sucesso(resposta) {
        const estados = resposta.getElementsByTagName("estado")
        const itens = Array.from(estados).reduce((html, estado) => 
            html + `<li>${estado.attributes.nome.value}</li>`, ""
        )
        document.body.insertAdjacentHTML("beforeend", `<ul>${itens}</ul>`)
    },
    erro(e) {
        const msg = document.createTextNode(`${e.codigo}^: ${e.texto}`)
        document.body.appendChild(msg)
    }
})