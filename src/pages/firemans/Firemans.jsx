import React from 'react'
import "./Firemans.css"
import { useNavigate } from 'react-router-dom'

function Firemans({ auth }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/map");
  };
  return (
    <div className="FiremanSignUp">
      <div className="signUp">
        {auth == "LOGIN" ? (
          <form onSubmit={handleSubmit} action="">
            <input type="tel" placeholder="Login" />
            <input type="text" placeholder="Parol" />
            <button>Kirish</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder="Login" />
            <input type="text" placeholder="Parol" />
            <input type="text" placeholder="Ism familiya" />
            <input type="text" placeholder="Kasb" />
            <input type="text" placeholder="Ish joyi" />
            <input type="text" placeholder="Lavozim" />
            <input type="tel" placeholder="+9989..." />
            <button>Ro’yxatdan o’tish</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Firemans