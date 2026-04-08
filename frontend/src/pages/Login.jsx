import { useState } from "react";

const Login = () => {
  const [credentials, setCredential] = useState({ username: "", password: "" });

  const updateCredentials = (event) => {
    const { name, value } = event.target;
    setCredential((prevValue) => {
      console.log(prevValue);
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submit = () => {};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          name="username"
          onChange={updateCredentials}
          value={credentials.username}
        />
        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          name="password"
          placeholder="Password"
          onChange={updateCredentials}
          value={credentials.password}
        />
        <button
          type="{submit}"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
