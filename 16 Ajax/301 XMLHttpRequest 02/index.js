// Upload utilizando XMLHttpRequest
function ajaxUpload(config) {
    const xhr = new XMLHttpRequest()

    if (xhr.upload) {
        xhr.upload.onprogress = e => { // Com o evento "onprogress", é possível ver o progresso do upload
            const atual = e.loaded
            const total = e.total

            const percentual = Math.floor(atual / total * 100)
            config.progresso({ atual, total, percentual })
        }
    }

    xhr.open("post", config.url, true)
    xhr.send(config.formData) // Envia as informações para o servidor
}

document.querySelector("input[type=file]").onchange = e => {
    const formData = new FormData()
    formData.append(e.target.name, e.target.files[0]) // Adiciona o arquivo ao FormData

    ajaxUpload({
        url: "upload", // Endpoint do servidor. Como esse arquivo já está dentro do servidor (localhost:3000), o mesmo reconhecerá este endpoint automáticamente
        formData: formData,
        progresso(dados) {
            const progresso = document.querySelector(".progresso")
            progresso.innerHTML = JSON.stringify(dados)
        }
    })
}