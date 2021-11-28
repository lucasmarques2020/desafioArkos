import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { Login } from "../Components/login"
import { Cadastro } from "../Components/cadastro"



export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/cadastro" element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>
    )
}
