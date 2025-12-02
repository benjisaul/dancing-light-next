'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)   // ✅ FIXED

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    padding: '1.2rem 2rem',
    background: scrolled ? 'transparent' : '#E7E6DF',
    backdropFilter: scrolled ? 'blur(6px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
    transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
  }

  return (
    <header style={headerStyle}>
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >

        {/** ------------------- LOGO ------------------- */}
        <Link
  href="/"
  style={{ display: 'flex', alignItems: 'center' }}
  onMouseEnter={() => setLogoHovered(true)}
  onMouseLeave={() => setLogoHovered(false)}
>
  <img
    src={logoHovered ? '/logo2.png' : '/logo.png'}
    alt="Dancing Light Films"
    style={{
      width: 'clamp(240px, 40vw, 400px)',
      height: 'auto',
      display: 'block',
      transition: 'opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease',
      transform: logoHovered ? 'scale(1.03)' : 'scale(1)',      // gentle enlarge
      filter: logoHovered
        ? 'drop-shadow(0 0 10px rgba(201,124,40,0.35))'
        : 'drop-shadow(0 0 0px rgba(0,0,0,0))',                 // gold glow
    }}
  />
</Link>

        {/** ------------------- NAV ------------------- */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            flex: 0.2,
            justifyContent: 'center',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: '1.15rem',
            letterSpacing: '0.02em',
          }}
        >
          {[
            { href: '/#offerings', label: 'Services' },   // ← change here
            { href: '/about', label: 'About' },
            { href: 'mailto:benji@dancinglight.co.uk', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: '#0B0B0B',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C97C28'
                e.currentTarget.style.textShadow =
                  '0 0 6px rgba(201,124,40,0.35)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#0B0B0B'
                e.currentTarget.style.textShadow = 'none'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/** ------------------- CTA BUTTON ------------------- */}
        <Link
  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ20boQ0xhmfyrZcW1iuao6mZIQ2ewdlGOd-yZJ6ThfNzhSvHe2ARTrOOPzUVL5kWtUfH7C04HCc"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: '0.7rem 1.8rem',
    borderRadius: '999px',
    background: '#C97C28',
    color: '#FFFFFF',
    border: '2px solid #FFFFFF',
    fontSize: '1rem',
    textDecoration: 'none',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    transition: 'all 0.25s ease',
    whiteSpace: 'nowrap',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = '#E9A45A'
    e.currentTarget.style.borderColor = '#FFFFFF'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = '#C97C28'
    e.currentTarget.style.borderColor = '#FFFFFF'
  }}
>
  Book now
</Link>

      </div>
    </header>
  )
}
