"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "SDE Intern",
    company: "Orangewood",
    duration: "May 2024 – Present",
    description: [
      "Built a 3D configurator using Three.js & React.",
      "Trained YOLOv8 model for 6-DOF robot tracking.",
      "Containerized internal tools with Docker.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Wizard Infoways",
    duration: "Jun 2023 – Jul 2023",
    description: [
      "Built Django APIs integrated with React.",
      "Developed & styled WordPress pages with HTML/CSS/JS.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="mt-24 px-4">
      <h2 className="text-2xl font-bold text-neutral-100 mb-16 text-center">
        Experience
      </h2>

      <div className="relative">
        {/* Center Line */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-neutral-700" />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0",
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                )}
              >
                {/* Left side */}
                {isLeft && (
                  <div className="sm:w-1/2 sm:pr-8 w-full sm:text-right">
                    <TimelineCard {...exp} align="right" />
                  </div>
                )}

                {/* Right side */}
                {!isLeft && (
                  <div className="sm:w-1/2 sm:pl-8 w-full sm:text-left">
                    <TimelineCard {...exp} align="left" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  title,
  company,
  duration,
  description,
  align,
}: {
  title: string;
  company: string;
  duration: string;
  description: string[];
  align: "left" | "right" | "center";
}) {
  return (
    <div
      className={cn(
        "bg-transparent backdrop-blur-xs border border-neutral-700 rounded-xl p-4 sm:p-5 w-full transition hover:shadow-md hover:border-neutral-500",
        align === "center" && "text-center",
        align === "right" && "text-right ml-auto",
        align === "left" && "text-left mr-auto"
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
      <Badge className="bg-neutral-800 border-neutral-700 text-neutral-300 my-2">
        {company} • {duration}
      </Badge>
      <ul className="mt-2 list-disc list-inside text-sm text-neutral-400 space-y-1">
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
