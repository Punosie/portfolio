"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const education = [
  {
    degree: "B.Tech,– JIIT-62",
    duration: "2021 – 2025",
    description: ["ECE", "CGPA: 6.7"],
  },
  {
    degree: "12th – DPS Rajnagar",
    duration: "2020 – 2021",
    description: ["CBSE | PCM + CS", "Percentage: 89.2%"],
  },
];

export default function EducationTimeline() {
  return (
    <section className="mt-24 px-4">
      <h2 className="text-2xl font-bold text-neutral-100 mb-16 text-center">
        Education
      </h2>

      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-neutral-700 " />

        <div className="space-y-12">
          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0",
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                )}
              >
                {/* Left content */}
                {isLeft && (
                  <div className="sm:w-1/2 sm:pr-8 w-full sm:text-right">
                    <TimelineCard {...edu} align="right" />
                  </div>
                )}

                {/* Right content */}
                {!isLeft && (
                  <div className="sm:w-1/2 sm:pl-8 w-full sm:text-left">
                    <TimelineCard {...edu} align="left" />
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
  degree,
  duration,
  description,
  align,
}: {
  degree: string;
  duration: string;
  description: string[];
  align: "left" | "right" | "center";
}) {
  return (
    <div
      className={cn(
        "bg-transparent border border-neutral-700 backdrop-blur-xs rounded-xl p-4 sm:p-5 w-full transition hover:shadow-md hover:border-neutral-500",
        align === "center" && "text-center",
        align === "right" && "text-right ml-auto",
        align === "left" && "text-left mr-auto"
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-100">{degree}</h3>
      <Badge className="bg-neutral-800 border-neutral-700 text-neutral-300 my-2">
        {duration}
      </Badge>
      <ul className="mt-2 list-disc list-inside text-sm text-neutral-400 space-y-1">
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
