import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Img } from '../imgs'
import Bk from '../assets/login.svg'
import Logo from '../assets/logo.svg'
import { style } from './styles'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


export const Login = () => {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const navigate = useNavigate()

  function login(event) {
    let user = {
      email: email,
      password: password
    }
    axios.post("http://localhost:3030/user/login/"+user.email+"/"+user.password).then(res => { 
      if(res.data.user != null){
        navigate("/produtos")
      }else alert(res.data.message)
     }).catch(Err => {alert(Err)})
  }
 
  function changeEmail(event) {
    setEmail(event.target.value)
  }
  function changePassword(event) {
    setPassword(event.target.value)
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
                Seja bem-vindo!
              </Form.Text>
              <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
                <Form.Label className="w-100 text-start">Email</Form.Label>
                <Form.Control onChange={changeEmail} type="email" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="w-100 text-start">Senha</Form.Label>
                <Form.Control onChange={changePassword} type="password" style={estilo.ControlInputForm} />
              </Form.Group>
              <Button onClick={login} className="mb-4" variant="primary" style={estilo.ButtonForm}>
               Entrar
              </Button>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={estilo.TextoAvisoCadastro}>Ainda não possui cadastro?<Button variant="link" style={estilo.TextoAvisoCadastro}><Link to="/cadastro">Cadastre-se</Link></Button></Form.Label>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
