import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://nice-tan-chimpanzee-sock.cyclic.app/register",
      {
        method: "POST",
        body: JSON.stringify({ Username, Password }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      alert("Registration successful");
      navigate('/login');
    }
  };

  return (
    <form className="register" action="">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        autoComplete="username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="current-password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </form>
  );
};

export default Register;

