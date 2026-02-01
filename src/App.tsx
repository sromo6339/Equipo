import { useEffect, useState } from 'react'
import Hero from './assets/components/Hero'
import CursorEffect from './assets/components/Cursoreffect'
import Innovation from './assets/components/Innovation'
import Servicessection from './assets/components/Servicessection'
import Howwehelpsection from './assets/components/Howwehelpsection'
import GraphicSupportSection from './assets/components/Graphicsupportsection'
import ContactSection from './assets/components/Contactsection'
import Footer from './assets/components/Footer'
import Botonw from './assets/components/Botonw';

import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  // 👉 SCROLL POR CLICK
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return

    window.scrollTo({
      top: section.offsetTop - 120,
      behavior: 'smooth',
    })
  }

  // 👉 SCROLL SPY POR ID
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // 🔥 CLAVE
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Botonw />
      <CursorEffect />

      {/* EL HERO YA TIENE SU PROPIO SECTION CON ID="inicio" */}
      <Hero onNavigate={scrollToSection} activeSection={activeSection} />

      <section id="innovation">
        <Innovation />
      </section>

      <Servicessection />

      <section id="conocenos">
        <Howwehelpsection />
      </section>

      <GraphicSupportSection />

      <section id="contacto">
        <ContactSection />
      </section>

      <Footer />
    </>
  )
}

export default App
