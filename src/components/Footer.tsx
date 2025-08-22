"use client";

import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side - Copyright */}
        <div className="text-gray-400 text-center md:text-left">
          © 2025 <span className="text-purple-400 font-bold">CodeWithAli</span>. All rights reserved.
        </div>

        {/* Center - Quick Links */}
        <div className="flex gap-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={index}
                href={link.href}
                className={`font-medium transition-all ${
                  isActive
                    ? "text-purple-400 underline underline-offset-4"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-purple-400 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-purple-400 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="hover:text-purple-400 transition-transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-purple-400 transition-transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="mt-6 h-1 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 rounded-full shadow-lg"></div>
    </footer>
  );
}
