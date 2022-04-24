# Desafio Inserir (São Paulo)
Inserir o estado de São Paulo com os seguintes atributos

- Nome: São Paulo
- Sigla: SP
- Região: Sudeste
- Cidades: {
    Nome: Campinas,
    Area: 795.7,
    Prefeito: Jonas Donizette,
    População: 1081000
},
{
    Nome: Guarulhos,
    População: 1325000
},
{
    Nome: Sorocaba,
    distanciaCapital: 87,
    populacao: 655919
}

E cada cidade irá precisar ter o atributo _id com um ObjectId

---
Resultado:
```js
db.estados.save(
    {
        nome: "São Paulo",
        sigla: "SP",
        regiao: "Sudeste",
        cidades: [
            { _id: ObjectId(), nome: "Campinas", area: 795.7, prefeito: "Jonas Donizette", populacao: 1081000 },
            { _id: ObjectId(), nome: "Guarulhos", populacao: 1325000 },
            { _id: ObjectId(), nome: "Sorocaba", distanciaCapital: 87, populacao: 644919 }]
    })
```