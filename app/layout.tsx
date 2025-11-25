import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Dancing Light Films',
  description:
    'Purpose-led filmmaking and cinematic storytelling for artists, visionaries, and changemakers.',
}

const mont = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        {children}
      </body>
    </html>
  )
}
