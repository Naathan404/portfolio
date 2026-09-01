import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProjects from '../components/FeaturedProjects'
import Contact from '../components/Contact'
import PixelWorldMap from '../components/PixelWorldMap'

export default function Home() {
  const { hash } = useLocation()

  // Scroll to #contact (or any hash) when navigating in from another page, e.g. Nav's "Contact" link
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <PixelWorldMap />
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  )
}
