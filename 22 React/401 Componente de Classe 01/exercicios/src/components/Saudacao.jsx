import React, { Component } from "react";

export default class Saudacao extends Component {

    // Toda componente de classe tem um estado (state)
    state = {
        tipo: this.props.tipo, // A propriedade "tipo" será recebida de props
        nome: this.props.nome // A propriedade "nome" será recebida de props
    }

    setTipo(event) {
        this.setState({ tipo: event.target.value }) // Toda hora que o estado muda, o componente é atualizado na tela
    }

    setNome(event) {
        this.setState({ nome: event.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}