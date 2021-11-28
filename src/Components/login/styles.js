export const style = () => {
    const Fundo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#E0E5F2"
    }
    const FundoForm = {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
    }
    const Formul = {
        textAlign: "center",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(0, 0, 0, 0.1)",
        padding: '50px',
        borderRadius: "20px",
    }
    const TextoFormul = {
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center"
    }
    const ControlInputForm = {
        borderRadius: "10px",
        padding: "15px"
    }
    const ButtonForm = {
        background: '#3655C7',
        borderRadius: '16px',
        padding: '10px',
        width: '60%'
    }
    const TextoAvisoCadastro = {
        fontSize: '13px',
        textDecoration: 'none'

    }
    return { Fundo, FundoForm, Formul, TextoFormul, ControlInputForm, ButtonForm, TextoAvisoCadastro }
}