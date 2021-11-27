import './App.css';
import { Button, Form, Image } from 'react-bootstrap';
import Bk from './Components/assets/login.svg'
import Logo from './Components/assets/logo.svg'

function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#E0E5F2"
        }}>
          <img className="img-fluid"src={Logo} style={{
            width: "200px",
            height: "200px",
            position: 'absolute',
            left: 10,
            top: -50
          }}/>
          <img className="img-fluid"src={Bk} style={{
            width: "500px",
            height: "500px"
          }}/>
        </div>
        <div className="col-md-6" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
        }}>
          <div className="w-75">
          <Form className="w-100" style={{
          textAlign: "center",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.1)",
          padding: '50px',
          borderRadius: "20px",
        }}>
        <Form.Text className="text-muted" style={{
          fontSize: "30px",
          fontWeight: "bold"
        }}>
              Seja bem-vindo!
            </Form.Text>
          <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" style={{
              borderRadius: "10px",
              padding: "15px"
            }}/>
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" style={{
              borderRadius: "10px",
              padding: "15px"
            }}/>
          </Form.Group>
          <Button className="mb-4"type="submit"variant="primary" style={{
            background: '#3655C7',
            borderRadius: '30px',
            padding: '10px',
            width: '70%'
          }}>
            Entrar
          </Button>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ainda não possui cadastro?<Button variant="link">Cadastre-se</Button></Form.Label>
          </Form.Group>
        </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
