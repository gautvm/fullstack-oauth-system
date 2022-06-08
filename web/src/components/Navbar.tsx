import { useAuth } from "../contexts/AuthContext";
import { Button } from "./Button";

export const Navbar = () => {
  const { user, loading, login, logout } = useAuth();
  console.log(loading);

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
              <Button onClick={() => logout()}>
                {loading ? "Loading..." : "Logout"}
              </Button>
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
        <Button onClick={() => login("github")}>
          {loading ? "Loading..." : "Login"}
        </Button>
      )}
    </div>
  );
};
