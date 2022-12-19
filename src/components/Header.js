import styled from "styled-components"
export default function Header(props){
    return(
        <Cabeçalho data-test = 'header'>
            <p>TrackIt</p>
            <img src={props.dadosusuario.data.image}></img>
            </Cabeçalho>
    )
}

export const Cabeçalho = styled.div`
width: 100%;
height: 70px;
position:fixed;
left: 0px;
top: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content: space-between;
align-items:center;

p{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left:18px;
}

img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-right:18px;
}
`