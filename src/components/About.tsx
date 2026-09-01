import { SectionLabel } from './SectionLabel'
import { theme } from '../theme'

const tools = [
  { icon: '🎮', name: 'Unity 2D', note: 'Main engine, 1+ year' },
  { icon: '💻', name: 'C#', note: 'Primary language' },
  { icon: '🕹️', name: 'Git / GitHub', note: 'Version control' },
  { icon: '🛠️', name: 'Other tools', note: 'Aseprite, Godot Engine,...' },
]

export default function About() {
  return (
    <section id="about" style={{ maxWidth: 1020, margin: '22px auto 0', padding: '0 18px', scrollMarginTop: 90 }}>
      <div className="pixel-panel" style={{ padding: '26px 28px 30px' }}>
        <SectionLabel icon="👤">About</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="about-grid">
          <p
            style={{
              fontSize: 14,
              color: theme.color.inkSoft,
              lineHeight: 1.75,
              fontWeight: 700,
              background: theme.color.cream,
              border: `3px solid ${theme.color.wood}`,
              boxShadow: `3px 3px 0 ${theme.color.parchmentDark}`,
              padding: '16px 18px',
            }}
          >
            Game dev student based in Ho Chi Minh City, looking for a Unity internship
            to grow in a real production environment. I enjoy the intersection of{' '}
            <strong style={{ color: theme.color.ink }}>programming and game feel</strong> —
            making mechanics that don't just work correctly, but feel{' '}
            <strong style={{ color: theme.color.ink }}>satisfying to play</strong>.
            Currently focused on 2D platformers, top-down games, and mobile optimization.
          </p>

          <div id="skills" style={{ display: 'grid', gap: 10, scrollMarginTop: 90 }}>
            {tools.map(({ icon, name, note }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: theme.color.parchmentSoft,
                  border: `3px solid ${theme.color.wood}`,
                  boxShadow: `3px 3px 0 ${theme.color.woodDark}`,
                  padding: '9px 10px',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: theme.color.grassLight,
                    border: `3px solid ${theme.color.grassDark}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: theme.color.ink }}>{name}</div>
                  <div style={{ fontSize: 11, color: theme.color.inkMuted, fontWeight: 700 }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
