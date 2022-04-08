# Componentes
Componentes são criados da mesma maneira que no React.

## <React.Fragment>
Como no React não é possível retornar mais um elemento, é necessário utilizar uma *div* ou o *React.Fragment* para envolver mais de um elemento. No Next.js, é possível utilizar um par de *<>*/*</>* para envolver mais de um elemento, veja:

```jsx
export default function Exemplo() {
    return (
        <>
            <Cabecalho />
            <Cabecalho />
        </>
    )
}
```