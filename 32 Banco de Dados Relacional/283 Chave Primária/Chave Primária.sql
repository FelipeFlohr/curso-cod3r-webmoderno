-- Chave primária (Primary Key)

-- A chave primária é uma coluna dentro de uma tabela.

-- Caraceterísticas de uma chave primária:
-- - Tem que ser única dentro de uma tabela
-- - Não obrigatóriamente toda coluna que só aceita dados únicos é uma chave primária
-- - Não aceita valor vazio
-- - Imutável

/* Exemplo: tabela "Cliente"

| Código | Nome   | Email | CPF |
| 1      | Ana    | ..... | ... |
| 2      | Bia    | ..... | ... |
| 3      | Carlos | ..... | ... |
| 4      | etc.   | etc.  | etc.|

A coluna da chave primária é a "Código".

Uma das possibilidades para trabalhar com uma chave primária é utilizando uma "Surrogate Key",
que são chaves sintéticas únicas para uma entidade no banco de dados. Os valores dentro da co-
luna "Código" são Surrogate Keys

Uma outra possibilidade para trabalhar com uma chave primária é utilizando uma "Natural Key".
Exemplo: RGs, CPFs, etc.

Uma chave primária pode ser a composição de mais de uma coluna. Exemplo:

| Cód. 1 | Cód. 2 |
| 1      | 1      |
| 1      | 2      |
| 2      | 1      |
| 2      | 2      | -> Neste caso, a chave primária seria a composição dessas duas colunas.
Perceba que nenhum par é repetido. */
