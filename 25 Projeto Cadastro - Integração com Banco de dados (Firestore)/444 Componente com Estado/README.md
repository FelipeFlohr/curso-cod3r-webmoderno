# Componente com Estado
Também é possível criar um componente função com estado utilizando React Hooks. Veja o exemplo:
```jsx
import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado() {
    const [numero, setNumero] = useState(0) // Retorna um array com dois elementos: o primeiro é o valor e o segundo é uma função (React Hooks)

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}
```