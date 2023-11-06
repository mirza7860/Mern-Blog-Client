import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("https://troubled-tights-seal.cyclic.app/register", {
      method: "POST",
      body: JSON.stringify({ Username, Password }),
      headers: { "Content-Type": "application/json" },
    });
    if(response){
      alert("registration successfull")
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
        placeholder="pasword"
        autoComplete="current-password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </form>
  );
};

export default Register;
