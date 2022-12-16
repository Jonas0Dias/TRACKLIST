
import React from "react"
import styled from "styled-components"

export default function DaysWeek(props){
    const [on, setOn]=React.useState(false)

    return (
        <Botao on={on} onClick={() => {
            console.log(props.habitdata.days)
            setOn(!on)        
            if (props.habitdata.days.includes(props.pos)){
                props.setHabitData({...props.habitdata, days: props.habitdata.days.filter(item => item!=props.pos).sort()})
                
            }
            else{
                props.setHabitData({...props.habitdata, days: [...props.habitdata.days, props.pos].sort()})
            }

        }}>{props.d}</Botao>
    )
}


const Botao=styled.div`
    display:flex;
    align-items:center;
    width:48px;
    height: 48px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.on ? '##FFFFFF' : '#DBDBDB'};
    background: ${props => props.on ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    text-align: center;
`