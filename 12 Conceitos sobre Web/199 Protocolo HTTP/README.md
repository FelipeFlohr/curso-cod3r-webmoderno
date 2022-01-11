# Protocolo HTTP
HTTP (Hyper Text Transfer Protocol) é um protocolo de comunicação para sistemas de hipermídia. O Hyper Text simboliza os arquivos HTML (Hyper Text Markup Language).

## Características do HTTP
- Dentro das camada TCP/IP, O HTTP está dentro da camada de aplicação.
- O HTTP é stateless: cada requisição feita pelo navegador é independente. Assim que o navegador fecha a conexão TCP, toda a informação é perdida. Para o servidor, cada requisição é uma requisição diferente, não existe na requisição nenhuma informação que guarde o **estado**.
- Protocolo Cliente-Servidor: fortemente baseado no conceito de requisição e resposta. Uma requisição é enviada através de um URL e como resposta pode-se obter um JSON, um HTML, um vídeo (através de Streaming), etc.
- Retorna conteúdos para formar uma página Web: HTML, CSS, JavaScript, Mídias, etc.

## Fluxo básico de uma conexão HTTP
1. Usuário informa a URL que deseja obter as informações (exemplo: www.google.com.br)
2. Browser gera a requisição: 
```
GET / HTTP / 1.1 
Host: www.google.com.br
```
3. Servidor Web gera a Resposta (a reposta possui um cabeçalho mostrando as informações e um corpo mostrando o conteúdo em si):
```
HTTP 1.1 200 OK
content-Type: text/html; charset=UTF-8
date: Sun, 02 January 2022 13:10:32 GMT
connection: close
content-Lenght: 438
```
4. Browser exibe a página/renderiza ela na tela. Para a página ser inteiramente montada, esse fluxo de requisição e resposta acontece várias vezes.

## Métodos do HTTP
- GET
- POST
- PUT
- DELETE
- TRACE
- OPTIONS
- CONNECT
- HEAD

### Requisição via GET
Requisição do tipo GET solicita a representação de um recurso específica e retornam apenas dados. Requisição do tipo GET têm a URL e os parâmetros da requisição. Exemplo:

Analisando a URL https://www.google.com.br/search?q=vasco+da+gama&hl=pt-BR temos as seguintes informações:

- A URL é "https://www.google.com.br/search"
- Os parâmetros são separados por um ponto de exclamação, sendo eles: "q=vasco+da+gama" (ou seja, a Query da consulta é "vasco da gama") e "hl=pt-BR" (Host Language é Português Brasileiro)

### Requisição via POST
Requisição do tipo POST envia parâmetros no corpo da requisição HTTP

Cabeçalho da requisição:
```
POST /signin HTTP/1.1
host: accounts.google.com
user-Agent: Mozilla/5.0 (Macintosh, Intel Mac OS...

etc...
```

Corpo da requisição:
```
continue=https%3A%2F%2Fmail.google.com%2Fmail.%2F&service=mail&rm=false&ltmpl=default&scc=1&ss=1&osid=1&emr=1&f.red=%5B%22fulano%40gmail.com

etc...
```

Para informações sensíveis (como senhas, etc) é **EXTREMAMENTE IMPORTANTE** utilizar o Protocolo **HTTPS**, tendo em vista que é criptografado. Senão essas informações podem serem vistas pelo usuário.

## Grupos de Status HTTP
- 1XX - Informação
- 2XX - Sucesso
- 3XX - Redirecionamento
- 4XX - Erro no Cliente
- 5XX - Erro no Servidor