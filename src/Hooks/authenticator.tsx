import React, { createContext, useCallback, useState, useContext } from "react";

import api_auth from "../http/api";
import api from "../http/api";

interface User {
  nome: string;
  typeUser: string;
  id: number;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  useremail: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@app:token");
    const user = localStorage.getItem("@app:user");

    if (token && user) {
      api_auth.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ useremail, password }: any) => {
    const response = await api.post("/Authentication/login", {
      useremail,
      password,
    });

    console.log(response.data);
    const { token, userName, userID, typeUser } = response.data;

    const user: User = { id: userID, nome: userName, typeUser: typeUser };

    localStorage.setItem("@app:token", token);
    localStorage.setItem("@app:userID", userID);
    localStorage.setItem("@app:userName", userName);
    localStorage.setItem("@app:typeUser", typeUser);

    api_auth.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@app:token");
    localStorage.removeItem("@app:userID");
    localStorage.removeItem("@app:userName");
    localStorage.removeItem("@app:typeUser");
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
