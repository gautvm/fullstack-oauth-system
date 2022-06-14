import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table";
import { useAuthContext } from "../contexts/AuthContext";

export const Home = () => {
  const { isAuthenticated, user } = useAuthContext();
  let navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* If you want to have protected data with a constant navbar for example */}
      {isAuthenticated ? (
        <div className="p-10">
          <div className="space-y-5">
            <h1 className="text-2xl text-center">
              Welcome,{" "}
              <span className="font-semibold">{user?.displayName}</span>
            </h1>

            <Table />
          </div>

          <div className="flex justify-center items-center">
            <Button onClick={() => navigate("/protected")}>Protected Route</Button>
          </div>
        </div>
      ) : (
        <div className="text-center p-5">Landing Page Content</div>
      )}
    </div>
  );
};
