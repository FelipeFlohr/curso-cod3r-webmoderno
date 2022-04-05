import "./Nav.css"
import NavItem from "./NavItem"
import React from "react"

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link="/" icon="fa-home" text="Início" />
            <NavItem link="/users" icon="fa-users" text="Usuários" />
        </nav>
    </aside>