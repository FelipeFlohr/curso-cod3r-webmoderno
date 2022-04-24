# NoSQL -> Not Only SQL
Classificação dos bancos não relacionais em quatro grandes grupos:

- Chave-Valor: Toda chave possui um valor (Exemplo: Redis)
- Documentos: fortemente baseado em JSON (Exemplo: MongoDB)
- Grafo: organiza os dados como um grande grafo através de nós, arestas e vértices (Exemplo: Neo4J)
- Column: a forma de organizar não é tão rigida como um banco relacional (Exemplo: BigTable, Cassandra)

# Escalonamento
No início do Twitter, o mesmo usava MySQL como banco de dados, porém, quanto mais a plataforma crescia, menos o MySQL conseguia entregar em quisitos de performance.

## Escalonamento Vertical vs Horizontal

- Escalonamento vertical: uma só máquina que vai recebendo upgrades com o passar do tempo, porém chega ao seu limite mais fácil.
- Escalonamento horizontal: várias máquinas que compartilham os dados entre si.