import { NextPage } from "next/types";
import { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";
import { User } from "../types/User";

const Home: NextPage = () => {
  const router = useRouter();
  const user = useContext(UserContext) as User;

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.id.username}</h1>
        </div>
      ) : (
        <button
          onClick={() => router.push("http://localhost:4000/api/auth/github")}
        >
          Continue with GitHub
        </button>
      )}
    </div>
  );
};

export default Home;
