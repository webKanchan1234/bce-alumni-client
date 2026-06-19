import { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../api/userApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const res =
          await getCurrentUser();

        setUser(res.data);

      } catch {

        setUser(null);

      } finally {

        setLoading(false);

      }
    };

    if (
      localStorage.getItem("token")
    ) {
      fetchUser();
    } else {
      setLoading(false);
    }

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);