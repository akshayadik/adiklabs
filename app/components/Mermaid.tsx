"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "base",
  themeVariables: {
    // Brand Colors
    primaryColor: "#0B1F3A",
    primaryTextColor: "#FFFFFF",
    lineColor: "#2D9CDB",
    secondaryColor: "#7A3FF2",
    
    // CRITICAL: Set the default text color for all nodes to Navy
    mainBkg: "#FFFFFF",
    nodeTextColor: "#0B1F3A", 
    textColor: "#0B1F3A",
    
    fontFamily: "var(--font-poppins), sans-serif",
  },
});

export default function Mermaid({ chart }: { chart: string }) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="flex justify-center my-8 w-full overflow-hidden bg-white p-4 rounded-xl border border-gray-100">
      {/* Remove 'text-center' to prevent layout shifts */}
      <div className="mermaid" style={{ width: 'fit-content' }}>
        {chart}
      </div>
    </div>
  );
}