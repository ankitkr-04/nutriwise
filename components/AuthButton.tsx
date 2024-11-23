<<<<<<< Updated upstream
import { Loader2 } from "lucide-react"; // Optional: For a loading spinner
=======
import { signIn, signOut } from "@/auth";
import { Loader2 } from "lucide-react"; // For optional loading spinner
>>>>>>> Stashed changes
import React from "react";
import { Button } from "./ui/button";

interface AuthButtonProps {
  label: string;
<<<<<<< Updated upstream
  Icon?: React.ComponentType<{ className?: string }>; // Icon component
  onClick: () => Promise<void>; // Async function for action
  className?: string; // Optional custom styles
  isLoading?: boolean; // Loading state
=======
  Icon?: React.ComponentType<{ className?: string }>;
  action: "sign-in" | "sign-out"; // Specifies the action
  className?: string;
  isLoading?: boolean;
>>>>>>> Stashed changes
}

const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  Icon,
<<<<<<< Updated upstream
  onClick,
  className = "",
  isLoading = false,
}) => {
  return (
    <form
      action={async () => {
        "use server";
        await onClick();
      }}
    >
=======
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
>>>>>>> Stashed changes
      <Button
        type="submit"
        variant="outline"
        className={`flex items-center w-full text-md justify-start ${className}`}
<<<<<<< Updated upstream
        disabled={isLoading} // Disable when loading
=======
        disabled={isLoading}
>>>>>>> Stashed changes
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
