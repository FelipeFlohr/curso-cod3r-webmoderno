const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao) // Para acessar o atributo dentro do objeto é necessário o uso do "this"
    }
}

pessoa.falar() // Chamando o método
const falar = pessoa.falar
falar() // Retornará undefined pois há um conflito de dois paradigmas: OO e funcional. Por mais que a função esteja atribuída a constante, não será possível acessar o atributo "saudacao"

const falarDePessoa = pessoa.falar.bind(pessoa) // O bind atribui a palavra-chave "this" ao objeto passado como argumento, nesse caso "pessoa". Ou seja, o "this" dessa constante esta apontando para o objeto "pessoa"

// Bind em funções dentro de funções
function Pessoa1() {
    this.idade = 0

    const intervalo = setInterval(function () { // setInterval serve para executar um código em loop com um intervalo
        this.idade++
        console.log("Utilizando this normalmente: " + this.idade)

        if (this.idade >= 5) {
            clearInterval(intervalo)
        }
    }.bind(this) /* Faz o bind dessa função */, 1000 /* "1000" representa o intervalo */)
}

new Pessoa1

// Bind em funções utilizando o drible do "self"
function Pessoa2() {
    this.idade = 5
    const self = this

    const intervalo = setInterval(function () {
        self.idade++
        console.log("Utilizando self: " + self.idade)

        if (self.idade >= 10) {
            clearInterval(intervalo)
        }
    }, 1000) // <- Dessa maneira, não é necessário utilizar o "bind()"
}

new Pessoa2