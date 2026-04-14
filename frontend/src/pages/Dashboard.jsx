import { useState } from "react";

const Login = () => {
  const [credentials, setCredential] = useState({ username: "", password: "" });

  const updateCredentials = () => {
    console.log(prevValue);
  };

  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default Login;
