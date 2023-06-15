import React from "react";
import "./Polices.css";
import { useNavigate } from "react-router-dom";

function Polices() {
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate("/map")
  }
  return (
    <div className="PolicesSignUp">
      <div className="signUp">
        <form
        onSubmit={handleSubmit}  action="">
          <input type="text" placeholder="Ism familiya" />
          <input type="text" placeholder="Kasb" />
          <input type="text" placeholder="Ish joyi" />
          <input type="text" placeholder="Lavozim" />
          <input type="tel" placeholder="+9989" />
          <button>Ro’yxatdan o’tish</button>
        </form>
      </div>
    </div>
  );
}

export default Polices;
