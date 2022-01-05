# O "this" pode variar
Dentro do contexto do Browser, se abrirmos o console e digitarmos o seguinte:
```js
function f1() { console.log(this === window) }
```
E invocarmos a função:
```js
f1()
```
Receberemos true como resposta:
```js
true
```

## Mudando o contexto
Atrelando essa função á um body de uma página (mais para frente haverá a explicação disso), o resultado será diferente
```js
function f1() { console.log(this === window) } // Criando a função

document.getElementsByTagName("body")[0].onclick = f1 // Atrelando a função ao body da página
```

Agora toda vez que clicar no body da página, a resposta será essa:
```js
false
```

## "this" e funções Arrow
O valor de *this* dentro de funções Arrows nunca muda. O seu valor se dá no momento em que a função é definida. Se executarmos o seguinte no console:
```js
var f1 = () => console.log(this === window) // Primeiro comando
document.getElementsByTagName("body")[0].onclick = f1 // Segundo comando
```
Teremos a seguinte resposta:
```js
true
```
Repare que a resposta ideal **não seria** *true*, tendo em vista que *window* e o *corpo da página* são duas coisas diferentes