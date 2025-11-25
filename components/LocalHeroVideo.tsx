'use client'

import React from 'react'

export default function LocalHeroVideo({
  poster = '/video/showreel-poster.jpg',
}: {
  poster?: string
}) {
  const ref = React.useRef<HTMLVideoElement | null>(null)
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const [muted, setMuted] = React.useState(true)
  const [hover, setHover] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  const [showGradient, setShowGradient] = React.useState(false)
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 })

  // autoplay muted
  React.useEffect(() => {
    if (ref.current) {
      ref.current.muted = true
      ref.current.play().catch(() => {})
    }
  }, [])

  // fade gradient on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setShowGradient(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // track cursor movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '60vh',
        maxHeight: '700px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      {/* HERO VIDEO */}
      <video
        ref={ref}
        poster={poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: ready ? 1 : 0,
          transform: ready ? 'scale(1)' : 'scale(1.03)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
        }}
      >
        <source src="/video/showreel.webm" type="video/webm" />
        <source src="/video/showreel.mp4" type="video/mp4" />
      </video>

      {/* SCROLL GRADIENT */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #E7E6DF 100%)',
          opacity: showGradient ? 1 : 0,
          transition: 'opacity 0.7s ease-out',
          pointerEvents: 'none',
        }}
      />

      {/* ✨ LENS FLARE CURSOR */}
      {hover && (
        <div
          style={{
            position: 'absolute',
            top: cursorPos.y - 60,
            left: cursorPos.x - 60,
            width: '120px',
            height: '120px',
            pointerEvents: 'none',
            background:
              'radial-gradient(circle, rgba(255,220,150,0.9) 0%, rgba(255,150,50,0.35) 40%, rgba(255,100,0,0) 70%)',
            mixBlendMode: 'screen',
            filter: 'blur(15px)',
            borderRadius: '50%',
            transition: 'transform 0.1s ease-out',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </div>
  )
}
