import { AxiosResponse } from "axios";
import { createContext, useState, useEffect } from "react";
import { UserEntity } from "../entities/UserEntity";
import { api } from "../utils/api";

export const UserContext = createContext({});
export const UserContextComponent = (props: any) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    (async () => {
      const { data }: AxiosResponse<UserEntity> = await api({
        method: "GET",
        url: "/user/me",
        withCredentials: true,
      });

      if (data) {
        setUser(data);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
