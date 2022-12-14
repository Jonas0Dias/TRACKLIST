import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import styled from "styled-components";
import HomePag from "./HomePag";
import Cadastro from "./Cadastro";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePag></HomePag>}></Route>
    <Route path="/cadastro" element={<Cadastro></Cadastro>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
