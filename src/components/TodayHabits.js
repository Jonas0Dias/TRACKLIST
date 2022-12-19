import { Habito } from "./Habitos"
import React from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function TodayHabits(props) {
    
    const [carregando, setCarregando] = React.useState(false)
    const [done, setDone] = React.useState(props.done)
    return (
        <Habito  done={done}>
            <div className="titulo" ><p>{props.t.name}</p><div onClick={(e) => {
                
                setCarregando(true)
                 setDone(!done)
                    

                if (props.habitosfeitos.includes(props.t.id)) {

                    
                    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.t.id}/uncheck`, {}, props.config).then(() => {props.setHabitosFeitos(props.habitosfeitos.filter(item => item !== props.t.id))
                    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', props.config).then((resp) => {
                        props.setTodayHabits(resp.data) 
                        props.setQtddHabitos(parseInt(resp.data.length))
                        setCarregando(false)
                    })
                });
                   
                }
                else if (!props.habitosfeitos.includes(props.t.id)) {
                    
                    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.t.id}/check`, {}, props.config).then(() => {props.setHabitosFeitos([...props.habitosfeitos, props.t.id])
                    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', props.config).then((resp) => {
                        props.setTodayHabits(resp.data) 
                        props.setQtddHabitos(parseInt(resp.data.length))
                        setCarregando(false)
                    })
                })


                }

            }}>{carregando===true ? <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="white" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                 /> : <img src="./assets/img/check.png"></img> }</div></div>
            <h1>{`Sequência atual: ${props.t.currentSequence} dias`}</h1>
            <h2>{`Seu recorde: ${props.t.highestSequence} dias`}</h2>
        </Habito>
    )
}