import { auth } from "@/auth";
import { PopoverClose } from "@radix-ui/react-popover";
import { LogIn, UserIcon, X } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import UserMenu from "./UserMenu";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-white shadow-sm px-5 py-6 font-bold  ">
      <nav className="flex justify-between items-center md:mx-8">
        <Link className="text-2xl tracking-wider font-extrabold " href="/">
          Nutri<span className="text-green-700"> Wise</span>
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <div className="flex items-center justify-center gap-4">
              <h3 className="hidden md:block text-lg">{session?.user?.name}</h3>
              <Popover>
                <PopoverTrigger>
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />
                    <AvatarFallback>
                      <UserIcon className="size-10 text-gray-700 rounded-full bg-gray-200 p-2" />
                    </AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 mt-2 relative right-7 md:right-12 ">
                  <div className="flex justify-end items-center">
                    <PopoverClose>
                      <X className="text-red-600  w-4 h-4" />
                    </PopoverClose>
                  </div>
                  <div>
                    <UserMenu />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Link href={"/signin"}>
              <Button className="bg-green-700 py-5 text-white font-bold text-lg">
                <LogIn />
                SIgn In
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
