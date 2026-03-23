import { ReactNode } from 'react';

interface SectionProps {
  title: ReactNode; // ReactNode allows for both strings and complex headers
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading with Brand Navy */}
        <h2 className="text-3xl font-bold mb-10 text-primary border-l-4 border-violet pl-4">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}