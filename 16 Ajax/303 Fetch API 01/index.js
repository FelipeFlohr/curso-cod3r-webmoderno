// Fetch API - Um substituto moderno para o XMLHttpRequest
const url = "../Exercícios/dados/estados.json"
fetch(url) // Retorna uma promise
    .then(response => response.json()) // Retorna o conteúdo da resposta em JSON
    .then(estados => {
        const itens = estados.reduce(
            (html, estado) => html + `<li>${estado.nome}</li>`, ""
        )
        document.body.insertAdjacentHTML("beforeend", `<ul>${itens}</ul>`)
    })