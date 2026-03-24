// app/components/TrackedLink.tsx
"use client"; // Required because we are using an onClick event listener

import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

interface TrackedLinkProps {
  href: string;
  eventName: string; // e.g., 'click_live_demo'
  eventCategory?: string; // e.g., 'homepage_cta'
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function TrackedLink({ 
  href, 
  eventName, 
  eventCategory = 'engagement', 
  className, 
  children, 
  ...props 
}: TrackedLinkProps) {
  
  // This function fires exactly when the user clicks the button
  const handleClick = () => {
    sendGAEvent('event', eventName, {
      event_category: eventCategory,
      event_label: href, // Logs where the user was trying to go
    });
  };

  const isExternal = href.startsWith('http');
  
  // Render a standard anchor tag for external domains
  if (isExternal) {
    return (
      <a href={href} className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  // Render a Next.js Link for internal pages to maintain fast SPA routing
  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}