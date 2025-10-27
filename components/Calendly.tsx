'use client'
import React from 'react'

const loadCalendly = (()=>{
  let promise:Promise<any>|null=null
  return ()=>{
    if((window as any).Calendly) return Promise.resolve((window as any).Calendly)
    if(promise) return promise
    promise = new Promise(res=>{
      const tick=()=> (window as any).Calendly ? res((window as any).Calendly) : setTimeout(tick,100)
      tick()
    })
    return promise
  }
})()

export async function openCalendlyPopup(url:string){
  const Calendly = await loadCalendly()
  Calendly.initPopupWidget({ url })
}

export function CalendlyInline({ url, height=780 }:{url:string, height?:number}){
  const ref = React.useRef<HTMLDivElement|null>(null)
  React.useEffect(()=>{
    let cancelled=false
    loadCalendly().then((Calendly:any)=>{
      if(cancelled || !ref.current) return
      Calendly.initInlineWidget({ url, parentElement: ref.current, prefill:{}, utm:{} })
    })
    return ()=>{ cancelled=true }
  },[url])
  return <div ref={ref} className="calendly-inline-widget" style={{minWidth:'320px', height}} aria-label="Schedule with Dancing Light"/>
}
