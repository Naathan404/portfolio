import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import GalleryPage from './pages/GalleryPage'
import { theme } from './theme'

export default function App() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: '32px auto',
        border: `3px solid ${theme.color.woodDark}`,
        outline: `2px solid ${theme.color.woodLight}`,
        outlineOffset: '-6px',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: theme.pixelShadow(6),
      }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  )
}