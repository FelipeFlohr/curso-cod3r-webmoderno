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