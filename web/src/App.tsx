import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { User } from "./entities/User";

function App() {
  // const user = useContext(UserContext) as User;
  // console.log(user); 

  return (
    <div>
      {/* {user ? (
        <div>
          <h1>Welcome {user.id.username}</h1>

          <a href={`${process.env.REACT_APP_API_URL}/user/logout`}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a href={`${process.env.REACT_APP_API_URL}/auth/github`}>
            Continue With GitHub
          </a>
          <a href={`${process.env.REACT_APP_API_URL}/auth/google`}>
            Continue With Google
          </a>
        </div>
      )} */}
      <h1 className="text-red-500">Hello</h1>
    </div>
  );
}

export default App;
