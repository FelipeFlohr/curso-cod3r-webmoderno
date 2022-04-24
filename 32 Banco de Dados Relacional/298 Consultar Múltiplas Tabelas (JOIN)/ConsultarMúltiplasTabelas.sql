-- Atualizando erro da tabela anterior
update cidades
set estado_id = 26
where estado_id = 25;

-- Fazendo consulta relacionada com o nome do estado e da cidade
select e.nome as "Nome do estado", c.nome as "Nome da cidade", e.regiao as "Região" from estados e, cidades c
where e.id = c.estado_id;

-- Fazendo Inner Join com cidades e estados
select
	c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
from estados e
inner join cidades c on e.id = c.estado_id;