import { signIn } from "@/auth";
import { Github } from "lucide-react";
import AuthButton from "./AuthButton";

const GithubLogin = () => {
  return (
    <AuthButton
      label="Sign In with GitHub"
      Icon={Github}
      onClick={() => signIn("github", { redirectTo: "/" })}
      className="rounded-4xl py-6 px-8"
    />
  );
};

export default GithubLogin;
