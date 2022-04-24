-- Selecionando regiões, somando as populações das mesmas e agrupando-as
select
	regiao as "Região",
    sum(populacao) as Total
from estados
group by regiao
order by Total desc;

-- Somando toda a população
select sum(populacao) as Total from estados;

-- Média de população do Brasil
select avg(populacao) as Total from estados;