'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  const [open,setOpen]=React.useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Dancing Light Films" 
            width={150} 
            height={40}
            className="h-8 w-auto"
          />
        </Link>
        <button onClick={()=>setOpen(!open)} className="sm:hidden px-3 py-2 ring-1 ring-white/20 rounded">Menu</button>
        <div className={`gap-6 items-center ${open? 'flex':'hidden'} sm:flex`}>
          <Link href="/about" className="hover:text-white text-zinc-300">About</Link>
          <Link href="/portfolio" className="hover:text-white text-zinc-300">Portfolio</Link>
          <Link href="/insights" className="hover:text-white text-zinc-300">Insights</Link>
          <Link href="/book" className="hover:text-white text-zinc-300">Book</Link>
          <button
            onClick={()=>{ if((window as any).Calendly){ (window as any).Calendly.initPopupWidget({ url:'https://calendly.com/benji-dancinglight/30min?hide_gdpr_banner=1' }); } }}
            className="ml-2 inline-flex items-center px-4 py-2 rounded-xl weight-400 bg-[var(--gold)] text-black"
          >Book a call</button>
        </div>
      </nav>
    </header>
  )
}