import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { User } from "./types/User";

function App() {
  const user = useContext(UserContext) as User;
  let navigate = useNavigate();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.id.email}</h1>
        </div>
      ) : (
        <div>
          <button
            onClick={() => navigate("http://localhost:4000/api/auth/github")}
          >
            Continue with GitHub
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
