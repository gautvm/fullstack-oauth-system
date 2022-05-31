import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { User } from "./types/User";

function App() {
  const user = useContext(UserContext) as User;

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.id.username}</h1>

          <a href={`${process.env.API_URL}/user/logout`}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a href={`${process.env.API_URL}/auth/github`}>
            Continue With GitHub
          </a>
          <a href={`${process.env.API_URL}/auth/google`}>
            Continue With Google
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
