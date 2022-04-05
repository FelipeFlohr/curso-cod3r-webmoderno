import React from "react"
import { Routes, Route } from "react-router"

import Home from "../components/home/Home"
import UserCrud from "../components/user/UserCrud"

export default props =>
    // O atributo "exact" faz com que a navegação só seja realizada caso a URL seja exata
    // ou seja, se for digitado "/users1" será redirecionado para "/users"
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>