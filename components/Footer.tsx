'use client'
import React from 'react'
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6 text-sm">
        <div className="text-zinc-300">
          <div className="weight-400 mb-2">Dancing Light Films</div>
          <p className="text-zinc-400">Media that awakens, heals, and inspires.</p>
        </div>
        <div className="grid gap-2">
          <Link href="/about" className="text-zinc-300 hover:text-white">About</Link>
          <Link href="/portfolio" className="text-zinc-300 hover:text-white">Portfolio</Link>
          <Link href="/insights" className="text-zinc-300 hover:text-white">Insights</Link>
          <Link href="/book" className="text-zinc-300 hover:text-white">Book</Link>
        </div>
        <div className="grid gap-2">
          <a className="text-zinc-300 hover:text-white" href="mailto:benji@dancinglight.co.uk">benji@dancinglight.co.uk</a>
          <a className="text-zinc-300 hover:text-white" href="https://youtube.com/@dancinglightfilms" target="_blank">YouTube @dancinglightfilms</a>
          <button onClick={()=>{ if((window as any).Calendly){ (window as any).Calendly.initPopupWidget({ url:'https://calendly.com/benji-dancinglight/30min?hide_gdpr_banner=1' }); } }} className="mt-2 inline-flex items-center px-4 py-2 rounded-xl bg-[var(--gold)] text-black">Start a project</button>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 py-4 border-t border-white/10">© {new Date().getFullYear()} Dancing Light Films</div>
    </footer>
  )
}
