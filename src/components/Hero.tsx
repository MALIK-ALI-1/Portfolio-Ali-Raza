"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = (e.nativeEvent.offsetX / offsetWidth - 0.5) * 20;
    const y = (e.nativeEvent.offsetY / offsetHeight - 0.5) * 20;
    setRotate({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center text-center md:text-left px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2">
            Hi, I'm <span className="text-purple-400">Ali Raza</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
            Full Stack Web Developer 🚀
          </h2>
          <ul className="text-gray-400 mb-4 leading-relaxed list-disc list-inside space-y-1 text-sm sm:text-base md:text-lg">
            <li>Passionate about building scalable web applications</li>
            <li>Skilled in React, Next.js, Node.js, MongoDB</li>
            <li>Open to remote opportunities worldwide</li>
          </ul>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            <Link href="/projects" className="px-5 py-2 bg-purple-500 rounded-full hover:bg-purple-600 transition text-sm sm:text-base">
              View Projects
            </Link>
            <Link href="/cv.pdf" target="_blank" download className="px-5 py-2 bg-green-500 rounded-full hover:bg-green-600 transition text-sm sm:text-base">
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center py-4"
        >
          <motion.div
            style={{ transform: isClient && isDesktop ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : "none" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="relative w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-2xl"
          >
            {isClient && isDesktop && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${50 + rotate.y * 2}% ${
                    50 + rotate.x * 2
                  }%, rgba(168,85,247,0.6), transparent 70%)`,
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
              />
            )}
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl z-10">
              <Image src="/Profile.jpg" alt="Ali Raza" fill className="object-cover" priority />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
