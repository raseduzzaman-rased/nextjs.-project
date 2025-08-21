"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <header className="bg-gray-300">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link href="/" className="block text-teal-600">
                <h2 className="text-xl font-bold hover:text-black">
                  Goriber Gadget
                </h2>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-md font-bold">
                  <Link href="/">
                    <li className="text-black transition hover:text-teal-600">
                      Home
                    </li>
                  </Link>
                  <Link href="/products">
                    <li className="text-black transition hover:text-teal-600">
                      Products
                    </li>
                  </Link>
                  {session && (
                    <Link href="/dashboard">
                      <li className="text-black transition hover:text-teal-600">
                        Dashboard
                      </li>
                    </Link>
                  )}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  {!session ? (
                    <button
                      onClick={() => signIn("google")}
                      className="rounded-md bg-teal-600 hover:bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      onClick={() => signOut()}
                      className="rounded-md bg-teal-600  hover:bg-teal-700  px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
