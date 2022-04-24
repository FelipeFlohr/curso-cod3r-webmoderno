-- Ver a listagem de todos os dados da tabela
select * from estados;

-- Ver a listagem de apenas certas listas
select nome, sigla from estados;
select Sigla, nome as "Nome do Estado" from estados;

-- Utilizando filtros
select Sigla, nome as "Nome do Estado" from estados where regiao = "Sul"
select nome, regiao, populacao from estados where populacao >= 10 order by populacao desc