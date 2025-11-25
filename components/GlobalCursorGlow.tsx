
'use client'

import React from 'react'

type GlowMode = 'gold' | 'purple'
type GlowZone = 'page' | 'hero'

export default function GlobalCursorGlow() {
  const [rawPos, setRawPos] = React.useState({ x: 0, y: 0 })
  const [pos, setPos] = React.useState({ x: 0, y: 0 })
  const [mode, setMode] = React.useState<GlowMode>('gold')
  const [zone, setZone] = React.useState<GlowZone>('page')
  const [clickBoost, setClickBoost] = React.useState(false)

  // Track mouse position globally (raw)
  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      setRawPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Smooth trailing motion towards raw position
  React.useEffect(() => {
    let frame: number
    const smooth = () => {
      setPos((prev) => {
        const lerp = 0.12 // smaller = slower trailing
        const x = prev.x + (rawPos.x - prev.x) * lerp
        const y = prev.y + (rawPos.y - prev.y) * lerp
        return { x, y }
      })
      frame = requestAnimationFrame(smooth)
    }
    frame = requestAnimationFrame(smooth)
    return () => cancelAnimationFrame(frame)
  }, [rawPos.x, rawPos.y])

  // Listen for "cursor-glow" events from header / hero
  React.useEffect(() => {
    const handler = (e: Event) => {
      const { detail } = e as CustomEvent<any>
      if (!detail) return

      if (detail.type === 'hover' && (detail.mode === 'gold' || detail.mode === 'purple')) {
        setMode(detail.mode)
      }

      if (detail.type === 'click') {
        setClickBoost(true)
        setTimeout(() => setClickBoost(false), 200)
      }

      if (detail.type === 'zone' && (detail.zone === 'page' || detail.zone === 'hero')) {
        setZone(detail.zone)
      }
    }

    window.addEventListener('cursor-glow', handler as EventListener)
    return () => window.removeEventListener('cursor-glow', handler as EventListener)
  }, [])

  // Pick base color by mode
  const base =
    mode === 'gold'
      ? { r: 201, g: 124, b: 40 } // gold
      : { r: 122, g: 58, b: 122 } // purple

  // Stronger in hero, softer elsewhere
  const zoneScale = zone === 'hero' ? 1.2 : 1
  const radius = 80 * zoneScale
  const blur = 26 * zoneScale

  const centerAlpha = clickBoost ? 0.85 : 0.6
  const midAlpha = clickBoost ? 0.4 : 0.24

  const gradient = `radial-gradient(circle,
    rgba(${base.r},${base.g},${base.b},${centerAlpha}) 0%,
    rgba(${base.r},${base.g},${base.b},${midAlpha}) 45%,
    rgba(${base.r},${base.g},${base.b},0) 80%)`

  return (
    <>
      {/* main trailing glow */}
      <div
        style={{
          position: 'fixed',
          top: pos.y - radius,
          left: pos.x - radius,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          pointerEvents: 'none',
          borderRadius: '50%',
          background: gradient,
          filter: `blur(${blur}px)`,
          mixBlendMode: 'soft-light',
          zIndex: 9999,
          transition: 'background 0.25s ease-out',
        }}
      />

      {/* click burst / shockwave */}
      {clickBoost && (
        <div
          style={{
            position: 'fixed',
            top: pos.y - radius * 1.6,
            left: pos.x - radius * 1.6,
            width: `${radius * 3.2}px`,
            height: `${radius * 3.2}px`,
            pointerEvents: 'none',
            borderRadius: '50%',
            background: `radial-gradient(circle,
              rgba(${base.r},${base.g},${base.b},0.35) 0%,
              rgba(${base.r},${base.g},${base.b},0.2) 30%,
              rgba(${base.r},${base.g},${base.b},0) 70%)`,
            filter: `blur(${blur * 1.2}px)`,
            mixBlendMode: 'soft-light',
            opacity: 0.85,
            zIndex: 9998,
            transition: 'opacity 0.35s ease-out, transform 0.35s ease-out',
            transform: 'scale(1.1)',
          }}
        />
      )}
    </>
  )
}
