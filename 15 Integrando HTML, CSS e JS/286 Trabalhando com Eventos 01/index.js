// Função para alterar o comportamento padrão de um elemento
function navegarEm5s(e) {
    e.preventDefault() // <- Previne o elemento de executar o seu comportamento default
    console.log("Saindo em 5 segundos...")
    setTimeout(() => {
        const link = e.target // "e.target" é referente ao elemento que disparou o evento
        window.location.href = e.target.href // Faz com que a página seja redirecionada para o href acima
    }, 5000)
}

// Atribuindo o evento via JS
const a = document.querySelector("[espera-um-pouco]")
a.onclick = navegarEm5s