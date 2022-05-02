const config = require("../knexfile")
const knex = require("knex")(config) // Criado uma instância do Knex

module.exports = knex