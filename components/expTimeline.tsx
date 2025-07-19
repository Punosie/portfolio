import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

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
    <section className="sm:mt-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-100 mb-12 text-center flex items-center justify-center gap-2">
        <Briefcase size={24} className="text-neutral-400" />
        Experience
      </h2>

      {experiences.map((exp, i) => (
        <div key={i} className="relative mt-4 sm:mt-10">
          <TimelineCard {...exp} />
        </div>
      ))}
    </section>
  );
}

function TimelineCard({
  title,
  company,
  duration,
  description,
}: {
  title: string;
  company: string;
  duration: string;
  description: string[];
}) {
  return (
    <div className="bg-black/10 backdrop-blur-sm border h-[250px] sm:h-[200px] border-neutral-700 rounded-xl p-5 transition hover:shadow-lg hover:border-neutral-500">
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
