-- Criando tabela Prefeitos
create table if not exists prefeitos (
	id INT unsigned not null auto_increment, -- ID do prefeito
    nome VARCHAR(255) not null, -- Nome do prefeito
    cidade_id INT unsigned, -- ID da cidade na qual ele está relacionado
    primary key (id), -- A chave primária vai ser o ID do prefeito
    unique key (cidade_id), -- O ID da cidade deve ser único
    foreign key (cidade_id) references cidades (id) -- A chave estrangeira vai ser o ID da cidade
);

select * from prefeitos;