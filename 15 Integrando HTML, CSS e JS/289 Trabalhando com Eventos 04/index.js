// Interceptando um formulário
const submit = document.querySelector("[wm-submit]")
submit.onclick = e => {
    e.preventDefault()

    const form = e.target.parentNode // <- O parent node é usado pois o target do evento é o botão. Para isso, usa-se o Parent Node para pegar o formulário do mesmo
    const formData = new FormData(form)

    formData.append("ajax", true) // <- Insere um valor no formulário
    console.log(formData.get("q")) // <- Pega o valor da query
    console.log(formData.has("hl"))

    // O FormData possui um Iterator
    console.log("==Utilizando o Iterator do FormData==")
    for (let dado of formData) {
        console.log(dado)
    }
}