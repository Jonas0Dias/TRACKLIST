import styled from "styled-components"
import { Link } from "react-router-dom"

export default function HomePag(){
    return(
        <Home>
        <Imagem>
        
        <h1>TrackIt</h1>

        </Imagem>
        <Inputs>

        <input type='text' placeholder="email"></input>
        <input type='text' placeholder="senha"></input>
        <Button> Entrar</Button>

        </Inputs>
        <Link to='/cadastro'><p className="cadastro" > Não tem uma conta? Cadastre-se</p></Link>

        </Home>
    )
}


const Home=styled.div`
height:100vh;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: #E5E5E5;
`

const Imagem=styled.div`

h1{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    text-align: center;
    color: #126BA5;
`


const Inputs= styled.div`

min-height:160px;
display:flex;
justify-content: space-between;
flex-direction: column;
margin-bottom:25px;
margin-top:30px;
input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}
`

const Button = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #FFFFFF;
`