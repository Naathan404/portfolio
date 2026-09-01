import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Container from '../components/Container'
import Lightbox from '../components/Lightbox'
import { getProjectBySlug } from '../data/projects'
import { theme } from '../theme'

function ProjectAction({ href, children, variant = 'default' }: { href: string; children: React.ReactNode; variant?: 'default' | 'video' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: theme.font.pixel,
        fontSize: 13,
        fontWeight: 700,
        color: variant === 'video' ? '#8f3d16' : theme.color.ink,
        background: variant === 'video' ? '#ffe0b8' : theme.color.parchmentSoft,
        border: `3px solid ${variant === 'video' ? theme.color.cropDark : theme.color.wood}`,
        boxShadow: theme.pixelShadow(4),
        padding: '8px 15px',
      }}
    >
      {children}
    </a>
  )
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { badge, type, wip, title, description, role, tech, images, github, demo, video } = project

  return (
    <Container style={{ paddingTop: 32, paddingBottom: 58 }}>
      <div className="pixel-panel" style={{ padding: '26px 28px 34px' }}>
        <Link
          to="/projects"
          style={{
            display: 'inline-flex',
            fontFamily: theme.font.pixel,
            fontSize: 13,
            fontWeight: 700,
            color: theme.color.cream,
            background: theme.color.grassDark,
            border: `3px solid ${theme.color.grassDarker}`,
            boxShadow: `3px 3px 0 ${theme.color.woodDark}`,
            padding: '7px 12px',
            marginBottom: 22,
          }}
        >
          ← Back to all projects
        </Link>

        <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          {[badge, type, ...(wip ? ['WORK-IN-PROGRESS'] : [])].map((b, i) => {
            const isWip = b === 'WORK-IN-PROGRESS'
            return (
              <span
                key={`${b}-${i}`}
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  padding: '3px 8px',
                  background: isWip ? '#fff0a8' : theme.color.grassLight,
                  color: isWip ? '#7a4a00' : theme.color.grassDarker,
                  border: `2px solid ${isWip ? theme.color.cropDark : theme.color.grassDark}`,
                  boxShadow: `2px 2px 0 ${theme.color.woodDark}`,
                }}
              >
                {b}
              </span>
            )
          })}
        </div>

        <h1
          style={{
            fontFamily: theme.font.pixel,
            fontSize: 'clamp(34px, 6vw, 48px)',
            color: theme.color.ink,
            marginBottom: 16,
            textShadow: `3px 3px 0 ${theme.color.crop}`,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 14,
            color: theme.color.inkSoft,
            lineHeight: 1.75,
            marginBottom: 22,
            maxWidth: 720,
            fontWeight: 700,
            background: theme.color.cream,
            border: `3px solid ${theme.color.wood}`,
            boxShadow: `3px 3px 0 ${theme.color.parchmentDark}`,
            padding: '14px 16px',
          }}
        >
          {description}
        </p>

        {role && (
          <div
            style={{
              marginBottom: 24,
              padding: '14px 16px',
              background: theme.color.grassLight,
              border: `3px solid ${theme.color.grassDark}`,
              boxShadow: `4px 4px 0 ${theme.color.woodDark}`,
              maxWidth: 720,
            }}
          >
            <div style={{ fontFamily: theme.font.pixel, fontSize: 13, fontWeight: 700, color: theme.color.grassDarker, marginBottom: 6 }}>
              {type === 'SOLO' ? 'HIGHLIGHTS' : 'MY ROLE'}
            </div>
            <div style={{ fontSize: 13, color: theme.color.ink, fontWeight: 700, whiteSpace: 'pre-line', lineHeight: 1.7 }}>
              {role}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 26 }}>
          {tech.map(t => (
            <span
              key={t}
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: theme.color.inkSoft,
                background: theme.color.cream,
                border: `2px solid ${theme.color.parchmentDark}`,
                padding: '4px 9px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 30, flexWrap: 'wrap' }}>
          {video && <ProjectAction href={video} variant="video">Demo ▶</ProjectAction>}
          {github && <ProjectAction href={github}>GitHub ↗</ProjectAction>}
          {demo && <ProjectAction href={demo}>Play ↗</ProjectAction>}
          {!github && (
            <span
              style={{
                fontFamily: theme.font.pixel,
                fontSize: 13,
                fontWeight: 700,
                color: theme.color.inkMuted,
                background: '#eadcc0',
                border: `3px solid ${theme.color.parchmentDark}`,
                padding: '8px 15px',
              }}
              title="Private repository — available upon request"
            >
              GitHub (Private)
            </span>
          )}
        </div>

        {images && images.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                onClick={() => setSelectedImg(src)}
                style={{
                  width: '100%',
                  height: 164,
                  objectFit: 'cover',
                  border: `4px solid ${theme.color.woodDark}`,
                  boxShadow: theme.pixelShadow(4),
                  cursor: 'pointer',
                  background: theme.color.cream,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
    </Container>
  )
}
