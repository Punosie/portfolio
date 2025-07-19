import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

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
    <section className="sm:mt-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-100 mb-12 text-center flex items-center justify-center gap-2">
        <GraduationCap size={24} className="text-neutral-400" />
        Education
      </h2>
      {education.map((edu, i) => (
        <div key={i} className="relative mt-4 sm:mt-10">
          <TimelineCard {...edu} />
        </div>
      ))}
    </section>
  );
}

function TimelineCard({
  degree,
  duration,
  description,
}: {
  degree: string;
  duration: string;
  description: string[];
}) {
  return (
    <div className="bg-black/10 backdrop-blur-sm border h-[200px] border-neutral-700 rounded-xl p-5 transition hover:shadow-lg hover:border-neutral-500">
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
