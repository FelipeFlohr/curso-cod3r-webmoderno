import React, { Component } from "react"
import Main from "../template/Main"
import axios from "axios"

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const baseUrl = "http://localhost:3001/users"
const initialState = {
    user: { name: "", email: "" },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user }) // Irá limpar apenas o usuário
    }

    save() {
        const user = this.state.user
        const method = user.id ? "put" : "post" // Caso haja um ID, será feito um "put", ao contrário será feito um "post"
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id) // Irá criar uma lista com os usuários que sejam diferentes do usuário atual
        list.unshift(user) // Coloca o usuário na primeira posição do array
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}