import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="flex items-center justify-between h-16 px-6 py-4 border">
      <div className="flex items-center justify-between h-16 pb-1">
        <div className="pt-1">
          <p
            className="font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Company Logo
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="pr-4">
            <Button color="blue" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
          <img
            src={""}
            alt="User Avatar Url"
            width={35}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
