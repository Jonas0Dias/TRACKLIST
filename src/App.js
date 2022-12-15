import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import styled from "styled-components";
import HomePag from "./HomePag";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje";

function App() {

  const[habilitado, setHabilitado] = React.useState(false)
  const [login, setLogin] = React.useState({email:'' , password:''})
  const [dadosusuario, setDadosUsuario] =  React.useState({})
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePag habilitado={habilitado} setHabilitado={setHabilitado} login={login} setLogin={setLogin} dadosusuario={dadosusuario} setDadosUsuario={setDadosUsuario}></HomePag>}></Route>
    <Route path="/cadastro" element={<Cadastro habilitado={habilitado} setHabilitado={setHabilitado}></Cadastro>}></Route>
    <Route path="/hoje" element={<Hoje dadosusuario={dadosusuario} setDadosUsuario={setDadosUsuario}></Hoje>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;