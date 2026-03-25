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
  // app/components/Mermaid.tsx

  useEffect(() => {
    // Ensure we only run on the client
    if (typeof window !== 'undefined') {
      mermaid.initialize({
        startOnLoad: false, // Set to false since we are manually triggering
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'inherit',
      });

      // Use run() to target the specific render
      mermaid.run({
        nodes: document.querySelectorAll('.mermaid'),
      }).catch(err => console.error("Mermaid render failed:", err));
    }
  }, [chart]); // Re-run whenever the chart content changes

  return (
    // Increased padding (p-8) and removed flex-center to allow full-width growth
    <div className="my-10 w-full overflow-hidden bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
      {/* Changed fit-content to w-full to utilize the entire article width */}
      <div className="mermaid-container w-full overflow-hidden flex justify-center my-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
        <div className="mermaid w-full flex justify-center">
          {chart}
        </div>
      </div>
    </div>
  );
}