import styled from "styled-components"
import Footer from "./Footer";
import Header from "./Header";
import dayjs from "dayjs";

export default function Hoje(props){
    console.log(props.dadosusuario)
    const percentage = 66;
    return (
        <Today>
        <Header dadosusuario={props.dadosusuario}></Header>
        <div className="day">
        <h1>{dayjs().day()===0 ? 'Segunda-Feira' : dayjs().day()===1 ? 'Terça-Feira' : dayjs().day()===2 ? 'Quarta-Feira' : dayjs().day()===3 ? 'Quinta-Feira' : dayjs().day()===4 ? 'Sexta-Feira' : dayjs().day()===5 ? 'Sábado' : 'Domingo'}, {dayjs().date()}/{dayjs().month()+1}</h1>
        <h2>Nenhum hábito concluído ainda</h2>
        </div>
        {/* Aqui é onde entra o conteúdo da página, abaixo de header e acima de fotter */}

        <Footer></Footer>
        </Today>
    )
}

const Today= styled.div`
background: #E5E5E5;
height: 100vh;
.day{
    position: absolute;
    top: 98px;
    left: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}

.day h2{
    
    width: 278px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    }
`