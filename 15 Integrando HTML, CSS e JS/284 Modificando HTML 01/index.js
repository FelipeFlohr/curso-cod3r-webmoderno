// Modificando HMTL
const body = document.querySelector("body")

const div1 = document.createElement("div")
div1.classList.add("destaque")
div1.innerHTML = "Primeiro"

const div2 = document.createElement("div")
div2.setAttribute("wm-atributo", "valor") // Setando um atributo para o elemento criado
div2.innerHTML = "Segundo"

const p = document.createElement("p")
p.innerHTML = "Terceiro"

const div3 = document.createElement("div")
div3.appendChild(p)

// Adicionando os elementos á página
body.appendChild(div1)
body.appendChild(div2)
body.appendChild(div3)

// Adicionando elementos utilizando "insertBefore"
const texto = document.createTextNode("Antes")
div3.insertBefore(texto, div3.childNodes[0]) // <- Irá inserir o elemento "texto" antes do primeiro filho do elemento "div3"

// Clonando um elemento
const div4 = div3.cloneNode(true) // <- O valor 'true' faz copiar os seus descendentes
body.appendChild(div4)
body.removeChild(div3)