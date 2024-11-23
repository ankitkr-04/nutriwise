import { signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";
import AuthButton from "./AuthButton";

const UserMenu = () => {
  return (
    <div className="my-3">
      <AuthButton
        label="Logout"
        Icon={LogOutIcon}
        onClick={() => signOut({ redirectTo: "/" })}
        className="text-destructive border-0 shadow-none"
      />
    </div>
  );
};

export default UserMenu;
