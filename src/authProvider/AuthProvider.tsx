import { ReactNode, useState } from "react";
import { AuthContext } from "./Context";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
