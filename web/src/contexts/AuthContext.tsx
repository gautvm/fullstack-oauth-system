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
  loading: boolean;
  error?: any;
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

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
