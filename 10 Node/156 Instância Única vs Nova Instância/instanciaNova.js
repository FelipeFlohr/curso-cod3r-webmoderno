// Utilizando uma factory para retornar um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}