import {
  useState,
  useEffect,
  useContext,
  useMemo,
  createContext,
  ReactNode,
} from "react";
import { UserEntity } from "../entities/UserEntity";
import { ProviderEntity } from "../entities/ProviderEntity";
import { api } from "../utils/api";

interface AuthContextEntity {
  user?: UserEntity;
  isAuthenticated: string;
  error?: any;

  login: (provider: ProviderEntity) => Promise<void>;
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
  const isAuthenticated = localStorage.getItem("isAuthenticated") as string;

  useEffect(() => {
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
  }, []);

  const login = async (provider: ProviderEntity) => {
    localStorage.setItem("isAuthenticated", "true");

    try {
      window.location.assign(
        `${process.env.REACT_APP_API_URL}/auth/${provider}`
      );
    } catch (error) {
      setError(error);
    }
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

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      error,
      login,
      logout,
    }),
    [user, error]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
