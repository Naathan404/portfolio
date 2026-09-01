import { useState } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'
import Container from '../components/Container'
import { unityProjects, otherProjects } from '../data/projects'
import { theme } from '../theme'

export default function ProjectsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <Container style={{ paddingTop: 32, paddingBottom: 56 }}>
      <div className="pixel-panel" style={{ padding: '26px 28px 32px' }}>
        <h1
          style={{
            fontFamily: theme.font.pixel,
            fontSize: 34,
            color: theme.color.ink,
            marginBottom: 26,
            textShadow: `3px 3px 0 ${theme.color.crop}`,
          }}
        >
          All Projects
        </h1>

        <SectionLabel icon="🎮">Unity Projects</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 34 }}>
          {unityProjects.map(p => (
            <ProjectCard key={p.slug} project={p} onImageClick={setSelectedImg} />
          ))}
        </div>

        <SectionLabel icon="🛠️">Other Projects</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {otherProjects.map(p => (
            <ProjectCard key={p.slug} project={p} onImageClick={setSelectedImg} />
          ))}
        </div>
      </div>

      <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
    </Container>
  )
}
