# Navegação entre Componentes
Para fazer navegação entre componentes, utiliza-se o Link de ```next/link```, veja:
```jsx
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <Link href="/estiloso">Estiloso</Link>
        </div>
    )
}
```