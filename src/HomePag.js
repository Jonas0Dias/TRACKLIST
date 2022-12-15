import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function HomePag(props){
    const navigate=  useNavigate();
    console.log(props.login)
    return(
        <Home>
        <Imagem>
        
        <h1>TrackIt</h1>

        </Imagem>
        <Inputs>

        <input type='email' placeholder="email" disabled={props.habilitado} onChange={e => props.setLogin({...props.login, email: e.target.value})}></input>
        <input type='password' placeholder="senha" disabled={props.habilitado} onChange={e => props.setLogin({...props.login, password: e.target.value})}></input>
        <Button  onClick={() => {
            
            props.setHabilitado(true)
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', props.login).then((resp)=>  {
                props.setDadosUsuario(resp)
                props.setHabilitado(false);
                console.log(resp)
                navigate('/hoje')
        }).catch(() => {
            props.setHabilitado(false)
            alert('Usuário ou senha incorretos')
        })
        }} > Entrar</Button>

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