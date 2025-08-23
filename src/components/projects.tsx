"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 🔹 Reusable ProjectCard component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/40 transition-all"
    >
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 text-left">
        <h3 className="text-2xl font-bold text-purple-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <p className="text-sm text-gray-400 mb-4">
          Tech: {project.tech.join(", ")}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Educist – Learning Platform",
      description:
        "Final Year Project – A modern learning platform that enables students to access resources, quizzes, and learning tools.",
      image: "/projects/educist.png",
      tech: [
        "React.js",
        "Next.js",
        "MongoDB",
        "CSS",
        "HTML",
        "Javascript",
        "TailwindCSS",
        "Vercel",
      ],
      github: "https://github.com/yourusername/educist",
      demo: "https://educist.vercel.app",
    },
    {
      title: "AuditAxis – Fintech Project",
      description:
        "Industry-level fintech platform built during internship, focused on auditing and automation.",
      image: "/projects/auditaxis.png",
      tech: ["React.js", "Node.js", "MongoDB", "CSS", "HTML", "Javascript"],
      github: "https://github.com/yourusername/auditaxis",
      demo: "https://auditaxis.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js and TailwindCSS, showcasing projects and skills.",
      image: "/projects/portfolio.png",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://codewithali.vercel.app",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-purple-400 mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
