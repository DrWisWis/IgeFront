import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email, senha)

      localStorage.setItem('token', token)

      const decodedToken = jwtDecode(token)
      console.log('Token Decodificado:', decodedToken)

      const { roles, nome: nome } = decodedToken
      setNome(nome)
      localStorage.setItem('nome', nome || 'Usuario')

      console.log('roles:', roles);

      if (roles == 'ROLE_FUNCIONARIO') {
        navigate('/funcionario/inicioFuncionario')
      } else if (roles == 'ROLE_CLIENTE') {
        navigate('/cliente/inicioCliente')
      } else {
        setError('Tipo de usuário desconhecido.')
      }
    } catch (error) {
      console.error('Erro no login:', error)
      setError('Falha no login. Verifique suas credenciais.')
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="login">
    <div className="img-left">
        <img src="/src/assets/img-login.png"/>
      </div>
    <div className="container-login">
      <div className="form-login">
        <div className="logo-login">
          <a href="/"><img src="/src/assets/logo_black-sf.png"/></a>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="title-login">
            <h1>Faça o Login</h1>
          </div>
          <div className="input-login">
              <div class="input-box">
                <label for="email">E-mail:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
              </div>
              <div class="input-box">
                <label for="password">Senha:</label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" required/>
              </div>
              <div className="btn-login">
                <button className="button">Login</button>
                <p>Não possui um cadastro? <a href="/usuario"><b>Cadastrar-se</b></a></p>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;