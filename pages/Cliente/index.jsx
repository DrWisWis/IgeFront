import React from 'react';
import { Link, Route, Routes, useMatch, useNavigate  } from 'react-router-dom'
import "./Cliente.css";
import PrivateRoute from '../../components/PrivateRoute'
import AgendamentoForm from '../../components/fazerAgendamento/AgendamentoForm'
import MeusAgendamentos from '../../components/meusAgendamentos/MeusAgendamentos'
import AtualizarDados from '../../components/atualizarDados/AtualizarDados'


function Cliente() {

  const match = useMatch('/cliente/*')
  const path = match?.path ?? '/cliente'
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <PrivateRoute>

    <div>
            <div>
                  {}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                    <link rel="shortcut icon" type="image/png" href="./assets/img/2.png"></link>
                    
            </div>
      <div className="sidebar-cliente">
        <div className="logo-side-ige">
          <a href="/"><img src="./src/assets/logo_white-sf.png" id="img-side-cliente" /></a>
        </div>
        <div className="side-cliente">
        <Link to={`${path}/inicioCliente`} className="nav__link">
            <div className="components-side-client">
              <i class="bi bi-house-door" id="icon-side-cliente"></i>
              <span class="nav__name"> Inicio</span>
            </div>
            </Link>
            <Link to={`${path}/agendar`} className="nav__link">
            <div className="components-side-client">
            <i class="bi bi-calendar-plus" id="icon-side-cliente"></i>
              <span class="nav__name"> Agendar</span>
              </div>
              </Link>
              <Link to={`${path}/meuAgendamento`} className="nav__link">
            <div className="components-side-client">
            <i class="bi bi-calendar-check" id="icon-side-cliente"></i>
              <span class="nav__name"> Meus Agendamentos</span>
              </div>
              </Link>
              <Link to={`${path}/atualizarDados`} className="nav__link">
            <div className="components-side-client">
            <i class="bi bi-calendar-check" id="icon-side-cliente"></i>
              <span class="nav__name">Atualizar dados</span>
              </div>
              </Link>
        </div>
        <button className="btn-login-out-cliente" onClick={handleLogout}>Logout</button>
      </div>
      <div className="content-agendamentos">
          <Routes>
            <Route path="inicioCliente" element={<h2>Bem-vindo à página inicial do Cliente</h2>} />
            <Route path="agendar" element={<AgendamentoForm />} />
            <Route path="meuAgendamento" element={<MeusAgendamentos />} />
            <Route path="atualizarDados" element={<AtualizarDados />} />
          </Routes>
        </div>
    </div>
    </PrivateRoute>
  );
};



export default Cliente;