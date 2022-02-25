function exibirResultado(id, dados) { // "id" será GET ou POST
    const texto = JSON.stringify(dados)
    document.getElementById(id).innerHTML = texto
}

axios.get("/parOuImpar", {
    params: {
        numero: 5
    }
}).then(resposta => exibirResultado("get", resposta.data))

axios.post("/parOuImpar", {
    params: {
        numero: 5
    }
}).then(res => exibirResultado("post", res.data))