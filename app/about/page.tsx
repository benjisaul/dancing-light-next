'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'

export default function AboutPage(){
  return (
    <main>
      <Header/>
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/40">
          <img src="/images/founder/benji-saul.jpg" alt="Benji Saul" className="w-full h-full object-cover rounded-2xl" style={{boxShadow:'0 0 20px #C97C28, inset 0 0 30px rgba(255,255,255,0.2)'}}/>
        </div>
        <div className="grid gap-4">
          <h1 className="text-3xl weight-500">Who we are</h1>
          <p className="text-zinc-300">We are Dancing Light – a collective of purpose-driven creatives using the power of story to reawaken truth, catalyse connection, and build a more peaceful and aligned world.</p>
          <p className="text-zinc-300">We believe in the power of media as a tool for impacting culture, too often abused and used to spread fear and hate. We aim to create media that transforms, that inspires and uplifts...</p>
          <Divider/>
          <h2 className="text-2xl weight-500">Founder: Benji Saul</h2>
          <p className="text-zinc-300">Benji is a multidisciplinary filmmaker and photographer with a lifelong curiosity for what makes us human—and how stories shape the world we live in. Trained in Visual Anthropology at the Granada Centre in Manchester...</p>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
