import styled from "styled-components"
import Footer from "./Footer";
import Header from "./Header";
export default function Hoje(props){
    console.log(props.dadosusuario)
    const percentage = 66;
    return (
        <Today>
        <Header dadosusuario={props.dadosusuario}></Header>

        {/* Aqui é onde entra o conteúdo da página, abaixo de header e acima de fotter */}

        <Footer></Footer>
        </Today>
    )
}

const Today= styled.div`
background: #E5E5E5;
height: 100vh;
`