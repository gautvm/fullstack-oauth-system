import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { UserEntity } from "../entities/UserEntity";

export const Navbar = () => {
  const user = useContext(UserContext) as UserEntity;
  console.log(user)
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className="flex items-center justify-between h-16 px-6 py-4 border">
      <div className="flex items-center justify-between h-16 pb-1">
        <div className="pt-1">
          <p className="font-semibold cursor-pointer">Company Logo</p>
        </div>
      </div>
      {user ? (
        <div>
          <img
            src={user.avatarUrl}
            alt=""
            width={40}
            className="rounded-full"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
