import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { ProviderEntity } from "../entities/ProviderEntity";
import { UserEntity } from "../entities/UserEntity";
import { api } from "../utils/api";

interface AuthContextEntity {
  user?: UserEntity;
  loading: boolean;
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
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);

    try {
      window.location.assign(`${process.env.REACT_APP_API_URL}/auth/${provider}`)
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  const logout = async () => {
    try {
      window.location.assign(`${process.env.REACT_APP_API_URL}/user/logout`)

      setUser(undefined)
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
};
