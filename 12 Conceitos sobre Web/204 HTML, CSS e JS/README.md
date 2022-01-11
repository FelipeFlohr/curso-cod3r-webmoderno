# HTML, CSS e JavaScript
- HTML é responsável pela construção da página
- CSS é responsável pela estilização da página
- JavaScript é responsável pela lógica da página

A diferença entre HTML e CSS é vísivel nesse código (basta rodá-lo num navegador):
```html
<html>
    <head>
        <style>
            h1, h2, h3 {
                font-size: 120px;
            }
        </style>
    </head>
    <body>
        <h1>Teste 1</h1> <!-- Dentro do HTML a questão dos H1, H2, H3 etc. não representa necessáriamente o tamanho do título de cabeçalho, mas sim a ordem deles. Exemplo: h1 é o cabeçalho mais importante de uma página. h2 é o segundo, etc. -->
        <h2>Teste 2</h2>
        <h3>Teste 3</h3>
    </body>
</html>
```