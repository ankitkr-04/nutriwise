import { LogOutIcon } from "lucide-react";
import AuthButton from "./AuthButton";

const UserMenu = () => {
  return (
    <div className="my-3">
      <AuthButton
        label="Logout"
        Icon={LogOutIcon}
        action="sign-out"
        className="text-destructive border-0 shadow-none"
      />
    </div>
  );
};

export default UserMenu;
