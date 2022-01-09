// Middleware Pattern (Chain of Responsability)
const passo1 = (contexto, next) => {
    contexto.valor1 = "mid1"
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = "mid2"
    next()
}

const passo3 = contexto => contexto.valor3 = "mid3" // Métodos também podem não passar o "next"

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length /* Se middlewares for um array e o ídncei for menor do que o tamanho do array, o próximo passo será executado */ && middlewares[indice](ctx, () => execPasso(indice + 1)) // Dessa maneira, a função será recursiva e ficará se chamando
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)