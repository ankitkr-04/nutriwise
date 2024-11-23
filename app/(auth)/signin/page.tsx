import { auth } from "@/auth";
import GithubLogin from "@/components/GithubLogin";
import Link from "next/link";
import { redirect } from "next/navigation";

const loginPage = async () => {
  const session = await auth();
  if (session && session?.user) redirect("/");
  return (
    <main className="bg-green-200 text-center py-8 min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Header */}
      <header className="text-center">
        <Link
          className="text-3xl tracking-wide font-extrabold text-gray-800"
          href="/"
        >
          Nutri<span className="text-green-700">Wise</span>
        </Link>
      </header>

      {/* Login Section */}
      <section className="flex-grow flex items-center justify-center">
        <div className="bg-white mx-2 shadow-md p-10 rounded-xl w-full max-w-md text-left">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-500 text-base mb-6">
            Sign in to your account to continue
          </p>

          {/* Github Placeholder */}
          <GithubLogin />

          {/* Footer Links */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Don’t have an account?{" "}
              <Link href="/register" className="text-green-700 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-600 py-4">
        © 2024 NutriWise. All rights reserved.
      </footer>
    </main>
  );
};

export default loginPage;
