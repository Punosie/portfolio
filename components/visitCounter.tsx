"use client";
import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("visit-counted");

    if (!alreadyCounted) {
      // Only increment once per session
      fetch("/api/visits", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setVisits(data.count);
          sessionStorage.setItem("visit-counted", "true");
        });
    } else {
      // Just fetch count
      fetch("/api/visits")
        .then((res) => res.json())
        .then((data) => {
          setVisits(data.count);
        });
    }
  }, []);

  return (
    <div className="fixed bottom-4 left-4 text-xs text-neutral-400 bg-neutral-900/80 px-3 py-1 rounded shadow-sm border border-neutral-700 backdrop-blur-sm z-50">
      {visits !== null ? `Visits: ${visits}` : "Loading..."}
    </div>
  );
}
