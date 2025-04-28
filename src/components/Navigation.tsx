"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export function Navigation() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-6 transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
          GitHub Security Dashboard
        </Link>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3">
                {session?.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={32}
                    height={32}
                    className="rounded-full border border-gray-200 dark:border-gray-700"
                  />
                )}
                <span className="text-gray-700 dark:text-gray-300 hidden md:inline">
                  {session?.user?.name}
                </span>
              </div>
              <Link
                href="/dashboard"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                disabled={isLoading}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-md text-sm transition-colors"
              >
                {isLoading ? "Signing Out..." : "Sign Out"}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-black dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-md text-sm transition-colors"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}