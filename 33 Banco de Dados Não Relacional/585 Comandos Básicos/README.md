# Comandos básicos

Mostrar todos os bancos de dados e seus respectivos tamanhos:
```
show dbs
```
---
Trocar o banco de dados atual ou criar um novo banco de dados:
```
use [nome do banco de dados]
```
---
Criar uma collection:
```js
db.createCollection("estados")
```
---
Mostrar todas as collections disponíveis:
```
show collections
```
---
Deletar uma collection:
```js
db.NomeDoBancoDeDados.drop()
```

# Observação
O MongoDB é ***case sensitive***, isto significa que é possível ter simultâneamente uma collection "Estados" e "estados", diferentemente dos bancos relacionais, onde são *case insensitive*.