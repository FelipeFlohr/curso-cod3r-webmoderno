-- Criando tabela Cidades
create table if not exists cidades (
	id INT unsigned not null auto_increment,
    nome VARCHAR(255) NOT NULL,
    estado_id INT unsigned not null,
    area DECIMAL(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) references estados (id)
);