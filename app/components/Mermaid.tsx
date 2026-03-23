"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "base",
  // CRITICAL: Enable maxWidth to allow the diagram to fill its container
  flowchart: { useMaxWidth: true, htmlLabels: true },
  sequence: { useMaxWidth: true },
  themeVariables: {
    primaryColor: "#0B1F3A",    // Navy Blue
    primaryTextColor: "#FFFFFF",
    lineColor: "#2D9CDB",       // Electric Blue
    secondaryColor: "#7A3FF2",   // Violet
    mainBkg: "#FFFFFF",
    nodeTextColor: "#0B1F3A", 
    textColor: "#0B1F3A",
    fontFamily: "var(--font-poppins), sans-serif",
  },
});

export default function Mermaid({ chart }: { chart: string }) {
  useEffect(() => {
    // Re-run mermaid logic when the chart content changes
    mermaid.contentLoaded();
  }, [chart]);

  return (
    // Increased padding (p-8) and removed flex-center to allow full-width growth
    <div className="my-10 w-full overflow-hidden bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
      {/* Changed fit-content to w-full to utilize the entire article width */}
      <div className="mermaid w-full" style={{ width: '100%' }}>
        {chart}
      </div>
    </div>
  );
}