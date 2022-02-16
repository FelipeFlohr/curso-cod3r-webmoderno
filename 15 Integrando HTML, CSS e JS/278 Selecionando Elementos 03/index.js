// Acessando formulários
console.log(document.forms)
console.log(document.forms[0])
console.log(document.getElementsByName("pesquisa"))
console.log(document.pesquisa)
console.log(document.pesquisa.q)
document.pesquisa.q.value = "Linux" // <- Define um valor para a query