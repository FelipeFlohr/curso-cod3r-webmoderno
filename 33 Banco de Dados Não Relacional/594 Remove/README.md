# Removendo dados
Para remover dados/documentos, utiliza-se:
```js
db.estados.remove({populacao: {$exists: false}}, 1) // Remove apenas 1 documento cuja chave "populacao" não existe
```