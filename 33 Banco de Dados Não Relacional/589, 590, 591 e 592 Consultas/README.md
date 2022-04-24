# Consultas

Consultando com filtro:
```js
db.estados.findOne({sigla: "RJ"}) // Retorna o primeiro resultado encontrado
```
---
Consultando com operador lógico:
```js
db.estados.find({$or: [{sigla: "RJ"}, {sigla: "AC"}]}).pretty() // Retorna todos os valores com a sigla "RJ" ou "AC"
```
```js
db.estados.find({$and: [{sigla: "RJ"}, {sigla: "AC"}]}).pretty() // Retorna todos os valores com a sigla "RJ" e "AC" (Resultado seria nulo)
```
---
Consultando com filtro de existência:
```js
db.estados.find({populacao: {$exists: true}}) // Retorna todos os documentos cujo atributo "populacao" existe
```
---
Pulando itens da consulta:
```js
db.estados.find().skip(1) // Pula o primeiro dado (1-based index)
```
---
Limitando a quantidade de resultados:
```js
db.estados.find().limit(2) // Limita em 2 o número de resultados
```
---
Obtendo a quantidade de dados em uma coleção:
```js
db.estados.count()
```
---
Obtendo os dados filtrando os atributos:
```js
db.estados.find({sigla: "SP"}, {nome: 1, sigla: 1}) // Retorna os documentos cuja a sigla é "SP" e possui os campos "nome" e "sigla"

db.estados.find({sigla: "SP"}, {"cidades.nome": 1, _id: 0}) // Retorna os documentos cuja a sigla é "SP" e o objeto "cidades" possui o campo "nome"
```

# Consultas Agregadas
Consultas agregadas podem ser feitas através de uma pipeline de agregação. Exemplo com um estágio:
```js
db.estados.aggregate([
    {$project: {nome: 1, "cidades.nome": 1, _id: 0}} // Retorna todos os documentos que possuem os atributos "nome" e "cidades.nome"
])
```
---
Usando operadores matemáticos:
```js
db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0}} // Retorna os estados com o atributo "populacao" do objeto "cidade" somado. Repare que quando o campo estiver no lado do valor, o símbolo "$" é utilizado.
])
```
---
Usando agrupamento:
```js
db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0}},
    {$group: {_id: null, populacaoTotal: {$sum: "$populacao"}}},
    {$group: {_id: 0, populacaoTotal: 1}}
]) // Retorna a população total de todos os estados.
```
---
Usando ***match*** e ***unwind***:
```js
db.estados.aggregate([
    {$match: {"cidades.nome": "Sorocaba"}}, // Retorna os documentos que possuem o campo "cidades.nome" com o valor "Sorocaba"
    {$unwind: "$cidades"}, // "Desenrola" o campo "cidades", isto é: cria vários documentos com apenas uma única cidade
    {$match: {"cidades.nome": "Sorocaba"}}, // Filtra os documentos desenrolados cujo campo "cidades.nome" tem valor "Sorocaba"
    {$project: {_id: "$cidades._id"}} // Retorna o ID da cidade
]).pretty()
```