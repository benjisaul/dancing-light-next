'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'
import LocalHeroVideo from '@/components/LocalHeroVideo'
import LogoCarousel from '@/components/LogoCarousel'
import { CalendlyInline } from '@/components/Calendly'
import Link from 'next/link'

export default function HomePage(){
  return (
    <main>
      <Header/>
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 sm:pt-16">
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[var(--shadow)]">
            <LocalHeroVideo/>
          </div>
          <div className="mt-6 text-center">
            <Link href="/book" className="inline-flex items-center px-6 py-3 rounded-xl weight-400" style={{backgroundColor:'var(--gold)', color:'#0B0B0B'}}>Book a Strategy Call</Link>
          </div>
        </div>
      </section>

      <Divider/>

      {/* Emotional Problem & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid gap-6">
        <p className="weight-500 text-xl text-center">We help visionary, purpose-led organisations, artists and changemakers uncover their deepest truth and express it with cinematic power—to move hearts and shape culture.</p>
      </section>

      <Divider/>

      {/* Our Offerings */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid gap-8">
        <h2 className="text-2xl weight-500 text-center">Our Offerings</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl weight-500">Express Your Truth</h3>
            <p className="text-zinc-300">Short-form documentaries and artist films that reveal the depth of your story, mission, or creative essence—capturing the soul behind the vision.</p>
          </div>
          <div>
            <iframe className="w-full aspect-video rounded-2xl ring-1 ring-white/10" src="https://www.youtube-nocookie.com/embed/338ayikxUmc?rel=0&modestbranding=1" title="Aweno: The Return" allowFullScreen/>
          </div>

          <div>
            <h3 className="text-xl weight-500">Elevate Your Presence</h3>
            <p className="text-zinc-300">Strategic visual content—commercials, campaigns, and social storytelling—that amplifies your brand’s influence and deeply resonates with your audience.</p>
          </div>
          <div className="grid gap-4">
            <div className="w-full max-w-[420px]"><iframe className="w-full aspect-[9/16] rounded-2xl ring-1 ring-white/10" src="https://www.instagram.com/reel/DFalWvPof6G/embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/></div>
          </div>

          <div>
            <h3 className="text-xl weight-500">Capture the Moment</h3>
            <p className="text-zinc-300">Immersive event storytelling for summits, retreats, and transformational gatherings—preserving the magic, emotion, and impact of every moment.</p>
          </div>
          <div>
            <iframe className="w-full aspect-video rounded-2xl ring-1 ring-white/10" src="https://www.youtube-nocookie.com/embed/PElA1GXz3UY?rel=0&modestbranding=1" title="Medicine Festival" allowFullScreen/>
          </div>
        </div>

        {/* Strategy foundation */}
        <div className="mt-10 text-center">
          <div className="flex flex-col items-center mb-4">
            <div className="h-4 w-4 rotate-45 mb-3" style={{backgroundColor:'var(--maroon)', boxShadow:'0 0 15px #ffffff'}}></div>
            <h3 className="text-2xl weight-500">The Foundation: Strategy</h3>
          </div>
          <p className="text-zinc-300 max-w-2xl mx-auto">Every project begins with deep inquiry and alignment to ensure your story emerges with clarity, authenticity, and transformational impact.</p>
        </div>

        <div className="text-center">
          <Link href="/portfolio" className="inline-flex items-center px-5 py-3 rounded-xl ring-1 ring-white/20 hover:ring-white/40">View full portfolio</Link>
        </div>
      </section>

      <Divider/>

      {/* Social Proof */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6">
        <h3 className="text-2xl weight-500">Partners & Clients</h3>
        <LogoCarousel/>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="rounded-2xl bg-[#2B2B2B] ring-1 ring-white/10 p-5 text-zinc-300">“Placeholder testimonial… coming soon.”</blockquote>
          <blockquote className="rounded-2xl bg-[#2B2B2B] ring-1 ring-white/10 p-5 text-zinc-300">“Placeholder testimonial… coming soon.”</blockquote>
        </div>
      </section>

      <Divider/>

      {/* CTA + Inline Calendly */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid gap-6">
        <h3 className="text-2xl weight-500 text-center">Ready to bring your story to light?</h3>
        <p className="text-center text-zinc-300">Book a Creative Discovery Call or join our mailing list for inspiration and tools.</p>
        <div className="mt-4 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/40 p-2">
          <CalendlyInline url="https://calendly.com/benji-dancinglight/30min?hide_gdpr_banner=1" height={700}/>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
