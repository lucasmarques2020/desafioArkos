import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { Login } from "../Components/login"
import { Cadastro } from "../Components/cadastro"
import { Produtos } from "../Components/produtos"



export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/cadastro" element={<Cadastro/>} />
                <Route exact path="/produtos" element={<Produtos/>} />
            </Routes>
        </BrowserRouter>
    )
}
