import styled from "styled-components";
import axios from "axios";
import DaysWeek from "./DaysWeek";
import daysweek from "./diasdasemana";

export default function CreateHabit(props){
    
    return(
        <CriarHabito data-test = 'habit-create-container' on={props.on}>
                        <input data-test = 'habit-name-input' type='text' placeholder="nome do habito" value={props.habitdata.name} onChange={e => props.setHabitData({ ...props.habitdata, name: e.target.value })}></input>
                        <div className="days">
                            {daysweek.map(d =>
                                <DaysWeek dis={false} days={[]} pos={d.pos} name={d.name} habitdata={props.habitdata} setHabitData={props.setHabitData}></DaysWeek>

                            )}
                        </div>
                        <div className="botoes">
                            <button data-test = 'habit-create-cancel-btn' onClick={() => {
                                
                                props.setOn(false)}
                                
                                }>Cancelar</button>
                            <button data-test = 'habit-create-save-btn' onClick={() => {
                                console.log(props.habitdata)
                                props.setOn(false);
                                axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', props.habitdata, props.config).then((resp) => {
                                    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', props.config).then((resp) => {
                                        props.setHabitos(resp)
                                    })

                                })
                                props.setHabitData({name:'', days:[]})
                                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', props.config).then((resp) => {
        props.setTodayHabits(resp.data)
        console.log(resp)
    } )
                            }}>Salvar</button>
                        </div>

                    </CriarHabito>
    )
}


const CriarHabito = styled.div`
margin:auto;
margin-top: 22px;
display:${props => props.on ? 'block' : 'none'};
width: 94%;
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
.days{
    width: 260px;

}
`