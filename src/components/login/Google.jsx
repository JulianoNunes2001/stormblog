import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const clientId = "318961709587-019kb773iku8nnoeb7edt185s0u4erfa.apps.googleusercontent.com";

function Google({setUser}) {
  return (
    <GoogleOAuthProvider clientId='318961709587-019kb773iku8nnoeb7edt185s0u4erfa.apps.googleusercontent.com'>
      <GoogleLogin

      // Criando o token JWT

        onSuccess={(response) => {
          const decoded = jwtDecode(response.credential); 
          setUser({
            name: decoded.name,
            email: decoded.email,
            photoURL: decoded.picture,
          }
        )

        // Condicao de sucesso ou erro no console

        console.log("Login feito com sucesso!");
        }}
        onError={() => console.log("Erro ao fazer login")} 
           
        
      />
    </GoogleOAuthProvider>
  );
}

export default Google;