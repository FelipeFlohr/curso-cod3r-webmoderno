class Barreira {
    gameDiv
    barreira
    reversa
    corpo
    borda

    constructor(reversa = false, altura) {
        this.gameDiv = document.querySelector("[wm-flappy]")
        this.barreira = criarElemento("div", "barreira")
        this.reversa = reversa

        // Criar corpo e borda
        this.borda = criarElemento("div", "borda")
        this.corpo = criarElemento("div", "corpo")

        // Adicionando corpo e borda á barreira
        this.barreira.appendChild(reversa ? this.corpo : this.borda)
        this.barreira.appendChild(reversa ? this.borda : this.corpo)

        this.setAltura(altura)
    }

    getBarreira() {
        return this.barreira
    }

    // Define a altura
    setAltura(altura) {
        this.corpo.style.height = `${altura}px`
    }
}

export class Barreiras {
    gameDiv = document.querySelector("[wm-flappy]")
    barreiras = criarElemento("div", "barreiras")
    superior = new Barreira(true)
    inferior = new Barreira(false)
    altura = parseInt(getComputedStyle(this.gameDiv))
    abertura
    xPos

    construction(abertura, x) {
        this.abertura = abertura
        this.xPos = x

        this.barreiras.appendChild(this.inferior.getBarreira())
        this.barreiras.appendChild(this.superior.getBarreira())

        this.sortearAbertura()
    }

    sortearAbertura() {
        const alturaSuperior = Math.random() * (altura- abertura) // <- Espaço disponível para calcular a altura superior
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    getX() {
        return parseInt(this.barreiras.style.left.split("px")[0])
    }

    setX(x) {
        this.barreiras.style.left = `${x}px`
    }

    getLargura() {
        return this.barreiras.clientWidth
    }

    spawnar() {
        console.log(this.barreiras)
        this.gameDiv.appendChild(this.barreiras)
    }
}

function criarElemento(tagName, className) {
    const e = document.createElement(tagName)
    e.className = className
    return e
}