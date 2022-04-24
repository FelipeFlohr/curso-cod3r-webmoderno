# Fazendo Updates
Para fazer updates, utiliza-se:
```js
db.estados.update({sigla: "SP"}, {$set: {populacao: 45340000}}) // Atualiza o campo "populacao" no documento cuja sigla possui o valor "SP"
```

Para fazer mesclas, utiliza-se o operador "*$push*":
```js
db.estados.update(
    {sigla: "SP"},
    {$push: {cidades: {nome: "Santos", populacao: 433966}}} // Adiciona o objeto ao campo "cidades"
)
```