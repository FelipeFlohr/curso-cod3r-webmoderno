# Servidores Web
Servidor Web é um software responsável por aceitar pedidos em HTTP de clientes (geralmente navegadores) e servi-los com respostas

## Exemplos de Servidores Web
- Apache HTTP Server (O Apache abre um Thread para cada requisição)
- Tomcat (Mundo Java)
- Node.js (Node.js em si não é um Servidor Web, porém possui mecanismos para fazer isso, tanto provendo conteúdo estático como conteúdo dinâmico)
- JBoss (Mundo Java)
- Nginx
- Microsoft IIS

## Web e DNS
Quando a máquina do cliente faz uma requisição para alguma URL (exemplo: www.google.com), antes de chegar diretamente no Servidor Web a mesma passa por um servidor DNS, na qual possui a função de apontar a URL (www.google.com) para o Web Server (exemplo: 23.67.100.3)

## Virtual Hosting
Virtual Hosting representa a idéia de no mesmo servidor Web possui vários sites sendo atendidos. Um exemplo disso é na hora de contratar serviços de hosting compartilhados: dentro de uma mesma máquina há vários sites sendo atendidos, e a partir do URL de requisição o Web Server vai saber qual está sendo pedido.

## Estrutura de Pastas
Dentro de um Web Server, é muito comum ter uma estrutura de pastas contendo arquivos estáticos (imagens, CSS, JS, index.html, about.html, etc). Uma prática muito comum para arquivos estáticos é publica-los em servidores separados especializados em arquivos estáticos (exemplo: CDN - ou Content Delivery Network ou Rede de Distribuição de Conteúdo - são redes especializadas em entregar esses tipos de conteúdos estáticos).

## Web Stack
A stack (pacote) representa todos os itens necessários para criar um servidor, exemplo:
- Linguagem
- Web Server
- Banco de Dados
- Sistema Operacional

A stack mais comum que existe para Web Server é a LAMP (Linux, Apache, MySQL, PHP). Veja:
- Linguagem: PHP
- Web Server: Apache
- Banco de Dados: MySQL
- Sistema Operacional: Linux