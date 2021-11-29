import React, { Components } from 'react'
import { Button, Container, Navbar, Dropdown, Card, InputGroup, FormControl, Badge } from 'react-bootstrap'
import { style } from './styles'
import Logo from '../assets/logo.svg'
import Buscar from '../assets/buscar.svg'
import Buy from '../assets/buy.svg'
import Buy2 from '../assets/buy2.svg'
import Profile from '../assets/profile.svg'
import Exit from '../assets/exit.svg'
import Star from '../assets/star.svg'
import { Link } from "react-router-dom"

export const Produtos = () => {
    const estilo = style()
    return (
        <div className="container-fluid vh-100 vw-100">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand> <img className="img-fluid" src={Logo} style={{ width: "50%", className: "d-inline-block align-top" }} /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Link to="/carrinho"><Button variant="link" style={{ textDecoration: "none" }}>
                            <img src={Buy} style={{ width: "30px" }} /> <Badge bg="danger">2</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                        </Link>
                        <Navbar.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic" style={estilo.ButtonMenu}>
                                    <a>Olá,</a> Lucas Marques!
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={estilo.FundoMenu}>
                                <Link style={{ textDecoration: "none" }} to="/perfil"><Dropdown.Item className="mb-3" href="#/action-1"><img src={Profile} style={{ width: "20px" }} /> Editar Perfil</Dropdown.Item></Link>
                                <Link style={{ textDecoration: "none" }} to="/login"> <Dropdown.Item href="#/action-2"><img src={Exit} style={{ width: "20px" }} /> SAIR</Dropdown.Item></Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="row h-75 w-100 d-flex justify-content-start p-5">

                <div className="Search col-10">
                    <InputGroup className="mb-3">
                        <FormControl className="col-8" style={{ borderRadius: "30px", marginRight: "10px", height: "50px" }}
                            placeholder="Busque por um produto"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" className="col-1" style={estilo.ButtonBuscar}>
                            <img className="" src={Buscar} style={{ width: "30px" }} />
                        </Button>
                    </InputGroup>
                </div>
                <h2 className="mt-5 mb-5">Produtos</h2>
                <div className="Listproduct container p-0">
                    <div className="d-flex flex-wrap justify-content-start">
                        <Card className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                            <Card.Img variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                            <Card.Body>
                                <Card.Title>Refrigerante</Card.Title>
                                <Card.Title>
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    (1.895)
                                </Card.Title>
                                <Card.Text>
                                    Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.
                                </Card.Text>
                                <Card.Text style={{ color: "#D4D9E5" }}>
                                    Restam 15 unidades no estoque.
                                </Card.Text>
                                <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$ 5,00</Button>
                            </Card.Body>
                        </Card>
                        <Card className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                            <Card.Img variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                            <Card.Body>
                                <Card.Title>Refrigerante</Card.Title>
                                <Card.Title>
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    (1.895)
                                </Card.Title>
                                <Card.Text>
                                    Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.
                                </Card.Text>
                                <Card.Text style={{ color: "#D4D9E5" }}>
                                    Restam 15 unidades no estoque.
                                </Card.Text>
                                <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$ 5,00</Button>
                            </Card.Body>
                        </Card>
                        <Card className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                            <Card.Img variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                            <Card.Body>
                                <Card.Title>Refrigerante</Card.Title>
                                <Card.Title>
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    (1.895)
                                </Card.Title>
                                <Card.Text>
                                    Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.
                                </Card.Text>
                                <Card.Text style={{ color: "#D4D9E5" }}>
                                    Restam 15 unidades no estoque.
                                </Card.Text>
                                <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$ 5,00</Button>
                            </Card.Body>
                        </Card>
                        <Card className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                            <Card.Img variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                            <Card.Body>
                                <Card.Title>Refrigerante</Card.Title>
                                <Card.Title>
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    (1.895)
                                </Card.Title>
                                <Card.Text>
                                    Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.
                                </Card.Text>
                                <Card.Text style={{ color: "#D4D9E5" }}>
                                    Restam 15 unidades no estoque.
                                </Card.Text>
                                <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$ 5,00</Button>
                            </Card.Body>
                        </Card>
                        <Card className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                            <Card.Img variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                            <Card.Body>
                                <Card.Title>Refrigerante</Card.Title>
                                <Card.Title>
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    (1.895)
                                </Card.Title>
                                <Card.Text>
                                    Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.
                                </Card.Text>
                                <Card.Text style={{ color: "#D4D9E5" }}>
                                    Restam 15 unidades no estoque.
                                </Card.Text>
                                <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$ 5,00</Button>
                            </Card.Body>
                        </Card>
                        <Card className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                            <Card.Img variant="top" style={estilo.CardsStiloImg} src="https://www.lance.com.br/files/article_content/uploads/2019/05/16/5cdd47f9b157a.jpeg" />
                            <Card.Body>
                                <Card.Title>Refrigerante</Card.Title>
                                <Card.Title>
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    <img src={Star} style={{ width: "30px" }} />
                                    (1.895)
                                </Card.Title>
                                <Card.Text>
                                    Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi nostrud.
                                </Card.Text>
                                <Card.Text style={{ color: "#D4D9E5" }}>
                                    Restam 15 unidades no estoque.
                                </Card.Text>
                                <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$ 5,00</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
