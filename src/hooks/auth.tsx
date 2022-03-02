import { createContext, useContext, useState } from "react";
import { signInUser, signUpUser, signOut } from "../service/AuthService";

export const AuthContext = createContext(null);

export default function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  console.log({ error });
  const SignUpWithEmailPassword = async (email, password) => {
    try {
      const { user } = await signUpUser(email, password);
      setUser(user ?? null);
    } catch (error) {
      setError(error ?? "");
    }
  };
  const loginWithEmailPassword = async (email, password) => {
    try {
      const { user } = await signInUser(email, password);
      setUser(user ?? null);
    } catch (error) {
      setError(error ?? "");
    }
  };

  const logout = async () => {
    await signOut();
    setUser(null);
  };
  const value = { user, error, SignUpWithEmailPassword, logout, setUser, loginWithEmailPassword };

  return <AuthContext.Provider value={value} {...props} />;
};
