import styled from "styled-components"
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"
import { Today } from "./Hoje"

export default function Historico(props) {
    return (
        <Today color={true}>
            
                <Header dadosusuario={props.dadosusuario} ></Header>
                <div className="day">
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </div>
                <Footer qtddhabitos={props.qtddhabitos} habitosfeitos={props.habitosfeitos}></Footer>
       

        </Today>

    )
}