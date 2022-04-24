-- Explorando os tipos de Joins
-- Fazendo consulta com o Inner Join
select * from cidades c inner join prefeitos p on c.id = p.cidade_id; -- Essa consulta irá trazer apenas os dados relacionados, deixando de fora os prefeitos que não tinham relação com nenhuma cidade assim como cidades que não tinham nenhuma relação com prefeitos

-- Fazendo consulta com o Left Outer Join
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id; -- Essa consulta irá trazer a interseção juntamente com todas as cidades

-- Fazendo consulta com o Right Outer Join
select * from cidades c  right outer join prefeitos p on c.id = p.cidade_id; -- Essa consulta irá trazer a interseção juntamente com todos os prefeitos

-- Fazendo consulta com o Full Join
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id <- Essa consulta não é suportada no MySQL
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;