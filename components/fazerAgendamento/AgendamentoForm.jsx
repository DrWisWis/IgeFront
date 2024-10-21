import React, { useState } from 'react';
import  api  from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import "./AgendamentoForm.css"
import PrivateRoute from '../PrivateRoute'

const AgendamentoForm = () => {
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horarioAgendamento, setHorarioAgendamento] = useState('');
  const [descricaoAgendamento, setDescricaoAgendamento] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token')
      const decodedToken = jwtDecode(token)
      const userId = decodedToken.id

      const agendamentoData = {
        userId,
        dataAgendamento,
        horarioAgendamento,
        descricaoAgendamento,
        cliente: {
          id: userId,
          tipoUsuario: 'Cliente'
        }
      };

      
      const response = await api.post('/clientes/agendamento', agendamentoData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Agendamento realizado:', response.data);

      const userAgendamentos  = JSON.parse(localStorage.getItem(`agendamentos_${userId}`)) || [];
      userAgendamentos.push(response.data);
    localStorage.setItem(`agendamentos_${userId}`, JSON.stringify(userAgendamentos));

      alert(`Agendamento Confirmado!\nData: ${dataAgendamento}\nHora: ${horarioAgendamento}\nServiço: ${descricaoAgendamento}`)

      setDataAgendamento('')
      setHorarioAgendamento('')
      setDescricaoAgendamento('')

    } catch (error) {
      console.error('Erro ao agendar:', error);
    }
  };

  return (
    <PrivateRoute>
    <div>
    <div className="box-agendar">
    <h1>Agendar</h1>
      <div className="cont-agendar">
    <form onSubmit={handleSubmit} className="form-agendar">
      <div>
        <label className='label-agendar'>Data:</label>
        <input 
          className='input-agendar'
          type="date"
          value={dataAgendamento}
          onChange={(e) => setDataAgendamento(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='label-agendar'>Hora:</label>
        <input 
          className='input-agendar'
          type="time"
          value={horarioAgendamento} 
          onChange={(e) => setHorarioAgendamento(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label className='label-agendar'>Serviço:</label>
        <input 
         className='input-agendar'
          type="text" 
          value={descricaoAgendamento} 
          onChange={(e) => setDescricaoAgendamento(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className='btn-send-agendar'>Agendar</button>
    </form>
    </div>
    </div>
    </div>
    </PrivateRoute>
    
  );
};

export default AgendamentoForm;