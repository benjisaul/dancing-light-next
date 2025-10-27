'use client'
import React from 'react'

const logos = [
  '/logos/team-love.png',
  '/logos/medicine-festival.jpg',
  '/logos/lovejam.png',
  '/logos/primal.png',
  '/logos/north-face.png',
  '/logos/vivobarefoot.png',
  '/logos/unmasked-man.png',
  '/logos/arts-council-england.svg',
  '/logos/and-soul.png',
  '/logos/bath-house.png',
  '/logos/conscious-buddy.png',
  '/logos/cross-the-tracks.png',
  '/logos/inea.png'
]

export default function LogoCarousel(){
  return (
    <div className="overflow-hidden">
      <div className="flex gap-10 animate-[scroll_30s_linear_infinite] will-change-transform">
        {logos.map((src,i)=>(
          <div key={i} className="min-w-[140px] h-16 flex items-center justify-center opacity-90">
            <img src={src} alt="client logo" className="max-h-10 logo-filter"/>
          </div>
        ))}
      </div>
      <style jsx>{`@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  )
}
