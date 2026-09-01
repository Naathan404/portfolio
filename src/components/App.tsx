import { Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import GalleryPage from '../pages/GalleryPage'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  )
}

export default App
