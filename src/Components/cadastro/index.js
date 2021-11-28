import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Img } from '../imgs'
import Bk from '../assets/cadastro.svg'
import Logo from '../assets/logo.svg'
import { style } from './styles'


export const Cadastro = () => {
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
                <Form.Control type="text" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
                <Form.Label className="w-100 text-start">E-mail</Form.Label>
                <Form.Control type="email" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-100 text-start">Senha</Form.Label>
                <Form.Control type="password" style={estilo.ControlInputForm} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-100 text-start">Confirmar Senha</Form.Label>
                <Form.Control type="password" style={estilo.ControlInputForm} />
              </Form.Group>
              <Button className="mb-4" type="submit" variant="primary" style={estilo.ButtonForm}>
                Cadastrar
              </Button>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label style={estilo.TextoAvisoCadastro}>Já possui cadastro?<Button variant="link" style={estilo.TextoAvisoCadastro}>Login</Button></Form.Label>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
