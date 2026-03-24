import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "./components/Navbar";
import 'katex/dist/katex.min.css';
import "./globals.css";

// 1. Enhanced Metadata for SEO and Social Sharing
export const metadata: Metadata = {
  metadataBase: new URL('https://adiklabs.com'), 
  title: {
    default: "AdikLabs — Scalable AI & Cloud Systems",
    template: "%s | AdikLabs",
  },
  description: "Designing scalable distributed systems and intelligent AI solutions with modern cloud-native architectures.",
  keywords: [
    "AI", 
    "Cloud", 
    "System Design", 
    "Distributed Systems",
    "Software Architecture",
    "Next.js"
  ],
  openGraph: {
    title: "AdikLabs",
    description: "AI.Cloud.System Solutions",
    url: "https://adiklabs.com",
    siteName: "AdikLabs",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "AdikLabs - Scalable AI & Cloud Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdikLabs — Scalable AI & Cloud Systems",
    description: "Designing scalable distributed systems and intelligent AI solutions.",
    images: ["/og-image.png"], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 2. Existing Font Configuration
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans relative">
        
        {/* GLOBAL GRADIENT AMBIENCE - Preserved from your layout */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-violet/10 to-blue/10 blur-3xl opacity-50" />
        </div>
        
        <Navbar />
        {children}

      </body>

      {/* 3. Google Analytics safely injected outside the body flow */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}