import { Habito } from "./Habitos"
import React from "react"
import axios from "axios"

export default function TodayHabits(props){
    const [check, setCheck] = React.useState(false)
    console.log(props)
    return(
        <Habito check={check}>
                <div className="titulo" ><p>{props.t.name}</p><div onClick={(e) => 
                    {setCheck(!check)
                    
                  
                    if (props.habitosfeitos.includes(props.t.id)){
                      
                        props.setHabitosFeitos(props.habitosfeitos.filter(item => item!== props.t.id))
                        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.t.id}/uncheck`, {}, props.config).then(()=> console.log('teste'))

                    }
                    else{
                        props.setHabitosFeitos([...props.habitosfeitos,props.t.id])
                        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.t.id}/check`, {}, props.config).then(()=> console.log('teste'))

                      
                    }
                   
                    }}><img src="./assets/img/check.png"></img></div></div>
                <h1>{`Sequência atual: ${props.t.currentSequence} dias`}</h1>
                <h2>{`Sequência atual: ${props.t.highestSequence} dias`}</h2>
        </Habito>
    )
}