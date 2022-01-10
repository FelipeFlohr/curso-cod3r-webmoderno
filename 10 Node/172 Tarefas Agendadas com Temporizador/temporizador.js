const schedule = require("node-schedule")

// Setando o temporizador. Ele executará a função de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function () {
    console.log("Executando a tarefa 1: " + new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando Tarefa 1")
}, 20000) // Depois de 20 segundos a tarefa será finalizada

// Criando uma regra para passar a tarefa
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // A tarefa será executada de segunda á sexta
regra.hour = 15
regra.second = 00

const tarefa2 = schedule.scheduleJob(regra, function () { // A tarefa 2 apenas será executada na hora 15, nos dias da semana e no segundo 0
    console.log("Executando Tarefa 2: " + new Date().getSeconds())
})