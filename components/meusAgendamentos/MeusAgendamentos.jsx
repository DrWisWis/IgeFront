import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import PrivateRoute from '../PrivateRoute'

const MeusAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [error, setError] = useState('');

  const fetchAgendamentos = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const agendamentosStorage = JSON.parse(localStorage.getItem(`agendamentos_${userId}`)) || [];
    if (agendamentosStorage.length > 0) {
      setAgendamentos(agendamentosStorage);
    } else {
      setError('Nenhum agendamento encontrado.');
    }
  };

  useEffect(() => {
    fetchAgendamentos()
  }, [])

  return (
    <PrivateRoute>
    <div>
      {error && <p>{error}</p>}
      <h1>Meus Agendamentos</h1>
      <ul>
        {agendamentos.map((agendamento, index) => (
          <li key={index}>
            {agendamento.descricao} - {agendamento.dataAgendamento} às {agendamento.horarioAgendamento}
          </li>
        ))}
      </ul>
    </div>
    </PrivateRoute>
  );
};

export default MeusAgendamentos;