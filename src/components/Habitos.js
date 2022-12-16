
import styled from "styled-components"
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"
import React from "react"
import DaysWeek from "./DaysWeek"


export default function Habitos(props) {
    const daysweek = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
    const [habitos, setHabitos] = React.useState('')
    const [on, setOn] = React.useState(false)
    console.log(habitos)
    const config = {
        headers: {
            Authorization: `Bearer ${props.dadosusuario.data.token}`
        }
    }
    React.useEffect(() => {
       
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config).then((resp) => {
            console.log(typeof (resp))
            setHabitos(resp)
        })
    }, [])
    console.log(typeof (habitos))
    if (typeof (habitos) === 'string') {

    }
    if (typeof (habitos) === 'object' && habitos.data.length === 0) {
        return (
            <Habits>
                <Header dadosusuario={props.dadosusuario} on={on}></Header>
                <div className="habitspag">
                    <div className="topo">
                        <p>Meus hábitos</p>
                        <button onClick={() => setOn(true)}><img src="./assets/img/+.png"></img></button>
                    </div>
                    <Habito on={on}>
                        <input type='text' placeholder="nome do habito" value={props.habitdata.name} onChange={e => props.setHabitData({...props.habitdata, name: e.target.value})}></input>
                        <div className="days">
                            {daysweek.map(d => 
                                <DaysWeek pos={daysweek.indexOf(d)} d={d} habitdata={props.habitdata} setHabitData={props.setHabitData}></DaysWeek>

                            )}
                        </div>
                        <div className="botoes">
                            <button onClick={() => setOn(false)}>Cancelar</button>
                            <button onClick={() => {
                                console.log(props.habitdata)
                                setOn(false);
                                axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', props.habitdata, config ).then((resp) => console.log(resp))
                                
                                }}>Salvar</button>
                        </div>

                    </Habito>
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </div>
                <Footer></Footer>
            </Habits>
        )
    }
    return (
        <></>

    )
}

const Habito = styled.div`
margin-left: 15px;
margin-top: 22px;
display:${props => props.on ? 'block' : 'none'};
width: 95%;
padding: 17px 17px;
box-sizing: border-box;
left: 17px;
top: 147px;
height: 200px;
background: #FFFFFF;
border-radius: 5px;
input{
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom:8px;
}
&::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}
}
`
const Habits = styled.div`
background: #E5E5E5;
height: 100vh;
.habitspag{
    padding-top: 90px;
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
    left: -25px;
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
    width:392px;
   
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
    width: 148px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}


`