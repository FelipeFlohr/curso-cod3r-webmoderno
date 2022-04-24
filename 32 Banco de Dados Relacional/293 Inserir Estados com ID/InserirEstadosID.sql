-- Inserir Estados com ID
-- Apesar do ID ser autoincrementado, pode-se inserir um estado com ID desde que não seja repetido
insert into estados(id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54);

insert into estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Norte', 2.51);

select * from estados;