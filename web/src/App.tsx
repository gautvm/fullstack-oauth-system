import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { User } from "./types/User";

function App() {
  const user = useContext(UserContext) as User;

  return (
    <div>
      {!user == undefined ? (
        <div>
          <h1>Welcome {user.id.email}</h1>
        </div>
      ) : (
        <div>
          <a href="http://localhost:4000/api/auth/github">
            Continue With GitHub
          </a>
          <a href="http://localhost:4000/api/auth/google">
            Continue With Google
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
