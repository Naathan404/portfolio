import { Link } from 'react-router-dom'
import { SectionLabel } from './SectionLabel'
import ProjectCard from './ProjectCard'
import { unityProjects } from '../data/projects'
import { theme } from '../theme'

export default function FeaturedProjects() {
  const featured = unityProjects.slice(0, 3)

  return (
    <section id="featured-projects" style={{ maxWidth: 1020, margin: '22px auto 0', padding: '0 18px', scrollMarginTop: 90 }}>
      <div className="pixel-panel" style={{ padding: '26px 28px 30px' }}>
        <SectionLabel icon="🎮">Featured Projects</SectionLabel>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
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
            fontFamily: theme.font.pixel,
            fontSize: 13,
            fontWeight: 700,
            color: theme.color.cream,
            background: `linear-gradient(180deg, ${theme.color.grass} 0%, ${theme.color.grassDark} 100%)`,
            border: `3px solid ${theme.color.grassDarker}`,
            boxShadow: theme.pixelShadow(4),
            padding: '9px 18px',
          }}
        >
          View all projects →
        </Link>
      </div>
    </section>
  )
}
