-- Criar tabela Empresas
create table if not exists empresas (
	id INT unsigned not null auto_increment,
    nome VARCHAR(255) not null,
    cnpj int unsigned, -- O correto seria usar o CNPJ como VARCHAR, contudo isso será mudado adiante
    primary key (id),
    unique key (cnpj)
);

-- Tabela Cidades <-> Empresas
create table if not exists empresas_unidades (
	empresa_id INT unsigned not null,
    cidade_id int unsigned not null,
    sede TINYINT(1) not null,
    primary key (empresa_id, cidade_id)
);

select * from empresas_unidades