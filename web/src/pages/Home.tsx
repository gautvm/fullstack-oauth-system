import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
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
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <tbody>
                  <tr className="border">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      ID
                    </th>
                    <td className="px-6 py-4">{user?.id}</td>
                  </tr>
                  <tr className="border">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Email
                    </th>
                    <td className="px-6 py-4">{user?.email}</td>
                  </tr>
                  <tr className="border">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <td className="px-6 py-4">{user?.displayName}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
