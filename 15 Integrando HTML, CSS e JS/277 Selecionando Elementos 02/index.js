// DOM - Selecionando elementos pelo Query Selector
document.querySelector("#primeiro").classList.add("destaque");

const selecionar = seletor =>
    document.querySelectorAll(seletor).forEach(elemento => elemento.classList.add("destaque"));

const deselecionar = seletor =>
    document.querySelectorAll(seletor).forEach(elemento => elemento.classList.remove("destaque"));

selecionar("div")
deselecionar("*")

// Selecionando mais de uma classe
selecionar(".terceiro.ultimo")
deselecionar("*")

// Selecionando com especificações CSS
selecionar(":not(#primeiro)") // <- Seleciona todos os elementos que não são o #primeiro
deselecionar("*")

selecionar(":nth-child(1)") // <- Seleciona o primeiro filho de todos os elementos
deselecionar("*")

selecionar("div:nth-of-type(1)") // <- Seleciona o primeiro elemento <div/>
deselecionar("*")

// Selecionando com atributos
selecionar("[wb-attrib]")

// Convertendo o Iterator do "querySelectorAll" para Array
Array.from(document.querySelectorAll("div"))