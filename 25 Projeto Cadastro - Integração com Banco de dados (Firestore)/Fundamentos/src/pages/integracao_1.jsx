import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }

    return (
        <div>
            <Layout titulo="Integração com API">
                <div>
                    <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} /> {/* Associa o valor com o Hook */}
                    <button onClick={obterCliente}>Obter cliente</button>
                </div>
                <ul>
                    <li>Código: {cliente.id}</li>
                    <li>Nome: {cliente.nome}</li>
                    <li>Email: {cliente.email}</li>
                </ul>
            </Layout>
        </div>
    )
}