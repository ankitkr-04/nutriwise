import { Github } from "lucide-react";
import AuthButton from "./AuthButton";

const GithubLogin = () => {
  return (
    <AuthButton
      label="Sign In with GitHub"
      Icon={Github}
      action="sign-in"
      className="rounded-4xl py-6 px-8 cursor-pointer"
    />
  );
};

export default GithubLogin;
