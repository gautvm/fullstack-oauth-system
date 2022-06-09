import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();
  let navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* If you want to have protected data with a constant navbar for example */}
      {isAuthenticated ? (
        <div className="text-center">
          <div className="space-y-5">
            <h1>
              Welcome,{" "}
              <span className="font-semibold">{user?.displayName}</span>
            </h1>

            <p>Here is your user data</p>
            <ul>
              <li>
                ID: <span className="font-semibold">{user?.id}</span>
              </li>
              <li>
                Display Name:{" "}
                <span className="font-semibold">{user?.displayName}</span>
              </li>
              <li>
                Email: <span className="font-semibold">{user?.email}</span>
              </li>
            </ul>
          </div>

          <Button onClick={() => navigate("/protected")}>
            Head to the protected route
          </Button>
        </div>
      ) : (
        <div className="text-center">Landing Page Content</div>
      )}
    </div>
  );
};
