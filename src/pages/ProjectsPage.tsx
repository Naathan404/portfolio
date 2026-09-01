import { useState } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'
import Container from '../components/Container'
import { unityProjects, otherProjects } from '../data/projects'

export default function ProjectsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <Container style={{ padding: '32px 24px' }}>
      <h1
        style={{
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: 28,
          color: '#3d2e1a',
          marginBottom: 28,
        }}
      >
        All Projects
      </h1>

      <SectionLabel icon="🎮">Unity Projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {unityProjects.map(p => (
          <ProjectCard key={p.slug} project={p} onImageClick={setSelectedImg} />
        ))}
      </div>

      <SectionLabel icon="🛠️">Other Projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {otherProjects.map(p => (
          <ProjectCard key={p.slug} project={p} onImageClick={setSelectedImg} />
        ))}
      </div>

      <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
    </Container>
  )
}
