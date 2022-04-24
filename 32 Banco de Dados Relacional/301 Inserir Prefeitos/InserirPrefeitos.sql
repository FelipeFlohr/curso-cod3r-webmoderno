-- Inserir prefeitos
insert into prefeitos (nome, cidade_id)
values 
	("Rodrigo Neves", 2),
    ("Raquel Lyra", 3),
    ("Zenaldo Coutinho", null); -- o ID da cidade pode ser nulo

insert into prefeitos (nome, cidade_id) values ("Rafael Greca", null);

select * from prefeitos;