import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './AtualizarDados.css';
import PrivateRoute from '../PrivateRoute'

const AtualizarDados = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    telefone: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCliente = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Usuário não autenticado. Faça login novamente.');
        return;
      }

      let decodedToken;
      try {
        decodedToken = jwtDecode(token);
      } catch (error) {
        setError('Token inválido ou expirado. Faça login novamente.');
        return;
      }

      const userId = decodedToken.id;
      
      try {
        const response = await api.get(`/users/${userId}`, {
        });
        setCliente(response.data);
      } catch (err) {
        console.error('Erro ao buscar os dados do cliente:', err);
      }
    };

    fetchCliente();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Usuário não autenticado. Faça login novamente.');
      return;
    }

    let decodedToken;
    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      setError('Token inválido ou expirado. Faça login novamente.');
      return;
    }

    const userId = decodedToken.id;

    try {
      await api.put(`/clientes/${userId}`, cliente, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Dados atualizados com sucesso!');
      navigate('/cliente/inicioCliente');
    } catch (err) {
      console.error('Erro ao atualizar os dados do cliente:', err);
      setError('Não foi possível atualizar os dados do cliente.');
    }
  };

  return (
    <PrivateRoute>
    <div className="atualizar-dados">
      <h1>Atualizar Dados do Cliente</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={cliente.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={cliente.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Logradouro:</label>
          <input
            type="text"
            name="logradouro"
            value={cliente.logradouro}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bairro:</label>
          <input
            type="text"
            name="bairro"
            value={cliente.bairro}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={cliente.cidade}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>UF:</label>
          <input
            type="text"
            name="uf"
            value={cliente.uf}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={cliente.cep}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={cliente.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
    </PrivateRoute>
  );
};

export default AtualizarDados;