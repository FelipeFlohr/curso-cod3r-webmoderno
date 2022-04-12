import Navegador from "../components/Navegador"

export default function Home() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            height: "100vh"
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="red" />
            <Navegador destino="/exemplo" texto="Exemplo" />
            <Navegador destino="/navegacao" texto="Navegação #01" />
            <Navegador destino="/sc/12345" texto="Navegação #02" cor="green" />
            <Navegador destino="/estado" texto="Componente com Estado" cor="pink" />
        </div>
    )
}