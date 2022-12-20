
import styled from "styled-components"
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"
import React from "react"
import DaysWeek from "./DaysWeek"
import CreateHabit from "./CreateHabit"
import daysweek from "./diasdasemana"

export default function Habitos(props) {
  
    const [habitos, setHabitos] = React.useState('')
    const [on, setOn] = React.useState(false)
    const config = {
        headers: {
            Authorization: `Bearer ${props.dadosusuario.data.token}`
        }
    }
    React.useEffect(() => {

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config).then((resp) => {
            setHabitos(resp)
        })
    }, [])
    if (typeof (habitos) === 'string') {

    }
    if (typeof (habitos) === 'object' && habitos.data.length === 0) {
        
        return (
            <Habits>
                <Header dadosusuario={props.dadosusuario} on={on}></Header>
                <div className="habitspag">
                    <div className="topo">
                        <p>Meus hábitos</p>
                        <button data-test = 'habit-create-btn' onClick={() => setOn(true)}><img src="./assets/img/+.png"></img></button>
                    </div>
                    <CreateHabit on={on} setOn={setOn} habitdata={props.habitdata} setHabitData={props.setHabitData} setHabitos={setHabitos} config={config} setTodayHabits={props.setTodayHabits}></CreateHabit>
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </div>
                <Footer qtddhabitos={props.qtddhabitos} habitosfeitos={props.habitosfeitos}></Footer>
            </Habits>
        )
    }

    if ((typeof (habitos) === 'object' && habitos.data.length !== 0)){
    console.log(habitos.data)
        return (
            <Habits>
                <Header dadosusuario={props.dadosusuario} on={on}></Header>
                <div className="habitspag">

                    <div className="topo">
                        <p>Meus hábitos</p>
                        <button onClick={() => setOn(true)}><img src="./assets/img/+.png"></img></button>
                    </div>
                    
                    <CreateHabit on={on} setOn={setOn} habitdata={props.habitdata} setHabitData={props.setHabitData} setHabitos={setHabitos} config={config} setTodayHabits={props.setTodayHabits} ></CreateHabit>

                    {habitos.data.map(h => <Habito data-test = 'habit-container'><div className="titulo"><p data-test = 'habit-name'>{h.name}</p><img data-test = 'habit-delete-btn' src="./assets/img/trash.png" onClick={() => {
                            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`, config).then(() => {console.log('sucesso')
                            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config).then((resp) => {
                                setHabitos(resp)
                            })
                        }
                            
                            )

                    }}></img></div>
                    <div className="daysweek" >
                    {daysweek.map(d =>
                                <DaysWeek dis={true} pos={parseInt(d.pos)} days={h.days} name={d.name} habitdata={props.habitdata} setHabitData={props.setHabitData}></DaysWeek>

                            )}</div></Habito>)}
                     


                </div>


                <Footer qtddhabitos={props.qtddhabitos} habitosfeitos={props.habitosfeitos}></Footer>
            </Habits>

        )
                }
}


export const Habito = styled.div`
    box-sizing: border-box;
    width: 94%;
    padding: 17px 17px;
    margin:auto;
    margin-top: 17px;
    background: #FFFFFF;
    border-radius: 5px;

    .titulo div{
        align-items:center;
        display:flex;
        justify-content:center;
        width: 69px;
        height: 69px;
        background: ${props => props.done ? 'green' : '#EBEBEB' };
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        & img{
            width:35px;
            height:28px;
        }
    }

    h1,h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        width: 70%;
    }
    img{
        width: 15px;
        height: 15px;
    }

    .titulo{
        display:flex;
        justify-content: space-between;
    }

    .daysweek{
        display:flex;
        justify-content: space-between;
        margin-top: 10px;
        width: 260px;
    }
`


export const Habits = styled.div`
height:100vh;
background: #E5E5E5;
.habitspag{
    padding-top: 90px;
    padding-bottom: 90px;
    & h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 28px;
        margin-left: 18px;
    }
}

.botoes{
    width:100%;
    display:flex;
    justify-content:end;
    left: -47px;
    top: 300px;
    position:absolute;
    button:nth-child(1){
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        border: 0;
        background: white;
        margin-right: 10px;
    }
    button:nth-child(2){
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }
}

.days{
    display:flex;
    justify-content:space-between;
    width:260px;
   
}


.topo {
    top: 98px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 17px;
    box-sizing: border-box;
}

.topo button {
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
}
.topo p{   
   
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}


`