import React, { Components }  from 'react'
import { Button, Container, Navbar, Dropdown, Form, InputGroup, FormControl, Badge, Nav } from 'react-bootstrap'
import { style } from './styles'
import Logo from '../assets/logo.svg';
import Buy from '../assets/buy.svg';
import Profile from '../assets/profile.svg';
import Exit from '../assets/exit.svg';

export const EditarPerfil = () => {
    const estilo = style()
    return (
        <div className="container-fluid vh-100 vw-100">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand> <img className="img-fluid" src={Logo} style={{width: "50%", className:"d-inline-block align-top"}}/> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Button variant="link"style={{textDecoration: "none"}}>
                    <img src={Buy} style={{width: "30px"}}/> <Badge bg="danger">2</Badge>
                    <span className="visually-hidden">unread messages</span>
                    </Button>
                        <Navbar.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic" style={estilo.ButtonMenu}>
                                     <a>Olá,</a> Lucas Marques!
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={estilo.FundoMenu}>
                                    <Dropdown.Item className="mb-3" href="#/action-1"><img src={Profile}style={{width: "20px"}}/> Editar Perfil</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><img src={Exit}style={{width: "20px"}}/> SAIR</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
            <Nav style={{textDecoration: "none", marginLeft: "5%"}}>
            <Nav.Item>
                <Nav.Link style={{color: "#FF5757"}}>Página inicial</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Editar perfil</Nav.Link>
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
                                <Form.Control type="text" style={estilo.ControlInputForm} />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label className="w-100 text-start">E-mail atual</Form.Label>
                                <Form.Control type="email" style={estilo.ControlInputForm} />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label className="w-100 text-start">Novo e-mail</Form.Label>
                                <Form.Control type="email" style={estilo.ControlInputForm} />
                            </Form.Group>
                            <Button className="mb-4" type="submit" variant="primary" style={estilo.ButtonForm}>
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
