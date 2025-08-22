"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  const experiences = [
    {
      year: "2025",
      title: "Graduation – Software Engineering",
      company: "University of Management & Technology, Lahore",
      description:
        "Successfully graduated with a degree in Software Engineering. Final Year Project: Educist – a modern learning platform.",
    },
    {
      year: "2024 – 2025",
      title: "Industry Project – AuditAxis Fintech",
      company: "Resilience Advisory & IT Services",
      description:
        "Contributed as a full-stack developer to an industry-level fintech project. (May 2024 – June 2025)",
    },
    {
      year: "2024",
      title: "Internship",
      company: "Resilience Advisory & IT Services",
      description:
        "Completed a 3-month internship focusing on building scalable full-stack web applications. (Mar 2024 – May 2024)",
    },
    {
      year: "2021",
      title: "Started Software Engineering",
      company: "University of Management & Technology, Lahore",
      description:
        "Began my academic journey in Software Engineering, working on multiple semester projects and learning modern web technologies.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* About Me Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpg" // 👈 apni image daalni hai
                alt="Ali Raza"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-purple-400 mb-6">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hi, I&apos;m <span className="text-purple-400 font-bold">Ali Raza</span>, 
              a passionate <span className="text-purple-300">Full Stack Web Developer</span> 🚀 
              who loves building scalable and modern web applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Skilled in React, Next.js, Node.js, and MongoDB. 
              Always eager to learn new technologies, solve real-world problems, 
              and collaborate with innovative teams worldwide 🌍.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section (Zig-Zag) */}
        <h2 className="text-4xl font-extrabold text-purple-400 mb-12 text-center">
          My Journey
        </h2>

        <div className="relative">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 top-0 w-1 bg-purple-500 h-full transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex w-full ${
                    isLeft ? "justify-start pr-10" : "justify-end pl-10"
                  }`}
                >
                  {/* Timeline dot */}
                  <span className="absolute left-1/2 top-5 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 shadow-lg transform -translate-x-1/2"></span>

                  {/* Card */}
                  <div className="bg-gray-800 w-full md:w-1/2 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all">
                    <h3 className="text-xl font-bold text-purple-300">
                      {exp.year} – {exp.title}
                    </h3>
                    <h4 className="text-md text-gray-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
