import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Login from './components/login/Login';
import Blog from "./components/createblog/Blog" 





function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <div className="App">
      <GoogleOAuthProvider clientId='318961709587-019kb773iku8nnoeb7edt185s0u4erfa.apps.googleusercontent.com'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      </GoogleOAuthProvider>
        
    </div>
  );
}

export default App;
