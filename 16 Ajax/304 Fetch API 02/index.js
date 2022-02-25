// Usando Fetch para fazer Post de um formulário no servidor
document.usuarioForm.onsubmit = async e => { // Um formulário pode ser facilmente pego quando o mesmo possui o atributo "name" setado
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)
    data.append("ajax", true) // <- Assim como é possível pegar tudo o que foi digitado com o FormData, também é possível adicionar novas coisas com o "append"

    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }

    fetch(form.action, options) // form.action é a URL do backend
        .then(resp => resp.json())
        .then(json => {
            const resultado = document.getElementById("resultado")
            resultado.innerHTML = JSON.stringify(json)
        })
        .catch(e => {
            resultado.innerHTML = e
        })

    // Fazendo o mesmo utilizando await
    // try {
    //     const resp = await fetch(form.action, options)
    //     const json = await resp.json()
    //     resultado.innerHTML = JSON.stringify(json)
    // } catch (e) {
    //     resultado.innerHTML = e
    // }
}