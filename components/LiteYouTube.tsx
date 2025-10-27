'use client'
import React from 'react'
export default function LiteYouTube({ id, title, autoPlay=false }:{id:string, title:string, autoPlay?:boolean}){
  const [play,setPlay]=React.useState(autoPlay)
  const poster=`https://img.youtube.com/vi/${id}/hqdefault.jpg`
  return (
    <div className="relative aspect-video w-full bg-black overflow-hidden rounded-2xl ring-1 ring-white/10">
      {!play ? (
        <button onClick={()=>setPlay(true)} className="group absolute inset-0 w-full h-full" aria-label={`Play ${title}`}>
          <img src={poster} alt={`${title} poster`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[var(--gold)]">
              <span className="ml-1 border-l-[18px] border-l-black border-y-[12px] border-y-transparent"/>
            </span>
          </div>
        </button>
      ):(
        <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1`} title={title} loading="eager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      )}
    </div>
  )
}
