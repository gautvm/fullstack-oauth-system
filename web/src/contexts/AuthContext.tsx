import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);

        const { data } = await api({
          method: "GET",
          url: "/user/me",
          withCredentials: true,
        });

        if (data) {
          setUser(data.id);
          setLoading(false);
        }
      })();
    } catch (error) {
      setError(error);
    }
  }, []);

  const login = async (provider: ProviderEntity) => {
    try {
      setLoading(true);

      await api({
        method: "GET",
        url: `/auth/${provider}`,
      })

      navigate("/")
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const logout = async () => {
    try {
      await api({
        method: "GET",
        url: "/user/logout",
        withCredentials: true,
      });

      setUser(undefined)
      navigate("/")
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
