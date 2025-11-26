'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Divider from '@/components/Divider'
import LocalHeroVideo from '@/components/LocalHeroVideo'
import LogoCarousel from '@/components/LogoCarousel'
import Link from 'next/link'

export default function HomePage() {
  const offeringsRef = React.useRef<HTMLDivElement | null>(null)
  const [offeringsVisible, setOfferingsVisible] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    function handleScroll() {
      if (!offeringsRef.current) return
      const rect = offeringsRef.current.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight

      // when top of section is within 80% of viewport height → reveal
      if (rect.top < windowHeight * 0.8) {
        setOfferingsVisible(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // run once on mount in case user reloads mid-page
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const offerings = [
    {
      key: 'express',
      title: 'Express Your Truth',
      price: 'Bespoke project',
      description:
        'Short-form documentaries and artist films that reveal the depth of your story, mission, or creative essence—capturing the soul behind the vision.',
      image: '/offerings/express-your-truth.jpg',
    },
    {
      key: 'elevate',
      title: 'Elevate Your Presence',
      price: 'Campaign / content suite',
      description:
        'Strategic visual content—commercials, campaigns, and social storytelling—that amplifies your brand’s influence and deeply resonates with your audience.',
      image: '/offerings/elevate-your-presence.jpg',
    },
    {
      key: 'capture',
      title: 'Capture the Moment',
      price: 'Event / retreat coverage',
      description:
        'Immersive event storytelling for summits, retreats, and transformational gatherings—preserving the magic, emotion, and impact of every moment.',
      image: '/offerings/capture-the-moment.jpg',
    },
  ]

  return (
    <main className="min-h-screen bg-[#E7E6DF] text-[#0B0B0B]">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div
          className="w-full"
          style={{ paddingTop: '1rem', paddingBottom: '2rem' }}
        >
          <div>
            <LocalHeroVideo />
          </div>
        </div>
      </section>

      {/* Emotional Problem & Vision */}
      <section
  style={{
    maxWidth: '72rem',
    margin: '3.5rem auto 0',
    padding: '0 4rem 4.5rem',
    textAlign: 'center',
  }}
>
  <p
    style={{
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 150,
      fontSize: 'clamp(1.9rem, 3.5vw, 3.5rem)',
      lineHeight: 1.25,
      marginBottom: '3rem',
    }}
  >
    Purpose-driven filmmaking for change-makers, artists and conscious brands.
  </p>

  <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: '1.5rem',
            lineHeight: 1.6,
            maxWidth: '40rem',
            margin: '0 auto 2.75rem',
            color: '#3f3f3f',
          }}
        >
          We turn your purpose into cinematic storytelling that moves audiences. With a process
          rooted in care, clarity and co-creation, we help you express your mission with
          confidence, creativity and impact.
        </p>

  <Link href="#booking" className="strategy-button">
    Book a Strategy Call
  </Link>
</section>


      <Divider />

      {/* Our Offerings */}
      <section
        id="offerings"
        style={{
          background: '#0F0E0E',
          color: '#FDFBF7',
          marginTop: '5rem',
          marginBottom: '5rem',
        }}
      >
        <div
          ref={offeringsRef}
          className={`offerings-shell ${
            offeringsVisible ? 'offerings-visible' : ''
          }`}
          style={{
            position: 'relative',
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '10rem 2.5rem 10rem',
            overflow: 'hidden',
          }}
        >
          {/* soft flare in this section only */}
          <div className="offerings-flare-layer">
            <div className="offerings-flare" />
          </div>

          <h2
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 100,
              fontSize: '2rem',
              letterSpacing: '0.06em',
              color: '#FDFBF7',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Our Offerings
          </h2>

          <div
            style={{
              display: 'grid',
              gap: '2.8rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {offerings.map((offer) => (
              <article key={offer.key}>
                <Link
                  href="#booking"
                  style={{
                    display: 'block',
                    overflow: 'hidden',
                    borderRadius: '0.9rem',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      aspectRatio: '4 / 3',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  />
                </Link>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: '1.15rem',
                    marginBottom: '0.35rem',
                    color: '#FDFBF7',
                  }}
                >
                  {offer.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.95rem',
                    marginBottom: '0.9rem',
                    color: 'rgba(249,244,235,0.75)',
                  }}
                >
                  {offer.price}
                </p>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'rgba(249,244,235,0.9)',
                  }}
                >
                  {offer.description}
                </p>

                <div
                  style={{
                    marginTop: '1.25rem',
                    height: '2px',
                    width: '60px',
                    borderRadius: '999px',
                    background:
                      'linear-gradient(90deg, #C97C28 0%, #4C1C32 100%)',
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Social Proof */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6">
        <h3 className="text-2xl weight-500">Partners & Clients</h3>
        <LogoCarousel />
        <div className="grid md:grid-cols-2 gap-6">
          
        </div>
      </section>

      <Divider />

      {/* CTA + Booking Button */}
{/* CTA + Booking Button */}
<section
  id="booking"
  style={{
    maxWidth: '72rem',
    margin: '0 auto',
    padding: '3rem 1.5rem 4rem',
    textAlign: 'center',
  }}
>
  <h3 className="text-2xl weight-500" style={{ marginBottom: '0.75rem' }}>
    Ready to bring your story to light?
  </h3>

  <p
    style={{
      marginBottom: '2.5rem',
      color: '#3f3f3f',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      fontSize: '1rem',
    }}
  >
    Let's see what we can create together. <br />
    Book a free 30 minute creative Discovery Call directly in my calendar.
  </p>

  {/* perfectly centred, pill-shaped maroon button */}
  <Link
    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ20boQ0xhmfyrZcW1iuao6mZIQ2ewdlGOd-yZJ6ThfNzhSvHe2ARTrOOPzUVL5kWtUfH7C04HCc"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      padding: '0.75rem 2.5rem',
      borderRadius: '999px',          // pill shape
      border: '2px solid #FFFFFF',    // white outline
      backgroundColor: '#4C1C32',     // maroon
      color: '#FFFFFF',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      fontSize: '1rem',
      textDecoration: 'none',
      boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
      transition: 'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#6A2A46'   // lighter maroon
      e.currentTarget.style.transform = 'translateY(-1px)'
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.16)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#4C1C32'
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.12)'
    }}
  >
    Book a Strategy Call
  </Link>
</section>



      <Footer />
    </main>
  )
}
