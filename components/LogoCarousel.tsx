'use client'

import React from 'react'

const logos = [
  '/logos/team-love.png',
  '/logos/medicine-festival.png',
  '/logos/lovejam.png',
  '/logos/primal.png',
  '/logos/north-face.png',
  '/logos/vivobarefoot.png',
  '/logos/and-soul.png',
  '/logos/bath-house.png',
  '/logos/conscious-buddy.png',
  '/logos/cross-the-tracks.png',
  '/logos/inea.png',
]

// turn "/logos/medicine-festival.jpg" → "Medicine Festival"
function getAltFromPath(path: string) {
  const file = path.split('/').pop() || ''
  const name = file.split('.')[0] || ''
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function LogoCarousel() {
  const scrollingLogos = [...logos, ...logos] // duplicate for seamless scroll

  return (
    <>
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '1.5rem 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            width: 'max-content',
            animation: 'logo-scroll 35s linear infinite',
          }}
        >
          {scrollingLogos.map((logoPath, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '80px',
              }}
            >
              <img
                src={logoPath}
                alt={getAltFromPath(logoPath)}
                style={{
                  display: 'block',
                  maxHeight: '48px',
                  maxWidth: '140px',
                  objectFit: 'contain',
                  opacity: 0.9,
                  // maroon-ish single-colour treatment
                  filter:
                    'brightness(0) saturate(100%) sepia(1) hue-rotate(-10deg) saturate(450%) contrast(0.9)',
                  transition: 'transform 0.25s ease, opacity 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.06)'
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.opacity = '0.9'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* local keyframes, no dependency on globals.css */}
      <style jsx global>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}
