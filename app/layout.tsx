
import './globals.css'
import { Montserrat, Manrope } from 'next/font/google'
import React from 'react'

const mont = Montserrat({ subsets:['latin'], weight:['100','200','300','400','500'] })
const manrope = Manrope({ subsets:['latin'], weight:['500'], style:['normal'] })

export const metadata = {
  title: 'Dancing Light Films',
  description: 'Conscious film production for purpose-led brands, artists and changemakers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
        <script async src="https://assets.calendly.com/assets/external/widget.js"></script>
      </head>
      <body className={`${mont.className} bg-[#EDDED1] text-[#0B0B0B]`}>
  {children}
  <body className={`${mont.className} bg-[#EDDED1] text-[#0B0B0B]`}>
  {children}
</body>
    </html>
  )
}