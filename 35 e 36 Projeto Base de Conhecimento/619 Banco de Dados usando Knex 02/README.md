# Migrations
As Migrations servem para criar o relacionamento das tabelas. Veja o exemplo abaixo:
```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary()
        table.string("name").notNullable()
        table.string("email").notNullable().unique()
        table.string("password").notNullable()
        table.boolean("admin").notNullable().defaultTo(false)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users")
}
```
Veja que a migration possui o "up" e "down", na qual servem para avançar ou recuar nas alterações da aplicação.

## Executando as migrations
Para executar as migrations, utiliza-se o comando ```knex migrate:latest```