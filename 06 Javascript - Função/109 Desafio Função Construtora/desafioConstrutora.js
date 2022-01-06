// Desafio Função Construtora
// Transformar a classe abaixo em uma função construtora:
class PessoaClasse {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// Desafio:
function Pessoa(nome) {

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

p1 = new Pessoa("Felipe")
p1.falar()