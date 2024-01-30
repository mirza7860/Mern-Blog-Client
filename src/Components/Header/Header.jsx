import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/Usercontext";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const { userinfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://3.110.156.197:8000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://3.110.156.197:8000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    navigate("/")
  };

  const username = userinfo?.Username;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
