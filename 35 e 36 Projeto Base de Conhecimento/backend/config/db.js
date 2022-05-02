const config = require("../knexfile")
const knex = require("knex")(config) // Criado uma instância do Knex

knex.migrate.lastest([config])
module.exports = knex