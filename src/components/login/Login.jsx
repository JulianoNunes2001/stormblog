import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";
import Google from "./Google";

const Login = () => {

const [user, setUser] = useState(null);
const navigate = useNavigate(); 

// Verifica se já tem um usuário salvo no localStorage ao carregar a página
useEffect(() => {
   const storedUser = localStorage.getItem("user");
   if (storedUser) {
     setUser(JSON.parse(storedUser));
   }
 }, []);

// Armazenar para persistir o Login

const handleLogin = (userData) => {
   setUser(userData);
   localStorage.setItem("user", JSON.stringify(userData));
   navigate("/blog"); // Redireciona para o Blog após login
 };

 const handleLogout = () => {
   localStorage.removeItem("user");
   setUser(null);
   navigate("/"); // Redireciona para login
 };
    
   return (

   <div className="container-register">
      <h1>Login</h1>
      <form >
         <div className="icons-register">
            <Google setUser={handleLogin} />         
         </div>  
                         
      </form>

      { user && (

       <div className="user-info">
         <img src={user.photoURL} alt="User" className="user-img" />
         <p>Usuario: {user.name}</p>
         <p>Email: {user.email}</p>
         <button onClick={handleLogout}>Sair</button>
       </div>

      )


      }

   </div>

   )

}

export default Login;