import React from "react";
import { childrenWithProps } from "../utils/utils";

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos:</h2>
        <ul>
            {/* Dessa maneira, será possível transmitir as propriedades de pai para
            filho, tendo em vista que as propriedades dos filhos se sobressaem. */}
            {childrenWithProps(props)}
        </ul>
    </div>