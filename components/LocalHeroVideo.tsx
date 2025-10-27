'use client'
import React from 'react'

export default function LocalHeroVideo({poster='/video/showreel-poster.jpg'}:{poster?:string}){
  const ref = React.useRef<HTMLVideoElement|null>(null)
  const [muted,setMuted]=React.useState(true)
  const [hover,setHover]=React.useState(false)
  React.useEffect(()=>{ if(ref.current){ ref.current.muted = true; ref.current.play().catch(()=>{}); }},[])
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
      <video ref={ref} className="absolute inset-0 w-full h-full object-cover" poster={poster} autoPlay muted={muted} loop playsInline preload="auto">
        <source src="/video/showreel.webm" type="video/webm" />
        <source src="/video/showreel.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"/>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
        <button onClick={()=>{ if(ref.current){ ref.current.muted = !ref.current.muted; setMuted(ref.current.muted); } }}
          onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
          aria-label={muted?'Unmute':'Mute'}
          className="h-9 w-9 rounded-full flex items-center justify-center ring-1 transition"
          style={{ backgroundColor:'rgba(0,0,0,0.35)', color:'#fff', boxShadow: hover? '0 0 12px #E5B979':'0 0 0 transparent', borderColor:'rgba(255,255,255,0.2)'}}>
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 9v6h4l5 4V5L7 9H3z" />
              <path d="M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 9v6h4l5 4V5L7 9H3z" />
              <path d="M14.5 9.5c1 1 1 2.6 0 3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M17 7c2.3 2.3 2.3 7.7 0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
