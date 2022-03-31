# Componente com Parâmetro
Para criar um componente com parâmetro, basta fazer o seguinte:
```jsx
export default props => <h1>Bom dia {props.nome}!</h1>
```

Utiliza-se o parâmetro ***props*** como convenção (abreviação para Properties).

## Componente com mais de uma tag
Para retornar um componente com mais de uma tag, pode ser utilizada as duas seguintes maneiras:
```jsx
export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>
```

```jsx
export default props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>
```

A diferença entre "React.Fragment" e uma *div* está na forma como as duas serão renderizadas: "React.Fragment" faz com que as duas tags sejam renderizadas "soltas" na DOM, enquanto a div faz um embrulho das mesmas.