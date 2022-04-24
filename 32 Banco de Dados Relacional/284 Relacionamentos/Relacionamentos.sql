/* Relacionametnos entre tabelas. Exemplo:

Tabela mãe:           Tabela filho:
| Cód. | Nome |      | Cód. | Nome  |
| 1    | Ana  |      | 1    | João  |
| 2    | Bia  |      | 2    | Gui   |
                     | 3    | Júlia |

Ana é mãe de João e Júlia, enquanto Bia é mãe de Gui. Para rela-
cionar essas tabelas, usa-se uma Foreign Key (Chave estrangeira),
que nada mais é que uma coluna migrada de outra tabela. Então:

Tabela mãe:           Tabela filho:
| CÓD  | NOME |      | CÓD  | NOME  | MAE_COD |
| 1    | Ana  |      | 1    | João  | 1       |
| 2    | Bia  |      | 2    | Gui   | 2       |
                     | 3    | Júlia | 1       |

Da maneira acima, não será possível deletar a Ana sem antes dele-
tar o João e a Júlia, pois de tal forma evita inconsistência no
banco de dados.

A tabela acima possui uma relação "Um para muitos", ou seja, uma
mãe pode ter muitos filhos.

================================================================

RELAÇÃO UM PARA UM:

Banco de dados de casamentos:

Homem:            Mulher:
| ID | NOME |    | ID | NOME | HOMEM_ID |
| 1  | .... |    | 1  | .... | 1        |
| 2  | .... |    | 2  | .... | 2        |
| 3  | .... |    | 3  | .... | 3        |

Neste caso, o ID na tabela homem seria uma Primary Key e o ID do
homem na tabela mulher seria uma Foreign Key. Além disso, a chave
"Unique" seria acrescentada a coluna "HOMEM_ID" tendo em vista que
uma mulher apenas pode se casar com um homem.

================================================================

RELAÇÃO MUITOS-PARA-MUITOS:

Banco de dados de parentesco:

Tio:             Sobrinho:
| ID | NOME |    | ID | NOME |
| 1  | .... |    | 1  | .... |
| 2  | .... |    | 2  | .... |
| 3  | .... |    | 3  | .... |

Digamos que todos sejam parentes. Para efetuar o parestesco disso 
cria-se uma nova tabela:

Tio_Sob:
| TIO_ID | SOB_ID |
| 1      | 1      |
| 1      | 2      |
| 1      | 3      |
| 2      | 1      |
| 2      | 2      |
| 2      | 3      |
| 3      | 1      |
| 3      | 2      |
| 3      | 3      |
 