import { Link } from 'react-router-dom'
import { SectionLabel } from './SectionLabel'
import ProjectCard from './ProjectCard'
import { unityProjects } from '../data/projects'

export default function FeaturedProjects() {
  const featured = unityProjects.slice(0, 3)

  return (
    <section style={{ padding: '28px 32px', borderBottom: '2px solid #c8a96e' }}>
      <SectionLabel icon="🎮">Featured Projects</SectionLabel>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
        {featured.map(p => (
          <ProjectCard key={p.slug} project={p} compact />
        ))}
      </div>

      <Link
        to="/projects"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          fontWeight: 800,
          color: '#5a7a3a',
          border: '2px solid #7ab648',
          borderRadius: 8,
          padding: '8px 18px',
        }}
      >
        View all projects →
      </Link>
    </section>
  )
}
