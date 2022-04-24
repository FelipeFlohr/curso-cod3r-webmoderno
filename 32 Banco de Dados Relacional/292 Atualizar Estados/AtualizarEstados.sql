-- Fazendo atualização de dados
update estados
set nome = "Maranhão"
where sigla = "MA";

-- Visualizando
select nome, sigla, populacao from estados where sigla = "MA";
select est.nome from estados est where sigla = "MA";

-- Atualizando o estado do Paraná;
update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR';

select nome, sigla, populacao from estados where sigla = "PR";