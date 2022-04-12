import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente: Cliente, i: number) => {
            return (
                <tr key={cliente.id} className={`${i % 2 == 0 ? "bg-purple-200" : "bg-purple-100"}`}> {/* Se o código for ímpar, a cor de fundo será mais forte */}
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justifty-center">
                {props.clienteSelecionado ? (
                    <button className="flex
                    justify-center
                    items-center
                  text-green-600
                    rounded-full
                    p-2
                    m-1
                    hover:bg-purple-50"
                    onClick={() => props.clienteSelecionado?.(cliente)}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button className="flex
                    justify-center
                    items-center
                    text-red-600
                    rounded-full
                    p-2
                    m-1
                    hover:bg-purple-50"
                    onClick={() => props.clienteExcluido?.(cliente)}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            ">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}