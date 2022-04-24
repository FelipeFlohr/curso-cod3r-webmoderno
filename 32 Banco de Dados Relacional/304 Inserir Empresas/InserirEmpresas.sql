-- Alterando campo CNPJ de Integer para Varchar
alter table empresas modify cnpj VARCHAR(14);

-- Inserir empresas
insert into empresas
	(nome, cnpj)
values
	("Bradesco", "83923508000199"),
    ("Vale", "19556398000175"),
    ("Cielo", "06826945000143");

-- Relacionando empresas e cidades
insert into empresas_unidades
	(empresa_id, cidade_id, sede)
values
	(1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

select * from empresas_unidades;