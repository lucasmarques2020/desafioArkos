import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Img } from '../imgs'
import Bk from '../assets/cadastro.svg'
import Logo from '../assets/logo.svg'
import { style } from './styles'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


export const Cadastro = () => {
  const [message, setMessage] = useState([])
  const navigate = useNavigate()
  const Lottie = require("../assets/sucess.json")
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    console.log(redirect)
    if (redirect == true)
      navigate("/login")
  }
  const handleShow = () => setShow(true)
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  let [redirect, setRedirect] = useState(false)
  const [confirmpassword, setConfirmPassword] = useState([])

  function send(event) {
    if (name.length === 0) {
      setMessage("Nome não preenchido!")
      setShow(true)
      return
    }
    if (email.length === 0) {
      setMessage("Email não preenchido!")
      setShow(true)
      return
    }
    if (password.length === 0) {
      setMessage("Senha não preenchida!")
      setShow(true)
      return
    }
    if (confirmpassword.length === 0) {
      setMessage("Confirmar senha não preenchido!")
      setShow(true)
      return
    }
    if (password !== confirmpassword) {
      setMessage("As senhas não são iguais!")
      console.log(password, confirmpassword)
      setShow(true)
      return
    }
    let user = {
      name: name,
      email: email,
      password: password
    }

    axios.post("https://desafioarkos.herokuapp.com/user", user).then(res => {
      setMessage("Cadastrado com Sucesso!")
      setRedirect(true)
      setShow(true)
    }).catch(Err => { alert(Err) })
  }
  function changeName(event) {
    setName(event.target.value)
  }
  function changeEmail(event) {
    setEmail(event.target.value)
  }
  function changePassword(event) {
    setPassword(event.target.value)
  }
  function changeConfirmPassword(event) {
    setConfirmPassword(event.target.value)
  }
  const estilo = style()
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6" style={estilo.Fundo}>
          <Img logo={Logo} bk={Bk} />
        </div>
        <div className="col-md-6" style={estilo.FundoForm}>
          <div className="w-75">
            <Form className="w-100" style={estilo.Formul}>
              <Form.Text className="text-muted" style={estilo.TextoFormul}>
                Cadastre-se
              </Form.Text>
              <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
                <Form.Label className="w-100 text-start">Nome completo</Form.Label>
                <Form.Control onChange={changeName} type="text" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
                <Form.Label className="w-100 text-start">E-mail</Form.Label>
                <Form.Control onChange={changeEmail} type="email" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-100 text-start">Senha</Form.Label>
                <Form.Control onChange={changePassword} type="password" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-100 text-start">Confirmar Senha</Form.Label>
                <Form.Control onChange={changeConfirmPassword} type="password" style={estilo.ControlInputForm} />
              </Form.Group>
              <Button className="mb-4" onClick={send} variant="primary" style={estilo.ButtonForm}>
                Cadastrar
              </Button>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label style={estilo.TextoAvisoCadastro}>Já possui cadastro?<Link to="/login"><Button variant="link" style={estilo.TextoAvisoCadastro}>Login</Button></Link></Form.Label>
              </Form.Group>
            </Form>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h2>{message}</h2>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Fechar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
