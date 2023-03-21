import { createContext, useState } from "react";

const LoginData = createContext({
  token: null,
  setToken: function () {},
});

export const LoginDataProvider = (props) => {
  const [token, setToken] = useState();

  const context = { token, setToken };

  return (
    <LoginData.Provider value={context}>{props.children}</LoginData.Provider>
  );
};

export default LoginData;
