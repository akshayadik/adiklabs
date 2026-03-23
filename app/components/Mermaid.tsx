"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

// Initialize mermaid with AdikLabs Brand Colors
mermaid.initialize({
  startOnLoad: true,
  theme: "base",
  themeVariables: {
    primaryColor: "#0B1F3A",    // Navy
    primaryTextColor: "#FFFFFF",
    primaryBorderColor: "#7A3FF2", // Violet
    lineColor: "#2D9CDB",       // Electric Blue
    secondaryColor: "#F7F9FC",   // Light Gray BG
    tertiaryColor: "#FFFFFF",
  },
});

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="flex justify-center my-8 overflow-x-auto">
      <div className="mermaid" ref={ref}>
        {chart}
      </div>
    </div>
  );
}