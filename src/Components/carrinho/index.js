import React, { Components } from 'react'
import { Button, Container, Navbar, Dropdown, Card, Badge, Nav } from 'react-bootstrap'
import { style } from './styles'
import Logo from '../assets/logo.svg';
import Buy from '../assets/buy.svg';
import Trash from '../assets/trash.svg';
import Profile from '../assets/profile.svg';
import Exit from '../assets/exit.svg';
import Star from '../assets/star.svg';

export const Carrinho = () => {
    const estilo = style()
    return (
        <div className="container-fluid vh-100 vw-100">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand> <img className="img-fluid" src={Logo} style={{ width: "50%", className: "d-inline-block align-top" }} /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="link" style={{ textDecoration: "none" }}>
                            <img src={Buy} style={{ width: "30px" }} />
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                        <Navbar.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic" style={estilo.ButtonMenu}>
                                    <a>Olá,</a> Lucas Marques!
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={estilo.FundoMenu}>
                                    <Dropdown.Item className="mb-3" href="#/action-1"><img src={Profile} style={{ width: "20px" }} /> Editar Perfil</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><img src={Exit} style={{ width: "20px" }} /> SAIR</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Nav style={{ textDecoration: "none", marginLeft: "5%" }}>
                    <Nav.Item>
                        <Nav.Link style={{ color: "#FF5757" }}>Página inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Carrinho</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="row p-5">
                <div className="col">
                    <div className="row mb-3" style={estilo.CardsStilo}>
                        <div className="col-md-3">
                            <Card.Img className="img-fluid" variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                        </div>
                        <div className="col-md-6 justify-content-start">
                            <h2>Refrigerante Pepsi</h2>
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            (1.895)

                            <h5>Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.</h5>
                        </div>
                        <div className="col-md d-flex justify-content-center align-items-end flex-column">
                            <Button className="p-2" variant="primary" style={{ border: "none", width: "45px", height: "45px", borderRadius: "100px", background: "#FF5757" }}><img src={Trash} style={{ width: "20px", color: "white" }} /></Button>
                            <h3 className="p-2" style={{ color: "#3655C7" }}>R$ 5,00</h3>
                        </div>
                    </div>
                    <div className="row mb-3" style={estilo.CardsStilo}>
                        <div className="col-md-3">
                            <Card.Img className="img-fluid" variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                        </div>
                        <div className="col-md-6 justify-content-start">
                            <h2>Refrigerante Pepsi</h2>
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            <img src={Star} style={{ width: "20px" }} />
                            (1.895)

                            <h5>Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.</h5>
                        </div>
                        <div className="col-md d-flex justify-content-center align-items-end flex-column">
                            <Button className="p-2" variant="primary" style={{ border: "none", width: "45px", height: "45px", borderRadius: "100px", background: "#FF5757" }}><img src={Trash} style={{ width: "20px", color: "white" }} /></Button>
                            <h3 className="p-2" style={{ color: "#3655C7" }}>R$ 5,00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
