import { signIn, signOut } from "@/auth";
import { Loader2 } from "lucide-react"; // For optional loading spinner
import React from "react";
import { Button } from "./ui/button";

interface AuthButtonProps {
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
  action: "sign-in" | "sign-out"; // Specifies the action
  className?: string;
  isLoading?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  Icon,
  action,
  className = "",
  isLoading = false,
}) => {
  const handleAction = async () => {
    "use server";
    if (action === "sign-out") await signOut({ redirectTo: "/" });
    if (action === "sign-in") await signIn("github", { redirectTo: "/" });
  };

  return (
    <form action={handleAction}>
      <Button
        type="submit"
        variant="outline"
        className={`flex items-center w-full text-md justify-start ${className}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          Icon && <Icon className="mr-2" />
        )}
        {label}
      </Button>
    </form>
  );
};

export default AuthButton;
