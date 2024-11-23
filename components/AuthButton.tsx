import { Loader2 } from "lucide-react"; // Optional: For a loading spinner
import React from "react";
import { Button } from "./ui/button";

interface AuthButtonProps {
  label: string;
  Icon?: React.ComponentType<{ className?: string }>; // Icon component
  onClick: () => Promise<void>; // Async function for action
  className?: string; // Optional custom styles
  isLoading?: boolean; // Loading state
}

const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  Icon,
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
      <Button
        type="submit"
        variant="outline"
        className={`flex items-center w-full text-md justify-start ${className}`}
        disabled={isLoading} // Disable when loading
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
