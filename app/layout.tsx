export const metadata = {
  title: "AdikLabs — Scalable AI & Cloud Systems",
  description:
    "Designing scalable distributed systems and intelligent AI solutions with modern cloud-native architectures.",
  keywords: [
    "AI", "Cloud", "System Design", "Distributed Systems"
  ],
  openGraph: {
    title: "AdikLabs",
    description: "AI.Cloud.System Solutions",
    url: "https://adiklabs.com",
    siteName: "AdikLabs",
    locale: "en_IN",
    type: "website",
  },
};

import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* GLOBAL GRADIENT AMBIENCE */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-violet/20 via-blue/20 to-indigo/20 blur-3xl opacity-60" />
        </div>
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}