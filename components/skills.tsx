"use client";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiNextdotjs,
  SiFigma,
  SiRos,
  SiFastapi,
  SiDocker,
  SiThreedotjs,
  SiStreamlit,
  SiBlender,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { BiCodeAlt } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { Separator } from "@/components/ui/separator";

const Skill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <li className="flex items-center gap-2 hover:text-neutral-200 transition-colors duration-200">
    {icon && <span>{icon}</span>}
    <span>{label}</span>
  </li>
);

export default function Skills() {
  return (
    <section className="mt-24">
      <div className="grid gap-8 sm:grid-cols-3 text-neutral-200">
        {/* Frontend */}
        <div className="p-4 border backdrop-blur-xs border-neutral-700 rounded-xl space-y-3 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <Separator />
          <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-400">
            <Skill
              icon={<FaReact className="text-cyan-400" />}
              label="React.js"
            />
            <Skill
              icon={<FaReact className="text-cyan-300" />}
              label="React Native"
            />
            <Skill
              icon={<SiNextdotjs className="text-white" />}
              label="Next.js"
            />
            <Skill
              icon={<SiTailwindcss className="text-sky-400" />}
              label="Tailwind CSS"
            />
            <Skill
              icon={<SiChakraui className="text-teal-300" />}
              label="Chakra UI"
            />
            <Skill
              icon={<FaHtml5 className="text-orange-500" />}
              label="HTML5"
            />
            <Skill
              icon={<FaCss3Alt className="text-blue-500" />}
              label="CSS3"
            />
          </ul>
        </div>

        {/* Backend */}
        <div className="p-4 border backdrop-blur-xs border-neutral-700 rounded-xl space-y-3 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <Separator />
          <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-400">
            <Skill
              icon={<FaNodeJs className="text-green-500" />}
              label="Node.js"
            />
            <Skill
              icon={<SiExpress className="text-neutral-300" />}
              label="Express.js"
            />
            <Skill
              icon={<SiMongodb className="text-green-400" />}
              label="MongoDB"
            />
            <Skill
              icon={<SiFirebase className="text-yellow-500" />}
              label="Firebase"
            />
            <Skill icon={<TbSql className="text-blue-300" />} label="SQL" />
            <Skill
              icon={<FaPython className="text-yellow-300" />}
              label="Python"
            />
            <Skill
              icon={<SiFastapi className="text-green-500" />}
              label="FastAPI"
            />
            <Skill
              icon={<SiDocker className="text-sky-300" />}
              label="Docker"
            />
            <Skill icon={<FaCode className="text-neutral-200" />} label="DSA" />
          </ul>
        </div>

        {/* Dev & Tools */}
        <div className="p-4 border backdrop-blur-xs border-neutral-700 rounded-xl space-y-3 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Dev & Tools</h3>
          <Separator />
          <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-400">
            <Skill icon={<FaGithub className="text-white" />} label="GitHub" />
            <Skill icon={<SiFigma className="text-pink-400" />} label="Figma" />
            <Skill
              icon={<SiPostman className="text-orange-400" />}
              label="Postman"
            />
            <Skill icon={<SiVercel className="text-white" />} label="Vercel" />
            <Skill
              icon={<BiCodeAlt className="text-purple-400" />}
              label="Render"
            />
            <Skill
              icon={<VscVscode className="text-sky-400" />}
              label="VS Code"
            />
            <Skill icon={<SiRos className="text-red-500" />} label="ROS" />
            <Skill
              icon={<SiThreedotjs className="text-white" />}
              label="Three.js"
            />
            <Skill
              icon={<SiStreamlit className="text-red-400" />}
              label="Streamlit"
            />
            <Skill
              icon={<SiBlender className="text-orange-400" />}
              label="Blender"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
