import "./Header.css"
import React from "react"

export default props =>
    <header className="header d-none d-sm-flex flex-column"> {/* As classes "d-none" e "d-sm-flex" fazem com que o Header não apareça em dispositivos móveis (responsividade) */}
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>