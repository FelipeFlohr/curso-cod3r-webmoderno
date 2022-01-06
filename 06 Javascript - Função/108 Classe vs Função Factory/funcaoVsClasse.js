// Usando classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Felipe")
p1.falar()

// Usando função fábrica
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Felipe")
p2.falar()

/**
 * Comparando a classe com a função fábrica dentro do Browser, pode-
 * mos analisar que a classe retornaria "undefined" enquanto a fun-
 * ção fábrica retornaria "Felipe". Isso se dá devido ao uso do "this"
 * na qual muda no contexto da classe
 */