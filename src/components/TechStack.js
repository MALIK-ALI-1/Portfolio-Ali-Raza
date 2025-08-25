"use client";

import { 
  FaReact, FaNodeJs, FaDatabase, FaPython, FaJava, FaShopify, FaWordpress 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap, 
  SiJavascript, SiCplusplus, SiGit, SiGithub, SiHeroku, SiVercel 
} from "react-icons/si";

export default function TechStack() {
  const stack = [
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML5", icon: <span className="text-orange-400">&lt;/&gt;</span> },
        { name: "CSS3", icon: <span className="text-blue-400">#</span> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiJavascript className="text-gray-300" /> },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      items: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Heroku", icon: <SiHeroku className="text-purple-400" /> },
      ],
    },
    {
      title: "CMS & eCommerce",
      items: [
        { name: "Shopify", icon: <FaShopify className="text-green-500" /> },
        { name: "WordPress (WooCommerce)", icon: <FaWordpress className="text-blue-500" /> },
      ],
    },
    {
      title: "Languages",
      items: [
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python (basic)", icon: <FaPython className="text-yellow-400" /> },
      ],
    },
  ];

  return (
    <section className="py-16 bg-black text-white" id="techstack">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-purple-400 mb-12 text-center">
          🛠 Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
