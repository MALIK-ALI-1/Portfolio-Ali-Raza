"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NeonCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-0"
      style={{
        background: `radial-gradient(
          circle at ${position.x}px ${position.y}px,
          rgba(168, 85, 247, 0.25),   /* purple */
          rgba(0, 255, 255, 0.15),   /* cyan */
          rgba(255, 0, 150, 0.15),   /* pink */
          transparent 70%
        )`,
        filter: "blur(60px)",
      }}
    />
  );
}
