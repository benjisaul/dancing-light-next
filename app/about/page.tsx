'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main
      style={{
        background: '#E7E6DF',
        color: '#0B0B0B',
        minHeight: '100vh',
      }}
    >
      <Header />

      {/* One single section, 2 columns: image left, text right */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '3rem',
            alignItems: 'flex-start',
          }}
        >
          {/* LEFT – IMAGE */}
          <div
            style={{
              flex: '0 0 42%', // 42% width column
            }}
          >
            <img
              src="/about/benji-saul.jpg"
              alt="Benji Saul"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '18px',
                display: 'block',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)',
              }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div
            style={{
              flex: '1 1 0',
            }}
          >
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '3rem',
                fontWeight: 500,
              }}
            >
              Who We Are
            </h1>


            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                marginBottom: '1rem',
              }}
            >
              We are Dancing Light — a heart-led creative studio using the power of
              story to reawaken truth, catalyse connection, and inspire a more
              peaceful, aligned future.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              We believe that film and photography are forms of medicine. When used
              with integrity, they have the power to heal, transform, and elevate
              culture — countering the fear-driven narratives that dominate
              mainstream media.
            </p>

            <h2
                 className="mb-6"
                 style={{
                   fontFamily: "'Montserrat', sans-serif",
                   fontSize: '3rem',
                   fontWeight: 500,
              }}
            >
              Founder: Benji Saul
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
              }}
            >
              Benji is a multidisciplinary filmmaker and photographer with a lifelong
              curiosity for what makes us human — and how stories shape the world we
              live in. Trained in Visual Anthropology at the Granada Centre in
              Manchester, his work blends cinematic craft with cultural inquiry and
              spiritual depth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
