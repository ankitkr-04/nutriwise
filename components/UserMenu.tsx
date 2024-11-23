<<<<<<< Updated upstream
import { signOut } from "@/auth";
=======
>>>>>>> Stashed changes
import { LogOutIcon } from "lucide-react";
import AuthButton from "./AuthButton";

const UserMenu = () => {
  return (
    <div className="my-3">
      <AuthButton
        label="Logout"
        Icon={LogOutIcon}
<<<<<<< Updated upstream
        onClick={() => signOut({ redirectTo: "/" })}
=======
        action="sign-out"
>>>>>>> Stashed changes
        className="text-destructive border-0 shadow-none"
      />
    </div>
  );
};

export default UserMenu;
