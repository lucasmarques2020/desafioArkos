export const style = () => {

    const ButtonMenu = {
        textDecoration: "none",
        fontWeight: "bold",
        outline: "none",
        styleDecoration: "none"
    }
    const FundoMenu = {
        background: "#E0E5F2",
        fontWeight: "bold",
        width: "200px",
        height: "100px"
    }

    const ButtonBuscar = {
        background: "#3655C7",
        color: "white",
        borderRadius: "15px",
        width: "60px"
    }

    const CardsStilo = {
        borderRadius: "15px",
        maxWidth: '15rem',
        margin: 0, 
        padding: 0
    }

    const CardsStiloImg = {
        height: "200px",
        width: "auto"
    }

    
    return { ButtonMenu, FundoMenu,  ButtonBuscar, CardsStilo, CardsStiloImg }
}