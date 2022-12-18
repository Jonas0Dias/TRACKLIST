import { Habito } from "./Habitos"
import React from "react"

export default function TodayHabits(props){
    const [check, setCheck] = React.useState(false)
    return(
        <Habito check={check}>
                <div className="titulo" ><p>{props.t.name}</p><div onClick={() => setCheck(!check)}><img src="./assets/img/check.png"></img></div></div>
                <h1>{`Sequência atual: ${props.t.currentSequence} dias`}</h1>
                <h2>{`Sequência atual: ${props.t.highestSequence} dias`}</h2>
        </Habito>
    )
}