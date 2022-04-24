# Inserindo Dados
Para inserir dados, usa-se:
```js
db.nomeDaCollection.insert({obj})
```

Ou para inserir/atualizar, usa-se:
```js
db.nomeDaCollection.save({obj})
```

Como exememplo, temos:
```js
db.estados.insert({nome: "Acre", sigla: "AC", regiao: "Norte"})
```

# Inserindo dados maiores
Para inserir dados maiores, pode ser usado a seguinte sintaxe:
```js
db.estados.insert({
```
Fazendo isso, um prompt irá abrir na qual dados específicos poderão ser inseridos, veja:
```
> db.estados.insert({
... nome: "Rio de Janeiro",
... sigla: "RJ",
... regiao: "Sudeste",
... cidades: [{
... nome: "Niterói",
... area: 133.9,
... populacao: 487562
... }]
... })
```