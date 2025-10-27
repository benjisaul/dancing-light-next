'use client'
import React from 'react'

export default function InstagramEmbed({ url, captioned=true }:{ url:string, captioned?:boolean }){
  React.useEffect(()=>{
    const id='ig-embed-js'
    let s=document.getElementById(id) as HTMLScriptElement|null
    if(!s){ s=document.createElement('script'); s.id=id; s.async=true; s.src='https://www.instagram.com/embed.js'; document.body.appendChild(s) }
    const t=setTimeout(()=>{ if((window as any).instgrm?.Embeds) (window as any).instgrm.Embeds.process() },150)
    return ()=> clearTimeout(t)
  },[url, captioned])
  return (
    <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14" {...(captioned? {['data-instgrm-captioned'] : ''} as any): {}}/>
  )
}
