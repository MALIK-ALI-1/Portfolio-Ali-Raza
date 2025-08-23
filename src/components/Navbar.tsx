"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center">
        
        {/* Logo (Accessible Link) */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-purple-400 hover:text-cyan-300 transition md:absolute left-6"
          aria-label="Go to homepage"
        >
          CodeWithAli
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-bold justify-center items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`relative group text-lg transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-gray-300 hover:text-white text-2xl focus:ring-2 focus:ring-purple-400 rounded"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/90 backdrop-blur-md py-4 flex flex-col items-center gap-6 border-b border-purple-500/20"
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-bold transition ${
                  isActive ? "text-white underline underline-offset-4" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
