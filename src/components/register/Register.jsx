import React from "react";
import "./Register.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    
   return (

   <div className="container-register">
      <h1>Cadastro</h1>
      <form >
         <div className="icons-register">
            <a href=""><FcGoogle className="icons-register" size={60}/> </a>
            <a href=""> <FaFacebook className="icons-register" size={60}/></a>       
         </div>  
                         
      </form>

   </div>

   )

}

export default Register;