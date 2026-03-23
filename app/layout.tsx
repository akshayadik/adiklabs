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

import { Poppins } from 'next/font/google';
import Navbar from "./components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        {/* GLOBAL GRADIENT AMBIENCE - Updated to brand colors */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-violet/10 to-blue/10 blur-3xl opacity-50" />
        </div>
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}