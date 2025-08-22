"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaUsers, FaLightbulb } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    {
      icon: <FaReact className="text-sky-400 text-5xl" />,
      title: "Frontend Development",
      description: "Building interactive UIs with React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
      title: "Backend Development",
      description: "Creating scalable APIs with Node.js and Express.",
    },
    {
      icon: <SiMongodb className="text-green-400 text-5xl" />,
      title: "Database",
      description: "Designing and managing databases with MongoDB.",
    },
    {
      icon: <FaGitAlt className="text-orange-500 text-5xl" />,
      title: "Version Control",
      description: "Collaborating efficiently using Git & GitHub.",
    },
    {
      icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
      title: "Styling",
      description: "Crafting modern designs with Tailwind CSS.",
    },
    {
      icon: <SiNextdotjs className="text-white text-5xl" />,
      title: "Next.js Framework",
      description: "Optimized full-stack web apps with SSR & API routes.",
    },
  ];

  const softSkills = [
    {
      icon: <FaUsers className="text-purple-400 text-5xl" />,
      title: "Teamwork",
      description: "Strong collaborator, works well in diverse and cross-functional teams.",
    },
    {
      icon: <FaLightbulb className="text-yellow-400 text-5xl" />,
      title: "Problem Solving",
      description: "Creative thinker who loves solving challenging coding problems.",
    },
    {
      icon: <FaUsers className="text-pink-400 text-5xl" />,
      title: "Communication",
      description: "Clear and effective communicator with technical and non-technical teams.",
    },
    {
      icon: <FaLightbulb className="text-blue-400 text-5xl" />,
      title: "Adaptability",
      description: "Quick learner, always open to exploring new technologies.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Technical Skills */}
        <h2 className="text-4xl font-extrabold text-purple-400 mb-12">
          Technical Skills ⚡
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="text-4xl font-extrabold text-green-400 mb-12">
          Soft Skills 🌟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
