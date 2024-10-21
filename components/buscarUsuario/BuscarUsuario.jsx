import React from "react"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
import "./BuscarUsuario.css"
import PrivateRoute from '../PrivateRoute'

import api from "../../services/api"

const DataList = () => {

 const[data, setData] = useState([]);
 const[loading, setLoading] = useState(true);
 const[error, setError] = useState(null);

 const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
  });

 useEffect(() =>{
  api.get("users").then(response =>{
    console.log(response.data)
    setData(response.data);
    setLoading(false);
  })
  .catch(error => {
    setError(error.message);
    setLoading(false);
  });

},[]);

const handleUpdate = (user) => {
  setSelectedUser(user);
  setUpdateForm({
    nome: user.nome,
    email: user.email,
    dataNascimento: user.dataNascimento,
    tipoUsuario: user.tipoUsuario
  });
  setShowPopup(true);
};
const handleDelete = (userId) => {
  api.delete(`users/${userId}`).then(() => {
    setData(data.filter(user => user.id !== userId));
  }).catch(error => {
    console.error("Erro ao deletar usuário:", error);
  });
};
const handleSubmit = () => {
  console.log("Dados enviados para atualização:", updateForm);
  api.put(`users/${selectedUser.id}`, updateForm)
  .then(response => {
    setData(data.map(user => user.id === selectedUser.id ? response.data : user));
    setShowPopup(false);
  }).catch(error => {
    console.error("Erro ao atualizar usuário:", error);
  });
};

 if (loading) return <p id="p-lista">Carregando...</p>;
 if (error) return <p id="p-lista">Erro: {error}</p>;

 return(
  <PrivateRoute>
  <div>


<div className="content-agendamentos">
  <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item =>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.dataNascimento}</td>
                <td>
                  <button onClick={() => handleUpdate(item)}>Atualizar</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>Deletar</button>
                    </td>
              </tr>
             ))}
        </tbody>
      </table> 
      {showPopup && (
<div className="popup">
<div className="popup-content">
<h3>Atualizar Usuário</h3>
<label>Nome:</label>
<input
              type="text"
              value={updateForm.nome}
              onChange={(e) => setUpdateForm({ ...updateForm, nome: e.target.value })}
            />
<label>Email:</label>
<input
              type="email"
              value={updateForm.email}
              onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })}
            />
<label>Data de Nascimento:</label>
<input
              type="date"
              value={updateForm.dataNascimento}
              onChange={(e) => setUpdateForm({ ...updateForm, dataNascimento: e.target.value })}
            />
<button onClick={handleSubmit}>Salvar</button>
<button onClick={() => setShowPopup(false)}>Cancelar</button>
</div>
</div>
      )} 
      </div>
      
      </div>
      </PrivateRoute>
 );
};

export default DataList;