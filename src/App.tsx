import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{
      maxWidth: 900, margin: '0 auto',
      border: '2px solid #c8a96e',
      borderRadius: 12,
      overflow: 'hidden',
      marginTop: 32,
      marginBottom: 32,
    }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
