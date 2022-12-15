import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Cadastro(props){
    const navigate=useNavigate();
    const [usuario, setUsuario] = React.useState({email:'',name:'',image:'',password:''})
    
    console.log(usuario)
    return(
        <Home>
        <Imagem>
        
        <h1>TrackIt</h1>

        </Imagem>
        <Inputs>

        <input type='email' placeholder="email" value={usuario.email} onChange={e => setUsuario({...usuario, email: e.target.value})} disabled={props.habilitado}></input>
        <input type='text' placeholder="nome" onChange={e => setUsuario({...usuario, name: e.target.value})} disabled={props.habilitado}></input>
        <input type='url' placeholder="imagem" onChange={e => setUsuario({...usuario, image: e.target.value})} disabled={props.habilitado}></input>
        <input type='password' placeholder="senha" onChange={e => setUsuario({...usuario, password: e.target.value})} disabled={props.habilitado}></input>
        <Button onClick={() => {
            
            props.setHabilitado(true)
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', usuario).then(()=>  {
                props.setHabilitado(false);
                navigate('/')
        }).catch(() => props.setHabilitado(false))
        }}> Cadastrar</Button>

        </Inputs>
        <Link to='/'><p className="cadastro" > Já tem uma conta? Faça login!</p></Link>

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

min-height:280px;
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