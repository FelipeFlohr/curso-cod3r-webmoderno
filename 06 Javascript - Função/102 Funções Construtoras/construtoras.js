// Funções construtoras
// Funções construtoras são como as classes do Java, diferenciando
// apenas a sintaxe

function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Criando um método público da função
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Criando um método getter para a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log("Velocidade atual do Uno: " + uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log("Velocidade atual da Ferrari: " + ferrari.getVelocidadeAtual())