"use client";
import { Button } from "@/components/ui/button"; // shadcn Button component
import { cn } from "@/lib/utils"; // Utility for class merging, adjust the import path as needed
import { Camera, Home, User } from "lucide-react"; // Icons from lucide-react
import { redirect } from "next/navigation";

const BottomNav = () => {
  return (
    <nav
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50",
        "bg-white shadow-lg border rounded-full",
        "flex items-center justify-between gap-4",
        "px-6 py-4 h-16 w-[70%] max-w-sm"
      )}
    >
      {/* Home Button */}
      <Button
        onClick={() => redirect("/")}
        variant="ghost"
        className="flex items-center text-gray-600 hover:text-green-600 focus:outline-none"
        aria-label="Home"
      >
        <Home className="w-8 h-8" />
      </Button>

      {/* Scan Button */}
      <Button
        onClick={() => redirect("/scan")}
        variant="secondary"
        className="flex items-center rounded-full text-gray-600 hover:text-green-600 focus:outline-none"
        aria-label="Scan"
      >
        <Camera className="w-8 h-8" />
      </Button>

      {/* Profile Button */}
      <Button
        onClick={() => redirect("/profile")}
        variant="ghost"
        className="flex items-center text-gray-600 hover:text-green-600 focus:outline-none"
        aria-label="Profile"
      >
        <User size={24} />
      </Button>
    </nav>
  );
};

export default BottomNav;
