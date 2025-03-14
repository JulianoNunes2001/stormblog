import React from "react";
import "./Initial.css";
import blogImage from './img/blog.png';

const Initial = () => {

return (

<div className="container-initial">

    <div className="nav1">
         <p>PortBlog.com</p>
         <img src={blogImage} alt="text" /> 
         <a href="">Fazer Login</a>
    </div>

    <div className="center-nav">
        <div className="center-nav"><h2>Faça um blog que você adora, e inspire!</h2></div>
        <div className="center-nav"><p>Crie um blog, agora mesmo.</p></div>
        <div className="center-nav"> 
            <a href="">Ver Blogs</a>
            <a href="">Criar Blogs</a>
        </div>     
    </div>
   
</div>


)



}

 export default Initial;