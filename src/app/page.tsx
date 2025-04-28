import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8 pb-20">
      <div className="max-w-3xl w-full text-center space-y-10">
        <div className="flex flex-col items-center">
          <Image
            className="dark:invert mb-8"
            src="/Solidify logo dark.svg"
            alt="Next.js logo"
            width={320}
            height={48}
            priority
          />
          
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">GitHub Security Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            View and manage security insights for your GitHub repositories
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <Link
            href="/login"
            className="bg-black text-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors px-6 py-3 rounded-md text-lg font-medium flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with GitHub
          </Link>
          
          <Link
            href="/dashboard"
            className="bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors px-6 py-3 rounded-md text-lg font-medium"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="pt-10 border-t border-gray-200 dark:border-gray-800 mt-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            View and manage security insights for your GitHub repositories.
            Sign in with your GitHub account to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
