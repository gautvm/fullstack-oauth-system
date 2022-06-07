import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { UserEntity } from "../entities/UserEntity";

export const Navbar = () => {
  const user = useContext(UserContext) as UserEntity
    
  return (
    <div className="flex items-center justify-between h-[4rem] px-6 py-4 border-b border-bgVariant1">
      <div className="flex items-center justify-between h-[4rem] pb-1">
        <div className="pt-1">
          <p className="font-semibold cursor-pointer">Company Logo</p>
        </div>
      </div>
      <img src={user ? user.profilePicture : ""} alt="" width={40} className="rounded-full"/>
    </div>
  );
};
