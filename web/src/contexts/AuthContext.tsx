import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { UserEntity } from "../entities/UserEntity";
import { api } from "../utils/api";

interface AuthContextEntity {
  user?: UserEntity;
  isAuthenticated: string;
  loading: boolean;
  error?: any;

  login: (provider: "github" | "google") => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextEntity>({} as AuthContextEntity);

export function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<UserEntity>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const isAuthenticated = localStorage.getItem("isAuthenticated") as string;

  useEffect(() => {
    setLoading(true);
    console.log(loading);

    try {
      (async () => {
        const { data } = await api({
          method: "GET",
          url: "/user/me",
          withCredentials: true,
        });

        if (data) {
          return setUser(data.id);
        }
      })();
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, []);

  const login = async (provider: "github" | "google") => {
    setLoading(true);
    localStorage.setItem("isAuthenticated", "true");

    try {
      window.location.assign(
        `${process.env.REACT_APP_API_URL}/auth/${provider}`
      );
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  const logout = async () => {
    localStorage.removeItem("isAuthenticated");

    try {
      window.location.assign(`${process.env.REACT_APP_API_URL}/user/logout`);

      setUser(undefined);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
