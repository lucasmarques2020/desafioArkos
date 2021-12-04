import React, { useEffect, useState } from 'react'
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
import { useCookies } from 'react-cookie'

export const Produtos = () => {
    const [products, setProducts] = useState([])
    useEffect(async () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    const estilo = style()
    const [cookie, setCookie] = useCookies(['user'])
    return (
        <div className="container-fluid vh-100 vw-100">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand> <img className="img-fluid" src={Logo} style={{ width: "50%", className: "d-inline-block align-top" }} /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/carrinho"><Button variant="link" style={{ textDecoration: "none" }}>
                            <img src={Buy} style={{ width: "30px" }} /> <Badge bg="danger">2</Badge>
                        </Button>
                        </Link>
                        <Navbar.Text>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic" style={estilo.ButtonMenu}>
                                    Olá, {cookie.name}
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
                        <FormControl
                            className="col-8" style={{ borderRadius: "30px", marginRight: "10px", height: "50px" }}
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
                        {
                            products.map(p => (
                                <Card key={p.id} className="flex-grow-3 m-1" style={estilo.CardsStilo}>
                                    <div  className=" d-flex align-items-center justify-content-center">
                                        <Card.Img className="img-fluid" variant="top"  style={estilo.CardsStiloImg} src={p.image} />
                                    </div>
                                    <Card.Body>

                                        <Card.Title className="col" style={{overflow: "hidden", height: "20px"}}>{p.title}</Card.Title>

                                        <Card.Title>
                                            <img src={Star} style={{ width: "30px" }} />
                                            <img src={Star} style={{ width: "30px" }} />
                                            <img src={Star} style={{ width: "30px" }} />
                                            <img src={Star} style={{ width: "30px" }} />
                                            <img src={Star} style={{ width: "30px" }} />
                                            ({p.rating.count})
                                        </Card.Title>
                                        <div>
                                            <Card.Text style={{overflow: "hidden", height: "100px"}}>
                                                {p.description}
                                            </Card.Text>
                                        </div>
                                        <Card.Text style={{ color: "#D4D9E5" }}>
                                            Restam 15 unidades no estoque.
                                        </Card.Text>
                                        <Button variant="primary w-100" style={estilo.ButtonBuscar}><img src={Buy2} style={{ width: "30px", color: "white" }} /> R$: {p.price}</Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};
