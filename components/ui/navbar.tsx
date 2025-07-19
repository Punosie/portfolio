"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { IoMdPerson, IoMdMail } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

import Tip from "@/components/tip";
import { Separator } from "@/components/ui/separator";

const navOptions: {
  icon: IconType;
  title: string;
  tooltip: string;
  href: string;
  external?: boolean;
}[] = [
  { icon: IoHome, title: "Home", tooltip: "Home", href: "/" },
  { icon: IoMdPerson, title: "About Me", tooltip: "About Me", href: "/about" },
  { icon: MdWork, title: "Projects", tooltip: "Projects", href: "/project" },
  { icon: IoMdMail, title: "Contact", tooltip: "Contact Me", href: "/contact" },
  {
    icon: FaGithub,
    title: "GitHub",
    tooltip: "GitHub",
    href: "https://github.com/Punosie",
    external: true,
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    tooltip: "LinkedIn",
    href: "https://linkedin.com/in/shubhankar-kaushik",
    external: true,
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    tooltip: "Instagram",
    href: "https://www.instagram.com/shubhankar.2003/",
    external: true,
  },
  {
    icon: FaXTwitter,
    title: "X",
    tooltip: "Twitter/X",
    href: "https://x.com/pun0sie",
    external: true,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-transparent backdrop-blur-sm sm:backdrop-blur-xs rounded-full">
      <nav className="scrollbar-none flex gap-4 px-4 py-2.5 items-center justify-start overflow-x-auto w-[200px] sm:w-full border border-neutral-600 rounded-full bg-transparent backdrop-blur-sm scroll-smooth [-webkit-overflow-scrolling:touch]">
        {navOptions.map((option, index) => {
          const isActive = !option.external && pathname === option.href;

          const commonClasses =
            "flex items-center transition-all duration-300 ease-in-out";
          const hoverEffect =
            "hover:scale-125 hover:shadow-xl hover:shadow-purple-400 hover:underline underline-offset-4";
          const activeEffect =
            "text-purple-400 underline underline-offset-4 scale-110";

          return (
            <div key={option.href} className="flex items-center h-5 gap-4">
              <Tip tip={option.tooltip}>
                {option.external ? (
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${commonClasses} ${hoverEffect} text-neutral-200`}
                  >
                    <option.icon size={20} />
                  </a>
                ) : (
                  <Link
                    href={option.href}
                    className={`${commonClasses} ${
                      isActive ? activeEffect : "text-neutral-200"
                    } ${!isActive ? hoverEffect : ""}`}
                  >
                    <option.icon size={20} />
                  </Link>
                )}
              </Tip>

              {index !== navOptions.length - 1 && (
                <Separator orientation="vertical" className="bg-neutral-600" />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
