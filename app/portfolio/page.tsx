'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'

export default function PortfolioPage(){
  return (
    <main>
      <Header/>
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-10">
        <h1 className="text-3xl weight-500">Portfolio</h1>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl weight-500">Express Your Truth</h3>
            <p className="text-zinc-300">Short-form documentaries and artist films…</p>
          </div>
          <iframe className="w-full aspect-video rounded-2xl ring-1 ring-white/10" src="https://www.youtube-nocookie.com/embed/338ayikxUmc?rel=0&modestbranding=1" title="Aweno: The Return" allowFullScreen/>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl weight-500">Elevate Your Presence</h3>
            <p className="text-zinc-300">Strategic visual content—commercials, campaigns, and social storytelling…</p>
          </div>
          <iframe className="w-full max-w-[420px] aspect-[9/16] rounded-2xl ring-1 ring-white/10" src="https://www.instagram.com/reel/DFalWvPof6G/embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl weight-500">Capture the Moment</h3>
            <p className="text-zinc-300">Immersive event storytelling for summits, retreats, and transformational gatherings…</p>
          </div>
          <iframe className="w-full aspect-video rounded-2xl ring-1 ring-white/10" src="https://www.youtube-nocookie.com/embed/PElA1GXz3UY?rel=0&modestbranding=1" title="Medicine Festival" allowFullScreen/>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
