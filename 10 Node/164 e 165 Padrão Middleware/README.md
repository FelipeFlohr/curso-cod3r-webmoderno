# Padrão Middleware / Chain of Responsability
Imagine o seguinte problema: o Processo A corresponde a uma função, na qual executa três passos:

<div align="center">Processo A (1 função):</div>

- Passo A :arrow_heading_down:
- Passo B :arrow_heading_down:
- Passo C

Contudo, esses três passos poderiam ser de certa forma reutilizáveis, com isso, pode-se refatorar o código e transformar os passos em funções, veja:

<div align="center">Processo B (3 funções):</div>

- Passo A (ao finalizar chama o Passo B) :arrow_heading_down:
- Passo B (ao finalizar chama o Passo C) :arrow_heading_down:
- Passo C

Dessa maneira há reaproveitamento desde que ao finalizar o Passo A, seja invocado o Passo B e ao finalizar o Passo B, seja invocado o Passo C. O **Padrão Middleware** serve justamente para que haja um reaproveitamento sem amarração, veja:

<div align="center">Processo C (3 funções):</div>

- Chega uma *request*: :arrow_heading_down:
- Middleware A (ao finalizar chama ou não algum *next()*) :arrow_heading_down:
- Middleware B (ao finalizar chama ou não algum *next()*) :arrow_heading_down:
- Middleware C (ao finalizar retorna ou não uma resposta)