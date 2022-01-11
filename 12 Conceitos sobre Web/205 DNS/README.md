# Servidor DNS
A principal função do servidor DNS é traduzir os nomes de domínio em endereço IP. Exemplo: www.google.com -> 123.456.78.9

O DNS funciona sobre o protocolo UDP na porta 53

## Funcionamento básico do DNS
1. Usuário informa o endereço no Browser
2. Computador envia uma consulta DNS para o servidor local
3. O servidor responde com endereço IP
4. Computador acessa o servidor a partir do IP obtido

## Tipos de busca do DNS
- Busca recursiva: *Exemplo*: se o cliente DNS fazer uma busca pelo site "www.siteteste.com.br", o servidor DNS (endereço: 11.11.12.1) irá responder falando se achou ou não esse endereço. Caso não achou, esse servidor irá disparar um alerta para outros servidores (11.11.12.2, 11.11.12.3, 11.11.12.4, etc.) também pedindo para esses procurarem o endereço. Quando um achar, o cliente receberá o endereço IP desse site e o resultado ficará armazenado como Cache no servidor.
- Busca iterativa: *Exemplo:* se o cliente DNS fazer uma busca pelo site "www.siteteste.com.br", o servidor DNS (endereço: 11.11.12.1) irá responder falando se achou o não esse endereço. Caso não achou, esse servidor irá responder com um outro servidor DNS na qual será enviado para o cliente, e então o cliente executará esse novo servidor DNS.

## DNS Records / Registros DNS
Principais registros DNS:
- A: IPv4
- AAAA: IPv6
- MX: Servidor de Email
- NS: Servidor DNS
- CNAME: Canonical Name (Apelido)