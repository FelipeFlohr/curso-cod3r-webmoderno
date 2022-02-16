// Simplificando o Log
function log() {
    console.log(this)
}

HTMLCollection.prototype.log = log
HTMLElement.prototype.log = log
NodeList.prototype.log = log
Node.prototype.log = log

const lista = document.querySelector("div ul")
lista.parentElement.log()

// Node "text"
/*
    No comando abaixo, ao printar a lista de nodes filhos, irá aparecer elementos
    do tipo "text". Isso acontece pois no HTML há espaços entre as tags <li/>
*/
lista.childNodes.log()

// Para evitar isso, usa-se
document.querySelectorAll("div ul li").log()