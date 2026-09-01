import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Container from '../components/Container'
import Lightbox from '../components/Lightbox'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/projects" replace />

  const { badge, type, wip, title, description, role, tech, images, github, demo, video } = project

  return (
    <Container style={{ padding: '32px 24px 48px' }}>
      <Link to="/projects" style={{ fontSize: 12, fontWeight: 700, color: '#5a7a3a' }}>
        ← Back to all projects
      </Link>

      <div style={{ display: 'flex', gap: 6, margin: '20px 0 10px' }}>
        {[badge, type, ...(wip ? ['WORK-IN-PROGRESS'] : [])].map((b, i) => {
          const isWip = b === 'WORK-IN-PROGRESS'
          return (
            <span
              key={`${b}-${i}`}
              style={{
                fontSize: 10,
                fontWeight: 800,
                borderRadius: 4,
                padding: '2px 8px',
                background: isWip ? '#fff3cd' : '#e8f5d0',
                color: isWip ? '#856404' : '#3d6020',
                border: isWip ? '1.5px solid #ffc107' : '1.5px solid #a0c870',
              }}
            >
              {b}
            </span>
          )
        })}
      </div>

      <h1 style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 30, color: '#3d2e1a', marginBottom: 14 }}>
        {title}
      </h1>

      <p style={{ fontSize: 14, color: '#7a6040', lineHeight: 1.75, marginBottom: 20, maxWidth: 640 }}>
        {description}
      </p>

      {role && (
        <div
          style={{
            marginBottom: 24,
            padding: '14px 16px',
            background: '#e8f5d0',
            border: '1.5px solid #a0c870',
            borderRadius: 8,
            maxWidth: 640,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 800, color: '#3d6020', marginBottom: 4 }}>
            {type === 'SOLO' ? 'HIGHLIGHTS' : 'MY ROLE'}
          </div>
          <div style={{ fontSize: 13, color: '#5a4030', fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.7 }}>
            {role}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {tech.map(t => (
          <span
            key={t}
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#7a6040',
              background: '#ede4cc',
              border: '1px solid #c8a96e',
              borderRadius: 4,
              padding: '3px 9px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
        {video && (
          <a
            href={video}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: '#c05000',
              background: '#fff0e0',
              border: '1.5px solid #f0a060',
              borderRadius: 6,
              padding: '8px 16px',
            }}
          >
            Demo ▶
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: '#3d6020',
              background: '#e8f5d0',
              border: '1.5px solid #a0c870',
              borderRadius: 6,
              padding: '8px 16px',
            }}
          >
            GitHub ↗
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: '#3d6020',
              background: '#e8f5d0',
              border: '1.5px solid #a0c870',
              borderRadius: 6,
              padding: '8px 16px',
            }}
          >
            Play ↗
          </a>
        )}
        {!github && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: '#aaa',
              background: '#f0ebe0',
              border: '1.5px solid #ddd',
              borderRadius: 6,
              padding: '8px 16px',
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
            gap: 12,
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
                height: 160,
                objectFit: 'cover',
                borderRadius: 8,
                border: '1.5px solid #c8a96e',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}

      <Lightbox src={selectedImg} onClose={() => setSelectedImg(null)} />
    </Container>
  )
}
