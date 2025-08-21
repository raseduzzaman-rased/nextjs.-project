"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, X } from "lucide-react"; // hamburger icons

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-teal-600">
              <h2 className="text-xl font-bold hover:text-black">
                Goriber Gadget
              </h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 mr-6 text-md font-bold">
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

          {/* Login/Logout button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
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
                className="rounded-md bg-teal-600 hover:bg-teal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-sm bg-gray-100 p-2 text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 px-4 py-3 space-y-3">
          <Link
            href="/"
            className="block text-black font-medium hover:text-teal-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-black font-medium hover:text-teal-600"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          {session && (
            <Link
              href="/dashboard"
              className="block text-black font-medium hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          )}

          {!session ? (
            <button
              onClick={() => {
                signIn("google");
                setIsOpen(false);
              }}
              className="w-full rounded-md bg-teal-600 hover:bg-teal-700 px-5 py-2 text-sm font-medium text-white shadow-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              className="w-full rounded-md bg-teal-600 hover:bg-teal-700 px-5 py-2 text-sm font-medium text-white shadow-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
