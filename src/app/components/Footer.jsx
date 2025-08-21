"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-900 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo + About */}
        <div>
          <h2 className="text-xl font-bold hover:text-teal-600">
            Goriber Gadget
          </h2>
          <p className="text-sm pt-3 hover:text-teal-600">
            Discover the latest gadgets and technology. Bringing innovation
            closer to you.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 hover:text-teal-600">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-teal-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-teal-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-teal-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-teal-600">
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-teal-600">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 hover:text-teal-600">
            Contact Us
          </h3>
          <p className="text-sm hover:text-teal-600">
            📍 123 Tech Street, Dhaka, Bangladesh
          </p>
          <p className="text-sm my-2 hover:text-teal-600">
            📧 support@goribergadget.com
          </p>
          <p className="text-sm hover:text-teal-600">📞 +880 1751 202 502</p>
          <p className="text-sm my-2 hover:text-teal-600">
            🕒 Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* Column 4 - Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 hover:text-teal-600">
            Newsletter
          </h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md text-white font-medium"
            >
              Subscribe
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-5 text-xl">
            <Link
              href="https://github.com/raseduzzaman-rased/"
              target="_blank"
              className="hover:text-teal-600"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/raseduzzaman-rased/"
              target="_blank"
              className="hover:text-teal-600"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/mdraseduzzaman.rased0/"
              target="_blank"
              className="hover:text-teal-600"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://twitter.com/freelancerrased"
              target="_blank"
              className="hover:text-teal-600"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-10 pt-5 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} Goriber Gadget. All rights reserved.
      </div>
    </footer>
  );
}
