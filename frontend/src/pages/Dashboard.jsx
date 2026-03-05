import { useState } from "react";

const Login = () => {
  const [credentials, setCredential] = useState({ username: "", password: "" });

  const updateCredentials = () => {
    console.log(prevValue);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        Username
        <input
          onChange={updateCredentials}
          type="text"
          value={credentials.username}
        />
        <br />
        Password
        <input
          onChange={updateCredentials}
          type="password"
          value={credentials.password}
        />
        <br />
        <button onClick>Submit</button>
      </form>
    </>
  );
};

export default Login;
