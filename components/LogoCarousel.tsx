'use client'

import React from 'react'

const logos = [
  { src: '/logos/lovejam.png', alt: 'Lovejam' },
  { src: '/logos/medicine-festival.png', alt: 'Medicine Festival' },
  { src: '/logos/primal.png', alt: 'Primal Gathering' },
  { src: '/logos/team-love.png', alt: 'Team Love' },
  // add the rest here, exactly matching filenames in /public/logos
]

export default function LogoCarousel() {
  // duplicate array so the scroll feels infinite
  const scrollingLogos = [...logos, ...logos]

  return (
    <div className="overflow-hidden py-6">
      <div
        className="flex items-center gap-10 animate-logo-scroll"
        style={{ minWidth: 'max-content' }}
      >
        {scrollingLogos.map((logo, index) => (
          <div key={index} className="h-10 flex items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
