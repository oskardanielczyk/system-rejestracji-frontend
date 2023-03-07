import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://systemrejestracji.up.railway.app/users/login",
        {
          login,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-xs m-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={loginSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Login
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setLogin(event.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Hasło
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Loguj
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
