import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

    const clientes = [
        new Cliente("Ana", 34, "1"),
        new Cliente("Bia", 35, "2"),
        new Cliente("Cia", 36, "3"),
        new Cliente("Dia", 37, "4")
    ]

    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome)
    }

    function clienteExcluido(cliente: Cliente) {
        console.log(cliente.nome)
    }

    function salvarCliente(cliente: Cliente) {
        console.log(cliente)
    }

    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela")

    return (
        <div className="flex
        justify-center
        items-center
        h-screen
        bg-gradient-to-r
        from-blue-500
        to-purple-500
        text-white">
            <Layout titulo="Cadastro Simples">
                {visivel === "tabela" ? (
                    <>
                        <div className="flex justify-end">
                            <Botao cor="green" className="mb-4" onClick={() => setVisivel("form")}>Novo Cliente</Botao>
                        </div>
                        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
                    </>
                ) : (
                    <Formulario cliente={clientes[1]} cancelado={() => setVisivel("tabela")} clienteMudou={salvarCliente} />
                )}
            </Layout>
        </div>
    )
}
