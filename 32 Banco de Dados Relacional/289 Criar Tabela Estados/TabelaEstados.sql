create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- O campo ID é um valor inteiro, sem sinal, não nulo e que se auto-incrementa
    nome VARCHAR(45) NOT NULL, -- o campo NOME é um valor do tipo String, não nulo cujo limite de caractéres é 45
    sigla VARCHAR(2) NOT NULL, -- o campo SIGLA é um valor do tipo String, não nulo cujo limite de caractéres é 2
    regiao ENUM("Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul") NOT NULL, -- Região é enumerada conforme os argumentos passados. Não nula
    populacao DECIMAL(5, 2) NOT NULL, -- o campo POPULACAO é um valor do tipo decimal, cujo possuí duas casas decimais com um valor máximo na casa do milhão. Não nulo
    PRIMARY KEY (id), -- A chave primária da tabela será o campo ID
    UNIQUE KEY (nome), -- O nome do estado deverá ser único
    UNIQUE KEY (sigla) -- A sigla do estado deverá ser única
);