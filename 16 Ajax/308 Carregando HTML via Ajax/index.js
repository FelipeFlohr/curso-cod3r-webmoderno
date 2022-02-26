// Fazendo uma SPA (Single Page Application)
function navegarViaAjax(url, seletor, push = true) {
    if (!url || !seletor) return // <- Validação

    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html
            if (push) {
                history.pushState({ seletor }, null, url) // Passa o seletor como URL da SPA. Essa URL fica salva no histórico.
            }
        })
    }

document.querySelectorAll("[wm-link]").forEach(link => {
    const url = link.attributes['wm-link'].value // Pega a URL do html
    const seletorDestino = link.attributes['wm-destino'].value

    link.onclick = e => {
        e.preventDefault()
        navegarViaAjax(url, seletorDestino)
    }
})

window.onpopstate = e => {
    if (e.state) {
        navegarViaAjax(window.location.href, e.state.seletor, false)
    }
}