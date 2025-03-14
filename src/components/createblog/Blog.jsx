import React, { useState } from "react";
import "./Blog.css";
import Editor from "./Editor.jsx";
import "./Editor.css";





const Blog = () => {

  const [content, setContent] = useState("");

  

  return (

  <div className="container-create">

    <h1>Crie seu Blog</h1>

   
    
    <div className="navcreate1">
         
         <h2>Seu Titulo</h2>
         <div className="texttitulo">
         <textarea  name="titulo" id="" placeholder="Digite o Titulo"></textarea>
         </div>
         
         <h3>Escreva seu blog</h3>



          <div className="textblog">

          <Editor onChange={(value) => setContent(value)}></Editor>
              
          </div>

          <button type="submit">Enviar</button>
         

    </div>


  </div>

  )

}

export default Blog;