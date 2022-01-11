# Protocolo HTTPS
O HTTPS é o HTTP seguro, onde ocorre uma criptografia de dados a partir de um certificado. O maior objetivo do HTTPS é fazer com que os dados transferidos de um lugar para outro não sejam interceptados por outras máquinas, tendo em vista que os dados trafegam em vários servidores. Dessa maneira, evitando ataque man-in-the-middle

## Características do HTTPS
- Dados criptografados usando os protocolos TLS ou SSL
- Protege contra interceptação (MITM)
- Criptografa todas as informações: URL, cookies e headers
- Usa certificados digitais

## Opçoes de HTTPS
- HTTP + TLS (TLS sendo a versão mais nova do SSL, a v4)
- HTTP + SSL

## Autoridades Certificadoras
São organizações que emitem e validam os certificados. Esses certificados podem ser instalados em um máquina para habilitar o HTTPS. Uma maneira de obter um certificado de forma grátis é através da [Let's Encrypt](https://letsencrypt.org/pt-br/).