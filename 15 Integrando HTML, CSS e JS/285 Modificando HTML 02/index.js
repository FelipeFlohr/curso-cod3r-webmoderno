// Modificando HTML
const div = document.querySelector("div")
div.innerHTML = "==Elemento==" // <- Modifica o conteúdo dentro da div
// div.outerHTML = "Texto Alterado" // <- Modifica o elemento em si. Dessa forma, o elemento deixará de ser uma div e passará á ser um texto
div.insertAdjacentHTML("beforebegin", "<p>Antes do início</p>") // <- Insere um parágrafo antes do início do elemento selecionado
div.insertAdjacentHTML("afterbegin", "<p>Depois do início</p>") // <- Insere um parágrafo depois do início do elemento selecionado
div.insertAdjacentHTML("beforeend", "<p>Antes do fim</p>") // <- Insere um parágrafo depois do fim do elemento selecionado
div.insertAdjacentHTML("afterend", "<p>Depois do fim</p>") // <- Insere um parágrafo depois do fim do elemento selecionado

// Inner Text & Inner HTML
console.log("InnerHTML", div.innerHTML)
console.log("InnerText", div.innerText)