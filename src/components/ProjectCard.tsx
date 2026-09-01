import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { theme } from '../theme'

const ENGINE_STYLE: Record<string, { bg: string; border: string; text: string; accent: string }> = {
  'UNITY 2D': { bg: theme.color.grassLight, border: theme.color.grassDark, text: theme.color.grassDarker, accent: theme.color.grassDark },
  'GODOT 4': { bg: '#d9edf4', border: theme.color.blue, text: '#1f5a72', accent: theme.color.blue },
  'DIRECT X': { bg: '#fbe4b4', border: theme.color.cropDark, text: '#7a4418', accent: theme.color.cropDark },
}
const DEFAULT_STYLE = { bg: theme.color.parchmentSoft, border: theme.color.wood, text: theme.color.inkSoft, accent: theme.color.wood }

function Badge({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 800,
        borderRadius: 0,
        padding: '3px 8px',
        boxShadow: `2px 2px 0 ${theme.color.woodDark}`,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

function ActionLink({ to, href, children, variant = 'default' }: { to?: string; href?: string; children: React.ReactNode; variant?: 'default' | 'video' }) {
  const shared = {
    fontFamily: theme.font.pixel,
    fontSize: 12,
    fontWeight: 700,
    color: variant === 'video' ? '#8f3d16' : theme.color.ink,
    background: variant === 'video' ? '#ffe0b8' : theme.color.parchmentSoft,
    border: `2px solid ${variant === 'video' ? theme.color.cropDark : theme.color.wood}`,
    boxShadow: `3px 3px 0 ${theme.color.woodDark}`,
    padding: '6px 12px',
    whiteSpace: 'nowrap' as const,
  }

  if (to) {
    return (
      <Link to={to} style={shared}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" style={shared}>
      {children}
    </a>
  )
}

export default function ProjectCard({
  project,
  onImageClick,
  compact = false,
}: {
  project: Project
  onImageClick?: (src: string) => void
  compact?: boolean
}) {
  const { slug, badge, type, wip, title, images, description, role, tech, video, github, demo } = project
  const engine = ENGINE_STYLE[badge] ?? DEFAULT_STYLE
  const cover = images?.[0]
  const avatarSize = compact ? 96 : 128

  return (
    <article
      style={{
        background:
          `linear-gradient(135deg, rgba(255, 247, 220, 0.78), transparent 46%), ${theme.color.parchment}`,
        border: `4px solid ${theme.color.woodDark}`,
        borderLeft: `8px solid ${engine.accent}`,
        boxShadow: theme.pixelShadow(compact ? 4 : 5),
        padding: compact ? '16px 18px' : '20px 22px',
        transition: 'transform 0.1s, box-shadow 0.1s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)'
        e.currentTarget.style.boxShadow = theme.pixelShadow(compact ? 6 : 7)
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translate(0, 0)'
        e.currentTarget.style.boxShadow = theme.pixelShadow(compact ? 4 : 5)
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: compact ? 12 : 16, flexWrap: 'wrap' }}>
        {cover && (
          <button
            type="button"
            onClick={() => onImageClick?.(cover)}
            style={{
              flexShrink: 0,
              width: avatarSize * 1.25,
              height: avatarSize,
              border: `4px solid ${engine.accent}`,
              overflow: 'hidden',
              boxShadow: `4px 4px 0 ${theme.color.woodDark}`,
              background: theme.color.cream,
              padding: 0,
              cursor: onImageClick ? 'pointer' : 'default',
            }}
          >
            <img src={cover} alt={`${title} icon`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </button>
        )}

        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
            <Badge style={{ background: engine.bg, color: engine.text, border: `2px solid ${engine.border}` }}>{badge}</Badge>
            <Badge style={{ background: theme.color.parchmentSoft, color: theme.color.inkSoft, border: `2px solid ${theme.color.wood}` }}>{type}</Badge>
            {wip && <Badge style={{ background: '#fff0a8', color: '#7a4a00', border: `2px solid ${theme.color.cropDark}` }}>WORK-IN-PROGRESS</Badge>}
          </div>
          <h2 style={{ fontSize: compact ? 24 : 28, fontWeight: 700, color: theme.color.ink, fontFamily: theme.font.pixel, marginBottom: 6 }}>
            {title}
          </h2>
          <p style={{ fontSize: 14, color: theme.color.inkSoft, lineHeight: 1.65, marginBottom: compact ? 12 : 16, fontWeight: 700 }}>
            {description}
          </p>
        </div>
      </div>

      {!compact && role && (
        <div
          style={{
            marginBottom: 16,
            padding: '10px 12px',
            background: engine.bg,
            border: `3px solid ${engine.border}`,
            boxShadow: `3px 3px 0 ${theme.color.woodDark}`,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 800, color: engine.text }}>
            → {type === 'SOLO' ? 'HIGHLIGHTS:' : 'MY ROLE:'}
          </span>
          <span style={{ fontSize: 12, color: theme.color.ink, marginLeft: 6, fontWeight: 700, whiteSpace: 'pre-line' }}>
            {role}
          </span>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {tech.map(t => (
            <span
              key={t}
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: theme.color.inkSoft,
                background: theme.color.cream,
                border: `2px solid ${theme.color.parchmentDark}`,
                padding: '3px 8px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {compact ? (
            <ActionLink to={`/projects/${slug}`}>Case Study →</ActionLink>
          ) : (
            <>
              {video && <ActionLink href={video} variant="video">Demo ▶</ActionLink>}
              {github && <ActionLink href={github}>GitHub ↗</ActionLink>}
              {demo && <ActionLink href={demo}>Play ↗</ActionLink>}
              {!github && (
                <span
                  style={{
                    fontFamily: theme.font.pixel,
                    fontSize: 12,
                    fontWeight: 700,
                    color: theme.color.inkMuted,
                    background: '#eadcc0',
                    border: `2px solid ${theme.color.parchmentDark}`,
                    padding: '6px 12px',
                    cursor: 'not-allowed',
                  }}
                  title="Private repository — available upon request"
                >
                  GitHub (Private)
                </span>
              )}
              <ActionLink to={`/projects/${slug}`}>Details →</ActionLink>
            </>
          )}
        </div>
      </div>

      {!compact && images && images.length > 1 && onImageClick && (
        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 18,
            overflowX: 'auto',
            padding: '8px 6px 6px',
            background: 'rgba(111, 63, 36, 0.08)',
            border: `2px dashed ${theme.color.wood}`,
          }}
        >
          {images.slice(1).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 2}`}
              onClick={() => onImageClick(src)}
              style={{
                height: 92,
                border: `3px solid ${theme.color.wood}`,
                objectFit: 'cover',
                flexShrink: 0,
                cursor: 'pointer',
                boxShadow: `3px 3px 0 ${theme.color.woodDark}`,
                transition: 'transform 0.12s, border-color 0.12s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = engine.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = theme.color.wood
              }}
            />
          ))}
        </div>
      )}
    </article>
  )
}
