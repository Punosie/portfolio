"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import ParticlesBackground from "@/components/particlesBackground";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiSocketdotio,
  SiExpress,
  SiChakraui,
  SiFastapi,
  SiVercel,
} from "react-icons/si";
import { RiFolderOpenLine } from "react-icons/ri";

// 🛠️ Tech Stack Icons
const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  React: { icon: <FaReact />, color: "text-cyan-400" },
  "Node.js": { icon: <FaNodeJs />, color: "text-green-400" },
  Express: { icon: <SiExpress />, color: "text-gray-300" },
  MongoDB: { icon: <SiMongodb />, color: "text-green-500" },
  Firebase: { icon: <SiFirebase />, color: "text-yellow-400" },
  Tailwind: { icon: <SiTailwindcss />, color: "text-sky-400" },
  Python: { icon: <FaPython />, color: "text-yellow-300" },
  "Socket.io": { icon: <SiSocketdotio />, color: "text-white" },
  "Chakra UI": { icon: <SiChakraui />, color: "text-teal-300" },
  FastAPI: { icon: <SiFastapi />, color: "text-blue-400" },
  Vercel: { icon: <SiVercel />, color: "text-white" },
  MERN: {
    icon: (
      <div className="flex gap-1">
        <FaReact className="text-cyan-400" />
        <FaNodeJs className="text-green-400" />
        <SiMongodb className="text-green-500" />
      </div>
    ),
    color: "",
  },
};

const projects = [
  {
    title: "TradeSim",
    description:
      "A low-latency trading simulator that features future mid-price predictions and real-time trade metrics such as slippage and latency.",
    github: "https://github.com/Punosie/TradeSim",
    live: "https://tradesim-shubhabha.vercel.app/",
    tech: [
      "React",
      "Python",
      "FastAPI",
      "MongoDB",
      "Tailwind",
      "Firebase",
      "Vercel",
    ],
  },
  {
    title: "WeightMate",
    description:
      "A full stack weight tracking app with user authentication and data visualization.",
    github: "https://github.com/Punosie/WeightMate",
    live: "https://weightmate.vercel.app/",
    tech: ["React", "MongoDB", "Node.js", "Express", "Firebase", "Chakra UI"],
  },
  {
    title: "DhanMantri",
    description:
      "A MERN stack app for financial data visualization using Yahoo Finance data.",
    github: "https://github.com/Punosie/DhanMantri",
    live: "https://dhanmantri.onrender.com/",
    tech: ["React", "MongoDB", "Node.js", "Express", "Python"],
  },
  {
    title: "Streamify",
    description:
      "Admin Interface with tables and charts for managing a music streaming platform.",
    github: "https://github.com/Punosie/Streamify",
    live: "https://punosie.github.io/Streamify/",
    tech: ["React", "Chakra UI", "Firebase"],
  },
  {
    title: "Notepad.py",
    description:
      "A Python-based text editor with core features like save, find, and open.",
    github: "https://github.com/Punosie/Notepad.py",
    live: "",
    tech: ["Python"],
  },
  {
    title: "File Renamer",
    description:
      "Simple file renamer application created using Python and Tkinter.",
    github: "https://github.com/Punosie/File-Renamer-GUI",
    live: "",
    tech: ["Python"],
  },
  {
    title: "Rock Paper Scissor CLI",
    description:
      "A simple player vs computer CLI-based rock paper scissor game using OOP principles.",
    github: "https://github.com/Punosie/File-Renamer-GUI",
    live: "",
    tech: ["Python"],
  },
];

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen text-neutral-100 font-[family-name:var(--font-geist-sans)]">
      <ParticlesBackground />
      <div className="flex justify-center p-4">
        <Navbar />
      </div>
      <div className="relative z-10 px-6 py-24 sm:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-2 text-white">
            <RiFolderOpenLine className="text-4xl text-neutral-300" />
            Projects
          </h1>
          <p className="text-neutral-400 text-sm mt-2">
            Handpicked works showcasing full stack dev & creative engineering.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <Dialog
              key={idx}
              open={openProject === idx}
              onOpenChange={(open) => setOpenProject(open ? idx : null)}
            >
              <DialogTrigger asChild>
                <div className="cursor-pointer border border-neutral-700 rounded-xl p-6 bg-transparent hover:border-neutral-500 hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-lg backdrop-blur-xs group">
                  <h2 className="text-lg font-bold mb-2 border-b border-neutral-700 pb-1 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-sm text-neutral-400 mb-2 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        className="flex items-center gap-1 bg-neutral-800 border border-neutral-700 text-xs text-neutral-300"
                      >
                        {techIconMap[tech]?.icon && (
                          <span className={techIconMap[tech].color}>
                            {techIconMap[tech].icon}
                          </span>
                        )}
                        <span>{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="bg-black/80 border border-neutral-700 text-neutral-300 max-w-xl backdrop-blur-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold mb-2">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>

                <p className="text-sm text-neutral-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      className="flex items-center gap-1 bg-neutral-800 border border-neutral-700 text-xs text-neutral-300"
                    >
                      {techIconMap[tech]?.icon && (
                        <span className={techIconMap[tech].color}>
                          {techIconMap[tech].icon}
                        </span>
                      )}
                      <span>{tech}</span>
                    </Badge>
                  ))}
                </div>

                <DialogFooter className="flex justify-end gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="bg-neutral-900 text-blue-400 border-neutral-700 hover:border-blue-500 hover:bg-blue-950/10 hover:text-white transition-all"
                      >
                        Live Preview
                      </Button>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="bg-neutral-900 text-green-400 border-neutral-700 hover:border-green-500 hover:bg-green-950/10 hover:text-white transition-all"
                    >
                      GitHub
                    </Button>
                  </a>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}

          {/* 🔧 Placeholder */}
          <div className="border border-dashed border-neutral-700 rounded-xl p-6 flex items-center justify-center text-neutral-500 text-sm italic bg-black/50 backdrop-blur-xs hover:border-neutral-400 hover:text-neutral-300 transition-all">
            🚧 More projects coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}
