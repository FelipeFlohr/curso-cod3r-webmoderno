// Acessando atributos
const img = document.querySelector("img")
console.log("getAttribute", img.getAttribute("src"))
console.log("src", img.src)
console.log('["src"]', img['src'])
console.log("alt", img.alt)

console.log('===Elemento "img"===')
console.log("NodeType", img.nodeType) // <- Irá retornar "NodeType 1", que significa "Elemento". NodeType 2 é atributo, 3 é texto, etc. Há um total de 12 NodeTypes
console.log("NodeName", img.nodeName) // <- Irá retornar "img"

console.log('===Atributo "src"===')
const src = img.getAttributeNode("src")
console.log("NodeType", src.nodeType)
console.log("NodeValue", src.nodeValue)

console.log('===Elemento "a"===')
const link = document.querySelector('a')
console.log("href", link.href)
console.log("firstChild.nodeType", link.firstChild.nodeType) // Retornará 3. Isso pois o primeiro filho do elemento link é o texto.
link.firstChild.nodeValue = "Novo Texto" // <- Irá alterar o valor textural do primeiro filho do elemento link
