function exibirResultado(id, dados) {
    const texto = JSON.stringify(dados)
    document.getElementById(id).innerHTML = texto
}

// Utilizando Ajax com jQuery no GET
$.ajax({
    url: "/parOuImpar",
    method: "get",
    data: {
        numero: 5
    },
    success(data) {
        exibirResultado("get", data)
    }
})

// Utilizando Ajax com jQuery no POST
$.ajax({
    url: "/parOuImpar",
    method: "post",
    data: {
        numero: 5
    },
    success(data) {
        exibirResultado("post", data)
    }
})