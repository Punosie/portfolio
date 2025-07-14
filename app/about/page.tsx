import Skills from "@/components/skills";
import ExperienceTimeline from "@/components/expTimeline";
import EducationTimeline from "@/components/eduTimeline";
import { Navbar } from "@/components/ui/navbar";
import { Badge } from "@/components/ui/badge";
import ParticlesBackground from "@/components/particlesBackground";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-transparent font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Background */}
      <ParticlesBackground />

      {/* Fixed Navbar on Top Center */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <Navbar />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 p-8 pb-20 sm:p-20 text-neutral-300">
        {/* About Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200 mb-6 tracking-tight text-center sm:text-left">
              About Me
            </h1>
            <p className="max-w-3xl leading-relaxed text-sm sm:text-base text-neutral-400 text-center sm:text-left">
              Hey, I&apos;m{" "}
              <span className="text-neutral-200 font-semibold">Shubhankar</span>{" "}
              —{" "}
              <Badge className="bg-neutral-900 text-sm border-neutral-700 text-neutral-300 my-2">
                Software Developer
              </Badge>
              <br />
              When I&apos;m not coding, I&apos;m probably watching anime,
              pretending to be productive, or gaming.
            </p>
          </div>
        </div>

        {/* Skills beside description */}
        <div>
          <Skills />
        </div>

        {/* Experience Timeline */}
        <div className="mt-24">
          <ExperienceTimeline />
        </div>

        {/* Education Timeline */}
        <div className="mt-24">
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
}
