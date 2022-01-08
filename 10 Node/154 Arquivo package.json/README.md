# Package.json
O arquivo package.json foi criado utilizando o comando no terminal *npm init*. Com isso, foi gerado o seguinte arquivo:
```json
{
  "name": "funcionarios",
  "version": "1.0.0",
  "description": "Descrição do pacote",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "palavrachave",
    "palavrachave2"
  ],
  "author": "Felipe Matheus Flohr",
  "license": "MIT"
}
```

## Instalando módulos
Para instalar um módulo, basta executar o seguinte comando no terminal dentro da pasta desejada:
```
npm i --save {nome do módulo}
```
No caso dessa aula, foi instalado o módulo ```axios```

## Atualização dos módulos
Dentro do arquivo *package.json* temos o seguinte:
```json
  "dependencies": {
    "axios": "^0.24.0"
  }
```
Repque que, como valor de *axios* temos: ```^0.24.0```. De prefixo temos um acento, e os seguintes prefixos indicam:
- **^** : atualização automática de versões minors. Exemplo -> 0.24.0 -> 0.25.0 -> 0.26.0
- **~** : atualização automática de versões fixes. Exemplo -> 0.24.0 -> 0.24.1 -> 0.24.2