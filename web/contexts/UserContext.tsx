import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "../utils/api";

export const UserContext = createContext({});
export const UserContextComponent = (props: any) => {
  const router = useRouter();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    (async () => {
      const { data } = await api({
        method: "GET",
        url: "/user/me",
        withCredentials: true,
      });

      if (!data) {
        router.push("/login");
      } else {
        setUser(data);
      }
    })();
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
