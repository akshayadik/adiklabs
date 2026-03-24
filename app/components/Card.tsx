import Link from 'next/link'

interface CardProps {
  title: string;
  description: string;
  href: string;
  previewUrl?: string; // New optional prop for the live demo
}

export default function Card({ title, description, href, previewUrl }: CardProps) {
  return (
    <div className="relative p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-[0_20px_50px_rgba(45,156,219,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group overflow-hidden">
      
      {/* Subtle Brand Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <h3 className="text-xl font-bold text-primary mb-3 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-muted leading-relaxed flex-grow">
        {description}
      </p>

      {/* Action Links Container */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        
        {/* Primary Link: Goes to your MD case study */}
        <Link 
          href={href} 
          className="flex items-center text-blue text-sm font-semibold hover:gap-2 transition-all duration-300"
        >
          <span>Read Case Study</span>
          <span className="ml-1">→</span>
        </Link>

        {/* Secondary Link: Renders ONLY if previewUrl is provided */}
        {previewUrl && (
          <a 
            href={previewUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-violet/10 text-violet text-sm font-bold hover:bg-violet/20 transition-colors flex items-center gap-2"
          >
            Live Demo
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet"></span>
            </span>
          </a>
        )}
      </div>
    </div>
  )
}