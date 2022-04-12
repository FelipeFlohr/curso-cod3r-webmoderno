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