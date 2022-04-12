# Renderização Estática
A seguinte página gera um número aleatório e exibe-o numa div
```jsx
import Layout from "../components/Layout"

export default function Estatico() {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{Math.random()}</div>
        </Layout>
    )
}
```
Contudo, ao acessar mais de uma vez a página ocorre o seguinte erro:
```
Uncaught Error: Text content does not match server-rendered HTML.
```
Isso acontece pois o Next.js pre-renderiza por padrão todas as páginas. Para evitar esse problema, deve ser utilizado o ```getStaticProps()```, veja:
```jsx
import Layout from "../components/Layout"

// Essa função também suporta o "async", podendo ser utilizada em fetchs, etc...
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}
```
**Obs.:** o conteúdo só será estático quando estiver rodando no modo produção, através do ```npm run build``` e ```npm start```

# Renderização do Lado do Servidor
Funciona da mesma maneira, porém, ao invés de ```getStaticProps()```, utiliza-se ```getServerSideProps()```:
```jsx
import Layout from "../components/Layout"

// Essa função também suporta o "async", podendo ser utilizada em fetchs, etc...
export function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}
```