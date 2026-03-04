import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "John Doe" });
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}></button>
    </div>
  );
};

export default Login;
