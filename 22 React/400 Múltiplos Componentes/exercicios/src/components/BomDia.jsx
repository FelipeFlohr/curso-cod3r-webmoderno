import React, { Fragment } from "react";

// Utiliza-se "props" como parâmetro (convenção). Props seria uma abreviação para "properties"
export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>