import React from "react"
import { Link } from "react-router-dom"

export default props =>
    <Link to={props.link}>
        <i className={`fa ${props.icon}`}></i> {props.text}
    </Link>