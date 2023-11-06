import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/Usercontext";
import { useContext } from "react";
const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://blog-app-9ql4x.ondigitalocean.app/login",
      {
        method: "POST",
        body: JSON.stringify({ Username, Password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    if (response.ok) {
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      })
      setRedirect(true);
    }else{
      alert("Wrong Password . Try Again")
    }
  };
  if (Redirect) {
    return <Navigate to='/' />;
  }
  return (
    <form className="login" action="">
      <h1>Login</h1>
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
      <button onClick={login}>Login</button>
    </form>
  );
};

export default Login;
