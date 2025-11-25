import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">

        <div className="footer-left">
          <span className="footer-logo">dancing light films</span>
          <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <nav className="footer-nav">
          <Link href="#offerings">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </footer>
  )
}

