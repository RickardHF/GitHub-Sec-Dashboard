import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();

  // Protect the page - redirect to login if not authenticated
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome, {session.user.name || session.user.email}!
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-800 transition-colors">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your GitHub Profile</h2>
        
        <div className="flex items-center space-x-4">
          {session.user.image && (
            <Image
              src={session.user.image}
              alt="Profile"
              width={64}
              height={64}
              className="rounded-full border-2 border-gray-100 dark:border-gray-700"
              priority
            />
          )}
          
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{session.user.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{session.user.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 dark:text-gray-300">
            This is a protected page that requires authentication.
            Only logged in users can view this content.
          </p>
        </div>
      </div>
    </div>
  );
}