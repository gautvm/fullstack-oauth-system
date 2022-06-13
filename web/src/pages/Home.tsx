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
        <div className="p-5">
          <h1 className="text-3xl text-center">
            Welcome, <span className="font-semibold">{user?.displayName}</span>
          </h1>
          <div className="flex justify-center items-center">
            <Table />
          </div>
          <Button
            onClick={() => navigate("/protected")}
            className="text-center"
          >
            Protected Route
          </Button>
        </div>
      ) : (
        <div className="text-center p-5">Landing Page Content</div>
      )}
    </div>
  );
};
