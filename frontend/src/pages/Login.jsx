import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit = async (data) => {
    const apiUrl = isLogin
      ? "http://localhost:5555/login"
      : "http://localhost:5555/register";
    const res = await axios.post(apiUrl, data);
    console.log("res status", res.status);
    console.log("res data", res.data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full border p-2 mb-3 rounded"
            {...register("username", { required: true })}
            placeholder="Username"
          />{" "}
          {errors.username && <p>Required</p>}
          <input
            className="w-full border p-2 mb-4 rounded"
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>Invalid password</p>}
          {!isLogin && (
            <input
              {...register("confirm_password", {
                required: !isLogin,
                validate: (value, { password }) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full border p-2 mb-4 rounded"
              type="password"
              placeholder="Confirm Password"
            />
          )}
          {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
          <button
            type="button"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setIsLogin(!isLogin)}
            value="true"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
          <br />
          <br />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
            value={isLogin ? "register" : "login"}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
