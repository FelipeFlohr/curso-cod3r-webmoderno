-- Excluir estados
delete from estados where sigla = 'MN';
delete from estados where id >= 1000;

select * from estados;