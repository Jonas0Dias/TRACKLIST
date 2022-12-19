import styled from "styled-components"
import Footer from "./Footer";
import Header from "./Header";
import dayjs from "dayjs";
import { Habito } from "./Habitos";
import axios from "axios";
import React from "react";
import TodayHabits from "./TodayHabits";

export default function Hoje(props){
   
    const[color, setColor] = React.useState(false)
    const config = {
        headers: {
            Authorization: `Bearer ${props.dadosusuario.data.token}`
        }
    }

    React.useEffect(() => {axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then((resp) => {
        console.log(resp)
        props.setTodayHabits(resp.data)
        props.setQtddHabitos(parseInt(resp.data.length))  
        resp.data.map(c => {
            if(!props.habitosfeitos.includes(c.id) && c.done===true){
                props.setHabitosFeitos([...props.habitosfeitos, c.id])
            }
           
        
        })   
    } )}, [])


    return (
        <Today color={props.habitosfeitos.length===0}>
        <Header dadosusuario={props.dadosusuario}></Header>
        <div className="day">
        <h1 data-test = 'today'>{dayjs().day()===1 ? 'Segunda-Feira' : dayjs().day()===2 ? 'Terça-Feira' : dayjs().day()===3 ? 'Quarta-Feira' : dayjs().day()===4 ? 'Quinta-Feira' : dayjs().day()===5 ? 'Sexta-Feira' : dayjs().day()===6 ? 'Sábado' : 'Domingo'}, {dayjs().date()}/{dayjs().month()+1}</h1>
        <h2 data-test = 'today-counter'>{props.habitosfeitos.length===0 ? 'Nenhum hábito concluído ainda' : `${Math.trunc(props.habitosfeitos.length*100/props.qtddhabitos)}% dos hábitos conclúidos`}</h2>
        </div>
        {/* Aqui é onde entra o conteúdo da página, abaixo de header e acima de fotter */}
        {props.todayhabits.map(t =><TodayHabits done={t.done} t={t} habitosfeitos={props.habitosfeitos} setHabitosFeitos={props.setHabitosFeitos} config={config} todayhabits={props.todayhabits} setTodayHabits={props.setTodayHabits} setQtddHabitos={props.setQtddHabitos}></TodayHabits> )}
        
        <Footer qtddhabitos={props.qtddhabitos} habitosfeitos={props.habitosfeitos}></Footer>
        </Today>
    )
}

export const Today= styled.div`
background: #E5E5E5;
height: 100vh;


.day{
    padding-top: 85px;
    padding-left: 17px;
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
    color: ${props => !props.color ? '#8FC549' : '#BABABA'};
    }
`