import React from "react"
import ReactDOM from "react-dom"
import Pai from "./components/Pai"
import Filho from "./components/Filho"

ReactDOM.render(
    <div>
        <Pai nome="Thomas" sobrenome="Turbo">
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paula" sobrenome="Tejando" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
    </div>, document.getElementById("root"))