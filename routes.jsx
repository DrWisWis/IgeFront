import {BrowserRouter, Routes, Route, Router } from 'react-router-dom'


import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Login from './pages/Login';
import Cliente from './pages/Cliente'
import CadFuncionario from './pages/CadFuncionario'
import Funcionario from './pages/Funcionario'



function RoutesApp(){
 return(
    <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/funcionario/*" element={<Funcionario/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cliente/*" element={<Cliente/>}/>
                <Route path="/CadFuncionario" element={<CadFuncionario/>}/>
            </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;
