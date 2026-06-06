import { SectionLabel } from './SectionLabel'

const tools = [
  { icon: '🎮', name: 'Unity 2D', note: 'Main engine, 1+ year' },
  { icon: '💻', name: 'C#', note: 'Primary language' },
  { icon: '🕹️', name: 'Git / GitHub', note: 'Version control' },
  { icon: '🛠️', name: 'Other tools', note: 'Aseprite, Godot Engine,...' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '28px 32px', borderBottom: '2px solid #c8a96e' }}>
      <SectionLabel icon="👤">About</SectionLabel>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Text */}
        <p style={{ fontSize: 14, color: '#7a6040', lineHeight: 1.75, fontWeight: 600 }}>
          Game dev student based in Ho Chi Minh City, looking for a Unity internship
          to grow in a real production environment. I enjoy the intersection of{' '}
          <strong style={{ color: '#3d2e1a' }}>programming and game feel</strong> —
          making mechanics that don't just work correctly, but feel{' '}
          <strong style={{ color: '#3d2e1a' }}>satisfying to play</strong>.
          Currently focused on 2D platformers, top-down games, and mobile optimization.
        </p>

        {/* Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tools.map(({ icon, name, note }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32,
                background: '#e8f5d0', border: '1.5px solid #a0c870',
                borderRadius: 6, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 14, flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#3d2e1a' }}>{name}</div>
                <div style={{ fontSize: 11, color: '#8a7050', fontWeight: 600 }}>{note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}