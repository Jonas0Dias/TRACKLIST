import styled from "styled-components"
import { CircularProgressbar, buildStyles } from'react-circular-progressbar';
import { Link } from "react-router-dom";




export default function Footer(props) {
   
    return (
        <Rodapé data-test = 'menu'>
            <Link to='/habitos' data-test = 'habit-link'><p>Hábitos</p></Link>
            <div className="teste"> <Link to='/hoje'><CircularProgressbar data-test = 'today'
                className="barraprogresso"
                value={props.habitosfeitos.length*100/props.qtddhabitos} 
                text={`Hoje`}
                background={true}
				backgroundPadding={8}
                styles={{
                    text: {
                        fill: "#fff",
                    },
                    background: {
                        fill: "#3e98c7",
                    },
                    trail: {
                        stroke: "#3e98c7",
                    },
                    path: {
                        stroke: "#fff",
                    },
                }} /></Link></div>
            
            <Link to='/historico' data-test = 'history-link'><p>Histórico</p></Link>
        </Rodapé>
    )
}

export const Rodapé = styled.div`
box-sizing: border-box;
padding-left: 30px;
padding-right: 30px;
width: 100%;
height: 70px;
position:fixed;
left: 0px;
bottom: 0px;
background: #FFFFFF;
display:flex;
justify-content: space-between;
align-items:center;
a {
    text-decoration: none;
}
.teste{
    text-align:center;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
}
`