import React from "react"

export default props =>
    <a href={props.link}>
        <i className={`fa ${props.icon}`}></i> {props.text}
    </a>