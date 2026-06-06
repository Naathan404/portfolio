import { SectionLabel } from './SectionLabel'


const unityProjects = [
  {
    badge: 'UNITY 2D',
    type: 'SOLO',
    wip: true,
    title: 'Tile Trip Puzzle',
    description: 'Puzzle game where players pick tiles from a level layout and match 3 identical ones in a tray to clear the board. Built a tile generation algorithm that guarantees a winnable solution, and a custom in-editor level design tool — draw the layout visually, save to JSON, load at runtime.',
    tech: ['C#', 'Custom Editor Tool', 'JSON', 'ScriptableObjects'],
    github: 'https://https://github.com/Naathan404/TileTripPuzzle.git.com/nguyendev',
    demo: null,
  },
  {
    badge: 'UNITY 2D',
    type: 'SOLO',
    title: 'Toast Escape',
    description: 'My first Unity project. This is an endless runner inspired by Zombie Tsunami. Full gameplay loop with object pooling for map generation. First shipped game.',
    tech: ['C#', 'Object Pooling', 'Aseprite', 'ScriptableObjects'],
    github: 'https://github.https://github.com/Naathan404/Toast-Escape/nguyendev',
    demo: 'https://naathan404.itch.io/toast-escape',
    images: ['/images/toast-escape-1.jpg', '/images/toast-escape-2.png', '/images/toast-escape-3.jpg', '/images/toast-escape-4.jpg', '/images/toast-escape-5.jpg']
  },
]

const otherProjects = [
  {
    badge: 'GODOT 4',
    type: 'TEAM',
    title: 'Swap Mask',
    description: '2D puzzle platformer built in Godot. Player swaps between masked states to interact with the world differently. Designed with a full state machine and hand-crafted level design.',
    role: '🎮 Designed core gameplay and overall game concept.\n🕹️ Built player systems: state machine, movement, and animation.\n🧩 Designed 7/8 levels.\n⚙️ Implemented level mechanics: Ghost Tile, Laser, and Saw.',
    tech: ['GDScript', 'State Machine', 'Level Design', 'Godot 4'],
    github: 'https://github.com/https://github.com/Naathan404/UITxVNG-Group08-Swap-Masks.git',
    demo: 'https://naathan404.itch.io/swap-masks',
    images: ['/images/swap-masks-1.png', '/images/swap-masks-2.png', '/images/swap-masks-3.png', '/images/swap-masks-4.png']
  },
  {
    badge: 'C++',
    type: 'TEAM',
    wip: true,
    title: 'Super Mario Bros. 3',
    description: 'Work-in-progress remake of SMB3 in C++ with DirectX 10. Implemented rendering pipeline, sprite animation, collision system, and player movement from scratch — no game engine.',
    role: '\n🕹️ Owned player systems end-to-end: state machine, movement, and animation.\n🚩 Implemented \'?\' blocks, power-ups, goal box, and note block mechanics.\n🏔️ Built slope physics and slide behavior for World 2, designed World 2 layout.\n🎵 Integrated audio via irrKlang.',
    tech: ['C++', 'DirectX 10', 'Sprite Animation', 'AABB Collision', 'Game Loop'],
    github: null,
    demo: null,
    images: ['/images/smb3-1.png', '/images/smb3-2.png', '/images/smb3-5.png', '/images/smb3-4.png', '/images/smb3-3.png']
  },
]

export default function Projects() {
  return (
    <section id="Projects" style={{ padding: '28px 32px', borderBottom: '2px solid #c8a96e' }}>
      {/* Unity Projects */}
      <SectionLabel icon="🎮">Unity Projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {unityProjects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>

      {/* Other Projects */}
      <SectionLabel icon="🛠️">Other Projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {otherProjects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}

function ProjectCard({ badge, type, wip, title, images, description, role, tech, github, demo }: {
  badge: string; type: string; 
  title: string; 
  description: string; role?: string
  tech: string[]; 
  github: string | null; 
  demo: string | null;
  wip?: boolean,
  images?: string[]
}) {
  return (
    <div
      style={{
        background: '#faf5e8', border: '2px solid #c8a96e',
        borderRadius: 10, padding: '20px 22px',
        transition: 'border-color 0.15s, background 0.15s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#7ab648'
        e.currentTarget.style.background = '#f0f8e8'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#c8a96e'
        e.currentTarget.style.background = '#faf5e8'
      }}
    >
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
          {[badge, type, ...(wip ? ['WORK-IN-PROGRESS'] : [])].map(b => (
            <span
              key={b}
              style={{
                ...(b === 'WORK-IN-PROGRESS' && {
                  background: '#fff3cd',
                  color: '#856404',
                  border: '1.5px solid #ffc107',
                }),
                fontSize: 10, fontWeight: 800,
                background: '#e8f5d0', color: '#3d6020',
                border: '1.5px solid #a0c870', borderRadius: 4,
                padding: '2px 8px',
              }}
            >{b}</span>
          ))}
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 800, color: '#3d2e1a', marginBottom: 8 }}>{title}</h2>
      <p style={{ fontSize: 13, color: '#7a6040', lineHeight: 1.65, marginBottom: 16 }}>{description}</p>

      {role && (
        <div style={{
          marginBottom: 16,
          padding: '8px 12px',
          background: '#e8f5d0',
          border: '1.5px solid #a0c870',
          borderRadius: 6,
        }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: '#3d6020' }}>
            → MY ROLE: 
          </span>
          <span style={{ fontSize: 12, color: '#5a4030', marginLeft: 6, fontWeight: 600, whiteSpace: 'pre-line' }}>
            {role}
          </span>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tech.map(t => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 700, color: '#7a6040',
              background: '#ede4cc', border: '1px solid #c8a96e',
              borderRadius: 4, padding: '3px 9px',
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[...(github ? [{ label: 'GitHub ↗', href: github }] : []),...(demo ? [{ label: 'Play ↗', href: demo }] : [])].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 11, fontWeight: 800, color: '#3d6020',
                background: '#e8f5d0', border: '1.5px solid #a0c870',
                borderRadius: 6, padding: '6px 14px',
                transition: 'background 0.15s', whiteSpace: 'nowrap' as const,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#d0ebb0')}
              onMouseLeave={e => (e.currentTarget.style.background = '#e8f5d0')}
            >
              {label}
            </a>
          ))}
          {!github && (
            <span style={{
              fontSize: 11, fontWeight: 800,
              color: '#aaa', background: '#f0ebe0',
              border: '1.5px solid #ddd',
              borderRadius: 6, padding: '6px 14px',
              cursor: 'not-allowed',
            }} title="Private repository — available upon request">
              GitHub (Private)
            </span>
          )}
        </div>

        
      </div>
      {images && images.length > 0 && (
        <div style={{
          display: 'flex', gap: 8, marginTop: 16,
          overflowX: 'auto', 
          paddingBottom: 4, paddingTop: 6,
          paddingLeft: 5, paddingRight: 5
        }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              style={{
                height: 140,
                borderRadius: 6,
                border: '1.5px solid #c8a96e',
                objectFit: 'cover',
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease', // ← thêm
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'
                e.currentTarget.style.borderColor = '#7ab648'
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
