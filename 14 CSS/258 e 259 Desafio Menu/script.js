window.onhashchange = function(evento) {
    const oldURL = evento.oldURL.split("#")[1]
    const newURL = evento.newURL.split("#")[1]

    console.log(oldURL, newURL)

    const oldMenu = document.querySelector(`.menu a[href='#${oldURL}']`) // <- Irá selecionar um elemento dentro da classe "menu" que possui o href igual á antiga URL
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`)
    oldMenu && oldMenu.classList.remove("selected")
    newMenu && newMenu.classList.add("selected")
}