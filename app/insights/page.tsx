'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function InsightsPage(){
  const posts=[
    {title:'Authentic Storytelling for Impact', type:'Article', blurb:'Placeholder — coming soon.'},
    {title:'Why film can be medicine', type:'Video', blurb:'Placeholder — coming soon.'},
    {title:'Designing films for transformation', type:'Article', blurb:'Placeholder — coming soon.'},
  ]
  return (
    <main>
      <Header/>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl weight-500 mb-6">Insights</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p,i)=>(
            <article key={i} className="rounded-2xl bg-[#2B2B2B] ring-1 ring-white/10 p-5">
              <div className="text-xs text-zinc-400">{p.type}</div>
              <h3 className="text-lg weight-400 mt-1">{p.title}</h3>
              <p className="text-sm text-zinc-300 mt-2">{p.blurb}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  )
}
