<<<<<<< Updated upstream
import { signIn } from "@/auth";
=======
>>>>>>> Stashed changes
import { Github } from "lucide-react";
import AuthButton from "./AuthButton";

const GithubLogin = () => {
  return (
    <AuthButton
      label="Sign In with GitHub"
      Icon={Github}
<<<<<<< Updated upstream
      onClick={() => signIn("github", { redirectTo: "/" })}
=======
      action="sign-in"
>>>>>>> Stashed changes
      className="rounded-4xl py-6 px-8"
    />
  );
};

export default GithubLogin;
