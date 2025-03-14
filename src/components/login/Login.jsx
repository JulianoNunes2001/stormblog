import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
import Register from '../register/Register';


const Login = () => {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (event) =>{
    event.preventDefault();

    alert("Login criado com sucesso!");
   
    console.log("Login:"+ userName +" senha "+ password);
  };
    
   return (

   <div className="container">

    <form onSubmit={handleSubmit}>
      <h1>Acesse o Sistema</h1>
      <div className="input-field">
      <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)}/>
      <FaUser className="icons"/>
      </div>
      <div className="input-field">
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
      <FaLock className="icons"/>         
      </div>
      <div className="recall-forget">
        <label >
          <input type="checkbox" />
          Salvar login?
        </label>
        <a href="#">Esqueceu a senha?</a>
      </div>
      <button>Entrar</button>

      <div className="signup-link">
        <p>Não tem uma conta?</p>
        <a href='../register/Register'>Registrar</a>
      </div>
    </form>
   
   </div>


   )



}

export default Login;