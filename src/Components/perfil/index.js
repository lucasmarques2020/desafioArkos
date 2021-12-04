import React, { Components, useState } from 'react'
import { Button, Container, Navbar, Dropdown, Form, InputGroup, FormControl, Badge, Nav } from 'react-bootstrap'
import { style } from './styles'
import Logo from '../assets/logo.svg'
import Buy from '../assets/buy.svg'
import Profile from '../assets/profile.svg'
import Exit from '../assets/exit.svg'
import { Link } from "react-router-dom"
import {useCookies} from 'react-cookie'
import axios from "axios"

export const EditarPerfil = () => {
    const estilo = style()
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [emailNew, setEmailNew] = useState([])
    const [cookie, setCookie] = useCookies(['user'])
    function send(event) {
        let user = {
          name: name,
          email: email
        }
        axios.patch("https://desafioarkos.herokuapp.com/user/"+cookie.id, user).then(res => { 
            setCookie('name', name,{path:'/'})
            setCookie('email',email,{path:'/'})
            alert(res.data.message) }).catch(Err => {alert(Err)})
      }
      function changeName(event) {
        setName(event.target.value)
      }
      function changeEmail(event) {
        setEmail(event.target.value)
      }
      function changeEmailNew(event) {
        setEmailNew(event.target.value)
      }
    return (
        <div className="container-fluid vh-100 vw-100">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand> <img className="img-fluid" src={Logo} style={{ width: "50%", className: "d-inline-block align-top" }} /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Link style={{ textDecoration: "none" }} to="/carrinho"><Button variant="link" style={{ textDecoration: "none" }}>
                            <img src={Buy} style={{ width: "30px" }} /> <Badge bg="danger">2</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button></Link>
                        <Navbar.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic" style={estilo.ButtonMenu}>
                                    <a>Olá,</a> {cookie.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={estilo.FundoMenu}>
                                <Link style={{ textDecoration: "none" }} to="/perfil"> <Dropdown.Item className="mb-3" href="#/action-1"><img src={Profile} style={{ width: "20px" }} /> Editar Perfil</Dropdown.Item></Link>
                                <Link style={{ textDecoration: "none" }} to="/login">  <Dropdown.Item href="#/action-2"><img src={Exit} style={{ width: "20px" }} /> SAIR</Dropdown.Item></Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Nav style={{ textDecoration: "none", marginLeft: "5%" }}>
                <Nav.Item>
                   <Nav.Link><Link style={{ textDecoration: "none", color: "#FF5757" }} to="/produtos">Página inicial</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><Link style={{ textDecoration: "none" }} to="/perfil">Editar perfil</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="row h-75 w-100 d-flex justify-content-start">
                <div className="Search">
                </div>
                <div className="Listproduct container p-0">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="col-md-6" style={estilo.FundoForm}>
                            <div className="w-100">
                                <Form className="w-100" style={estilo.Formul}>
                                    <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
                                        <Form.Label className="w-100 text-start">Nome completo</Form.Label>
                                        <Form.Control onChange={changeName} type="text" style={estilo.ControlInputForm} />
                                    </Form.Group>
                                    <Form.Group className="mb-5" controlId="formBasicPassword">
                                        <Form.Label className="w-100 text-start">E-mail atual</Form.Label>
                                        <Form.Control onChange={changeEmail} type="email" style={estilo.ControlInputForm} />
                                    </Form.Group>
                                    <Form.Group className="mb-5" controlId="formBasicPassword">
                                        <Form.Label className="w-100 text-start">Novo e-mail</Form.Label>
                                        <Form.Control onChange={changeEmailNew} type="email" style={estilo.ControlInputForm} />
                                    </Form.Group>
                                    <Button className="mb-4" onClick={send} variant="primary" style={estilo.ButtonForm}>
                                        Alterar dados
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
