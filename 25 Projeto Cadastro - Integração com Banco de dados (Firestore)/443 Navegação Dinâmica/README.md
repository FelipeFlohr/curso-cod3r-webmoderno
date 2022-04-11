# Navegação Dinâmica
Navegação dinâmica é uma navegação feita através de parâmetros passados na URL.

## Criando os destinos dinâmicos
Para criar destinos dinâmicos, basta criar um arquivo/pasta com um par de colchetes envolvendo o nome do parâmetro. Exemplo:

- [estado]/[id] -> sc/321

## Acessando os valores passados
Para acessar os valores passados na URL, é necessário criar um hook dentro da página, veja:

pages/[filial]/[codigo].jsx
```jsx
import Layout from "../../components/Layout"
import { useRouter } from "next/router"

export default function ClientePorCodigo() {
    const router = useRouter() // Hook para obter o valor da navegação dinâmica

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}
```