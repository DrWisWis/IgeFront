// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { useState } from "react";
import api from "../../services/api";

const Usuario = () => {
 
  const [etapa, setEtapa] = useState(1);
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [dataNascimento, setData] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('')

  const handleSubmit = async () =>{
    try{
      const response = await api.post('users/funcionario',{
        nome: nome,
         email: email,
          senha: senha,
           dataNascimento: dataNascimento,
            tipoUsuario: 'Funcionario', 
      logradouro: logradouro,
       bairro: bairro,
        cidade: cidade,
         uf: uf,
          cep: cep,
           telefone: telefone
          })
      alert(`${response.data.nome} Cadastrado com Sucesso!`)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  const proximaEtapa = () => setEtapa(etapa + 1);
  const etapaAnterior = () => setEtapa(etapa - 1);


return(
           
  <div>
  <div className="container-form-registro">
    <div className="img-form-registro">
      <a href="/"><img src="./src/assets/logo_black-sf.png"/></a>
    </div>
    <form>
    <div className="form-registro">
    {etapa === 1 && (
      <div className="account-left-registro">
          <div className="title-rig">
            <h1>Conta Funcionario</h1>
          </div>
          <div className="input-registro">
            <label for="">Email:</label>
            <input type="email" placeholder="Digite seu Email" required onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Senha:</label>
            <input type="password" placeholder="Digite sua Senha" required onChange={(e)=>setSenha(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Confirmar Senha:</label>
            <input type="password" placeholder="Confirme sua Senha" required/>
          </div>
          <div className="btn-send-registro">
          <button type="button" onClick={proximaEtapa}>Próximo</button>
        </div>
        </div>
    )}
    {etapa === 2 && (
        <div className="left-input-registro">
          <div className="title-rig">
            <h1>Informações</h1>
          </div>
          <div className="input-registro">
            <label for="">Nome:</label>
            <input type="text" placeholder="Digite seu Nome" required onChange={(e)=>setNome(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Data de Nascimento:</label>
            <input type="date" placeholder="Digite sua data de nascimento" required onChange={(e)=>setData(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Telefone:</label>
            <input type="tel" placeholder="Digite seu Telefone" required onChange={(e)=>setTelefone(e.target.value)}/>
          </div>
          <div className="btn-send-registro">
          <button type="button" onClick={etapaAnterior}>Voltar</button>
          <br />
        <button type="button" onClick={proximaEtapa}>Próximo</button>
        </div>
        </div>
    )}
    {etapa === 3 && (
        <div className="right-input-registro">
          <div className="title-rig">
            <h1>Endereço</h1>
          </div>
        <div className="input-registro">
            <label for="">CEP:</label>
            <input type="text" placeholder="Digite seu CEP" required onChange={(e)=>setCep(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Endereço:</label>
            <input type="text" placeholder="Digite seu Endereço" required onChange={(e)=>setLogradouro(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Bairro:</label>
            <input type="text" placeholder="Digite seu Bairro" required onChange={(e)=>setBairro(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Cidade:</label>
            <input type="text" placeholder="Digite sua Cidade" required onChange={(e)=>setCidade(e.target.value)}/>
          </div>
          <div className="input-registro">
            <label for="">Estado:</label>
            <select>
              <option value="Selecione seu Estado" required onChange={(e)=>setUf(e.target.value)} selected>Selecione seu Estado</option>
              <option value="SP">SP</option>
            </select>
          </div>
          <div className="btn-send-registro">
          <button type="button" onClick={etapaAnterior}>Voltar</button>
          <br />
            <button type="button" onClick={handleSubmit} className="button">Cadastrar-se</button>
            <p> Possui um cadastro?<a href="/login"> <b> Logar-se </b></a></p>
            </div>
    </div>
    )}
    </div>
      </form>
    </div>
</div>

)

}

export default Usuario;