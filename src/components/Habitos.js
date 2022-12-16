
import styled from "styled-components"
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"
import React from "react"

export default function Habitos(props) {
    const [habitos, setHabitos] = React.useState('')
    console.log(habitos)
    React.useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${props.dadosusuario.data.token}`
            }
        };
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config).then((resp) => {
        console.log(typeof(resp))
        setHabitos(resp)
    })
    }, [])
    console.log(typeof(habitos))
    if (typeof(habitos) === 'string'){
        
    }
    if (typeof(habitos)==='object' && habitos.data.length === 0) {
        return(
        <Habits>
            <Header dadosusuario={props.dadosusuario}></Header>
            <div className="topo">
                <p>Meus hábitos</p>
                <button onClick={() => true}><img src="./assets/img/+.png"></img></button>
            </div>
            <div className="habito">
                <input type='text' placeholder="nome do habito"></input>
                <div className="days">
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                </div>
                <div className="botoes">
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>

            </div>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

            <Footer></Footer>
        </Habits>
        )
    }
    return (
        <></>

    )
}
const Habits = styled.div`
background: #E5E5E5;
height: 100vh;
>p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    position: absolute;
    left: 19px;
    top: 356px;
}
.botoes{
    width:100%;
    display:flex;
    justify-content:end;
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
.days div{
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    text-align: center;
    }
.days{
    display:flex;
    justify-content:space-between;
    width:234px;
   
}

.habito{
    position: absolute;
    width: 95%;
    padding: 17px 17px;
    box-sizing: border-box;
    left: 17px;
    top: 147px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    input{
        box-sizing: border-box;
        width: 303px;
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
.topo {
    position: absolute;
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