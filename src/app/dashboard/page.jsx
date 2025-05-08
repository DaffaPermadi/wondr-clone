"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/login" });
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  console.log(session);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-6">
      <div className="bg-slate-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center space-y-4">
        <img
          src={session?.user?.image || "/default-avatar.png"}
          alt="User Avatar"
          className="w-28 h-28 mx-auto rounded-full border-4 border-slate-600 shadow"
        />
        <h2 className="text-2xl font-bold">{session?.user?.name}</h2>
        <p className="text-slate-300">{session?.user?.email}</p>

        {/* Optional: Tambahan data GitHub */}
        {session?.user?.username && (
          <p className="text-slate-400 text-sm">
            GitHub: <a href={`https://github.com/${session.user.username}`} className="text-blue-400 hover:underline">@{session.user.username}</a>
          </p>
        )}
        {session?.user?.publicRepos !== undefined && (
          <p className="text-slate-400 text-sm">Public Repositories: {session.user.publicRepos}</p>
        )}

        <button
          onClick={() => signOut()}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-semibold transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
    </>
  );
}
