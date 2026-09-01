import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { theme } from '../theme'

// Color each engine badge differently so projects are distinguishable at a
// glance while scrolling, instead of every card wearing the same green chip.
// Unity uses a deeper, mossier green than the site's main grass-green
// (buttons/nav), so it still reads as green but doesn't visually merge in.
const ENGINE_STYLE: Record<string, { bg: string; border: string; text: string; accent: string }> = {
  'UNITY 2D': { bg: '#dfe8cd', border: '#4f7942', text: '#2f4a26', accent: '#4f7942' },
  'GODOT 4': { bg: '#dcf0f5', border: theme.color.sky, text: '#1f5a72', accent: theme.color.sky },
  'DIRECT X': { bg: '#fbe8c8', border: theme.color.gold, text: '#8a5a10', accent: theme.color.gold },
}
const DEFAULT_STYLE = { bg: '#ede4cc', border: theme.color.wood, text: theme.color.inkSoft, accent: theme.color.wood }

export default function ProjectCard({
  project,
  onImageClick,
  compact = false,
}: {
  project: Project
  onImageClick?: (src: string) => void
  /** compact = used in Home preview: shorter card, always links out to detail page */
  compact?: boolean
}) {
  const { slug, badge, type, wip, title, images, description, role, tech, video, github, demo } = project
  const engine = ENGINE_STYLE[badge] ?? DEFAULT_STYLE
  const cover = images?.[0]
  const avatarSize = compact ? 96 : 128

  return (
    <div
      style={{
        background: '#faf5e8',
        border: '2px solid #c8a96e',
        borderLeft: `6px solid ${engine.accent}`,
        borderRadius: 10,
        padding: compact ? '16px 20px' : '18px 22px',
        transition: 'transform 0.1s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {/* Header row: fixed square avatar/icon thumbnail + tags/title beside it.
          A fixed square never distorts, no matter the source screenshot's aspect ratio. */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: compact ? 12 : 16 }}>
        {cover && (
          <div
            style={{
              flexShrink: 0,
              width: avatarSize * 1.25,
              height: avatarSize,
              borderRadius: 8,
              border: `3px solid ${engine.accent}`,
              overflow: 'hidden',
              boxShadow: theme.pixelShadow(3, engine.accent),
            }}
          >
            <img src={cover} alt={`${title} icon`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                borderRadius: 4,
                padding: '2px 8px',
                background: engine.bg,
                color: engine.text,
                border: `1.5px solid ${engine.border}`,
              }}
            >
              {badge}
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                borderRadius: 4,
                padding: '2px 8px',
                background: '#ede4cc',
                color: theme.color.inkSoft,
                border: '1.5px solid #c8a96e',
              }}
            >
              {type}
            </span>
            {wip && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  borderRadius: 4,
                  padding: '2px 8px',
                  background: '#fff3cd',
                  color: '#856404',
                  border: '1.5px solid #ffc107',
                }}
              >
                WORK-IN-PROGRESS
              </span>
            )}
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#3d2e1a', fontFamily: "'Pixelify Sans', monospace" }}>{title}</h2>
          <p style={{ fontSize: 14, color: '#7a6040', lineHeight: 1.65, marginBottom: compact ? 12 : 16 }}>
            {description}
          </p>
        </div>
      </div>

      {/* Everything else: full width below the header row */}
      {/* <p style={{ fontSize: 13, color: '#7a6040', lineHeight: 1.65, marginBottom: compact ? 12 : 16 }}>
        {description}
      </p> */}

      {!compact && role && (
        <div
          style={{
            marginBottom: 16,
            padding: '8px 12px',
            background: engine.bg,
            border: `1.5px solid ${engine.border}`,
            borderRadius: 6,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, color: engine.text }}>
            → {type === 'SOLO' ? 'HIGHLIGHTS:' : 'MY ROLE:'}
          </span>
          <span style={{ fontSize: 12, color: '#5a4030', marginLeft: 6, fontWeight: 600, whiteSpace: 'pre-line' }}>
            {role}
          </span>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
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

        <div style={{ display: 'flex', gap: 8 }}>
          {compact ? (
            <Link
              to={`/projects/${slug}`}
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: engine.text,
                background: engine.bg,
                border: `1.5px solid ${engine.border}`,
                borderRadius: 6,
                padding: '6px 14px',
                whiteSpace: 'nowrap',
              }}
            >
              Case Study →
            </Link>
          ) : (
            <>
              {[
                ...(video ? [{ label: 'Demo ▶', href: video, id: 'video' }] : []),
                ...(github ? [{ label: 'GitHub ↗', href: github, id: 'git' }] : []),
                ...(demo ? [{ label: 'Play ↗', href: demo, id: 'play' }] : []),
              ].map(({ label, href, id }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: id === 'video' ? '#c05000' : engine.text,
                    background: id === 'video' ? '#fff0e0' : engine.bg,
                    border: id === 'video' ? '1.5px solid #f0a060' : `1.5px solid ${engine.border}`,
                    borderRadius: 6,
                    padding: '6px 14px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </a>
              ))}
              {!github && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: '#aaa',
                    background: '#f0ebe0',
                    border: '1.5px solid #ddd',
                    borderRadius: 6,
                    padding: '6px 14px',
                    cursor: 'not-allowed',
                  }}
                  title="Private repository — available upon request"
                >
                  GitHub (Private)
                </span>
              )}
              <Link
                to={`/projects/${slug}`}
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#7a6040',
                  background: '#ede4cc',
                  border: '1.5px solid #c8a96e',
                  borderRadius: 6,
                  padding: '6px 14px',
                  whiteSpace: 'nowrap',
                }}
              >
                Details →
              </Link>
            </>
          )}
        </div>
      </div>

      {!compact && images && images.length > 1 && onImageClick && (
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 16,
            overflowX: 'auto',
            paddingBottom: 4,
            paddingTop: 6,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          {images.slice(1).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 2}`}
              onClick={() => onImageClick(src)}
              style={{
                height: 90,
                borderRadius: 6,
                border: '1.5px solid #c8a96e',
                objectFit: 'cover',
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                e.currentTarget.style.borderColor = engine.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = '#c8a96e'
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}