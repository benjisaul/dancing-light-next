import './globals.css'
import { Montserrat } from 'next/font/google'
import React from 'react'

const mont = Montserrat({ subsets:['latin'], weight:['100','200','300','400','500'] })

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
      <body className={mont.className}>{children}</body>
    </html>
  )
}
