'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CalendlyInline } from '@/components/Calendly'

export default function BookPage(){
  return (
    <main>
      <Header/>
      <section className="max-w-4xl mx-auto px-6 py-12 grid gap-6">
        <h1 className="text-3xl weight-500">Book a Strategy Call</h1>
        <p className="text-zinc-300">Find a time that suits you below. The calendar adapts to your timezone.</p>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/40 p-2">
          <CalendlyInline url="https://calendly.com/benji-dancinglight/30min?hide_gdpr_banner=1" height={780}/>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
