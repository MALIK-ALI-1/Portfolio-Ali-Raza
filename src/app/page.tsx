"use client";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
