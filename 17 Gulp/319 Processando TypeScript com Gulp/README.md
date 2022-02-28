# Processando TypeScript com Gulp
Os arquivos TypeScript estão localizados na pasta "typeScript/src". São os seguintes:

*produto.ts*
```ts
export interface Vendavel {
    nome: string
    preco: number
}

export class Carro implements Vendavel {
    nome: string
    preco: number
}
```

*app.ts*
```ts
import { Carro, Vendavel } from './produto'

function exibir(v: Vendavel) {
    console.log(`${v.nome} custa ${v.preco}!`)
}

const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
exibir(c)
```

O arquivo Gulp fica da seguinte maneira:
```js
const { series } = require("gulp")
const gulp = require("gulp")
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json") // Passando o arquivo "tsconfig"

function transformacaoTS() {
    return tsProject.src() // Os arquivos TypeScript já foram definidos
        .pipe(tsProject()) // Transpila para JavaScript
        .pipe(gulp.dest("build")) 
}

exports.default = series(transformacaoTS)
```