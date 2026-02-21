"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, User, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const user = false

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "Contact", link: "/contact" },
    { name: "Pricing", link: "/crystal-price" },
  ]

  return (
    <header className="sticky top-3 z-50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <nav className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl rounded-2xl">
          <div className="flex items-center justify-between px-6 py-2">

            {/* ====LOGO=== */}
            <Link
              href="/"
              className="text-lg font-semibold tracking-wide text-white hover:opacity-80 transition"
            >
              VFX COURSE
            </Link>

            {/* ====DESKTOP MENU====*/}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">

              {
                menuItems.map(item => (
                  <Link key={item.name} href={item.link} className="hover:text-white transition">
                    {item.name}
                  </Link>
                ))
              }

              {
                user ? (
                  <div className="flex items-center space-x-3">
                    <span>💎 25</span>
                    <User size={30} className="text-white/80 hover:text-white transition cursor-pointer bg-gray-700 rounded-full p-1" />
                  </div>
                ) : <Link
                  href="/login-register"
                  onClick={() => setIsOpen(false)}
                  className="text-center px-3 py-1 rounded-full bg-white text-black font-semibold"
                >
                  Login/Register
                </Link>
              }

            </div>

            {/* ======= MOBILE MENU TOGGLE BUTTON======= */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>

          {/* ======= MOBILE MENU ======= */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="px-6 pb-6 flex flex-col text-white/80 text-sm">
              {/* =======  MENU ITEMS ======= */}
              {
                menuItems.map(item => (
                  <Link key={item.name} href={item.link} onClick={() => setIsOpen(false)} className="hover:bg-white/10 py-2 pl-4 rounded">
                    {item.name}
                  </Link>
                ))
              }
              {/* =======  LOGIN RESIGTER BUTTON  ======= */}
              <div className="border-t border-white/20 pt-4 flex flex-col gap-3 mt-2 md:pt-0">
                <Link
                  href="/login-register"
                  onClick={() => setIsOpen(false)}
                  className="text-center py-2 rounded-full bg-white text-black font-semibold"
                >
                  Login/Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}