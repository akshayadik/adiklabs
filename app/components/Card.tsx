import Link from 'next/link'

export default function Card({ title, description, href }) {
  return (
    <Link href={href} className="block group">
      <div
        className="relative p-8 rounded-2xl border border-gray-100 bg-white 
                   hover:shadow-[0_20px_50px_rgba(45,156,219,0.1)] hover:-translate-y-1 
                   transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col"
      >
        {/* Subtle Brand Accent: A top-border gradient that appears on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title: Using Brand Navy (Primary) */}
        <h3 className="text-xl font-bold text-primary mb-3 transition-colors duration-300">
          {title}
        </h3>

        {/* Description: Using Brand Dark Gray (Muted) */}
        <p className="text-muted leading-relaxed flex-grow">
          {description}
        </p>

        {/* CTA: Using Brand Electric Blue */}
        <div className="mt-6 flex items-center text-blue text-sm font-semibold group-hover:gap-2 transition-all duration-300">
          <span>Read More</span>
          <span className="ml-1">→</span>
        </div>
      </div>
    </Link>
  )
}