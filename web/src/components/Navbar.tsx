import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ButtonEntity } from "../entities/ButtonEntity";

export const Navbar = () => {
  const { user, loading, logout } = useAuth();
  let navigate = useNavigate();

  return (
    <div className="flex items-center justify-between h-16 px-6 py-4 border">
      <div className="flex items-center justify-between h-16 pb-1">
        <div className="pt-1">
          <p className="font-semibold cursor-pointer">Company Logo</p>
        </div>
      </div>
      {user ? (
        <div>
          <div className="flex items-center gap-2">
            <div className="pr-4">
            <NavbarButton onClick={() => logout()}>{loading ? "Loading..." : "Logout"}</NavbarButton>
            </div>
            {loading ? (
              "Loading..."
            ) : (
              <img
                src={user.avatarUrl}
                alt="User Avatar Url"
                width={35}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      ) : (
        <NavbarButton onClick={() => navigate("/login")}>{loading ? "Loading..." : "Login"}</NavbarButton>
      )}
    </div>
  );
};

const NavbarButton: React.FC<ButtonEntity> = ({ children }) => {
  return (
    <a className="border border-blue-500 bg-blue-500 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">
      {children}
    </a>
  );
};
