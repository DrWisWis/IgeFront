import React from 'react';
import { Link, Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import ListarAgendamentos from '../../components/listarAgendamento/ListarAgendamentos ';
import BuscarUsuario from '../../components/buscarUsuario/BuscarUsuario';
import "./Funcionario.css";

function Funcionario() {
  const match = useMatch('/funcionario/*')
  const path = match?.path ?? '/funcionario'
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nome');
    navigate('/login')
  }

  const nome = localStorage.getItem('nome') || 'Funcionario';
  console.log('Nome do usuário:', nome)

  return (
    <PrivateRoute>
      <div>
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
          <link rel="shortcut icon" type="image/png" href="./assets/img/2.png"></link>
        </div>
        <div className="sidebar-funcionario">
          <div className="logo-side-funcionario">
            <a href="/"><img src="./src/assets/logo_white-sf.png" id="img-side-funcionario" /></a>
          </div>
          <div className="side-funcionario">
            <Link to={`${path}/inicioFuncionario`} className="nav__func-link">
              <div className="components-side-funcionario">
                <i class="bi bi-house-door" id="icon-side-funcionario"></i>
                <span class="nav__func-name"> Início</span>
              </div>
            </Link>
            <a href="/CadFuncionario" class="nav__func-link">
              <div className="components-side-funcionario">
                <i class="bi bi-person-badge" id="icon-side-funcionario"></i>
                <span class="nav__func-name"> Add Funcionário</span>
              </div>
            </a>
            <Link to={`${path}/listarAgendamentos`} className="nav__func-link">
              <div className="components-side-funcionario">
                <i class="bi bi-calendar-check" id="icon-side-funcionario"></i>
                <span class="nav__func-name"> Agendamentos</span>
              </div>
            </Link>
            <Link to={`${path}/buscarUsuarios`} className="nav__func-link">
              <div className="components-side-funcionario">
                <i class="bi bi-card-list" id="icon-side-funcionario"></i>
                <span class="nav__func-name">Listar Usuários</span>
              </div>
            </Link>
          </div>
          <button className="btn-login-out-funcionario" onClick={handleLogout}>logout</button>
        </div>
        <div className="content-funcionario">
          <Routes>
            <Route path="inicioFuncionario" element={<h2>Bem-vindo, {nome}, à página inicial do Funcionário</h2>} />
            <Route path="listarAgendamentos" element={<ListarAgendamentos />} />
            <Route path="buscarUsuarios" element={<BuscarUsuario />} />
          </Routes>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default Funcionario;