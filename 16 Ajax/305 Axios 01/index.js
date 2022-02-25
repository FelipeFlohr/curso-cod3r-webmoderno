const url = "../Exercícios/dados/estados.json"
axios(url).then(resp => {
    const itens = resp.data.reduce(
        (html, estado) => html + `<li>${estado.nome}</li>`, ""
    )
    document.body.insertAdjacentHTML("beforeend", `<ul>${itens}</ul>`)
})