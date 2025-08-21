"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="rounded-md bg-teal-600 hover:bg-teal-700 px-6 py-3 text-white font-medium"
      >
        Sign in with Google
      </button>
    </div>
  );
}
