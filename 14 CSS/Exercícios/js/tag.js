const cores = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao // Se this[tag] não existir, retornará o valor padrão
    }
}

// Fazendo com que o nome da tag apareça ao lado do elemento
document.querySelectorAll(".tag").forEach(elemento => { // <- Pega todos os elementos da classe ".tag"
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = cores.get(tagName)

    if(!elemento.classList.contains("nolabel")) {
        const label = document.createElement("label")
        label.style.backgroundColor = cores.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) // Irá inserir antes do primeiro elemento o elemento "label"
    }
})