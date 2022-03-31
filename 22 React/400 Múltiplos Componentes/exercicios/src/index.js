import React from "react";
import ReactDOM from "react-dom";
import BomDia from "./components/BomDia";
import { BoaTarde, BoaNoite } from "./components/Multiplos";

ReactDOM.render(
    <div>
        <BomDia nome="Felipe" />
        <BoaTarde nome="Benio" />
        <BoaNoite nome="Bretzke" />
    </div>,
    document.getElementById("root"))