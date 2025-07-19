// app/page.tsx or wherever your Home component is
import Link from "next/link";
import ParticlesBackground from "@/components/particlesBackground";
import VisitCounter from "@/components/visitCounter";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-transparent p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ParticlesBackground />

      <main className="flex flex-col row-start-2 items-center sm:items-start z-10">
        <div>
          {/* Navigation Links */}
          <div className="text-neutral-500 animate-delay-[250ms] animate-fade animate-ease-in flex gap-6 mb-3 justify-center ">
            <Link href="/about">
              <span className="text-sm xl:text-lg tracking-wider cursor-pointer underline underline-offset-[10px] decoration-black hover:text-neutral-300 hover:decoration-neutral-300 transition-all duration-350 ease-in-out delay-100">
                About Me
              </span>
            </Link>
            <Link href="/project">
              <span className="text-sm xl:text-lg tracking-wider cursor-pointer underline underline-offset-[10px] decoration-black hover:text-neutral-300 hover:decoration-neutral-300 transition-all duration-350 ease-in-out delay-100">
                Projects
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm xl:text-lg tracking-wider cursor-pointer underline underline-offset-[10px] decoration-black hover:text-neutral-300 hover:decoration-neutral-300 transition-all duration-350 ease-in-out delay-100">
                Contact
              </span>
            </Link>
          </div>

          {/* Title */}
          <div className="py-2.5 px-0.5 animate-fade animate-ease-in font-bold text-6xl text-center sm:text-6xl md:text-9xl text-neutral-200 tracking-wide">
            <h1 >punosie</h1>
          </div>
        </div>
      </main>
      <VisitCounter/> 
    </div>
  );
}
