import { useState } from 'react' // ← Import useState để quản lý state đóng/mở hình
import { SectionLabel } from './SectionLabel'

{/* --- DANH SÁCH CÁC DỰ ÁN --- */}
const unityProjects = [
  {
    badge: 'UNITY 2D',
    type: 'SOLO',
    wip: false,
    title: 'Tile Trip Puzzle',
    description: 'Puzzle game where players pick tiles from a level layout and match 3 identical ones in a tray to clear the board. Built a tile generation algorithm that guarantees a winnable solution, and a custom in-editor level design tool — draw the layout visually, save to JSON, load at runtime.',
    tech: ['C#', 'Custom Editor Tool', 'JSON', 'ScriptableObjects', 'DOTween'],
    github: 'https://github.com/Naathan404/TileTripPuzzle',
    demo: 'https://naathan404.itch.io/tile-trip-puzzle',
    video: 'https://youtube.com/shorts/f0luBTxtHh0?feature=share',
    images: ['/images/tile-trip-3.png', '/images/tile-trip-0.png', '/images/tile-trip-2.png','/images/tile-trip-5.png', '/images/tile-trip-4.png', '/images/tile-trip-6.png', '/images/tile-trip-7.png'],
    role: '\n🛠️ Built a custom Unity Editor Tool for visual level layout design with JSON-based save/load.\n🧩 Implemented a backward-generation algorithm guaranteeing at least one valid winning path per level.\n✨ Enhanced game feel using DOTween animations and Unity Particle System for match feedback.'
  },
  {
    badge: 'UNITY 2D',
    type: 'SOLO',
    title: 'Toast Escape',
    description: 'My first Unity project. This is an endless runner inspired by Zombie Tsunami. Full gameplay loop with object pooling for map generation. First shipped game.',
    tech: ['C#', 'Object Pooling', 'Aseprite', 'ScriptableObjects'],
    github: 'https://github.com/Naathan404/Toast-Escape',
    demo: 'https://naathan404.itch.io/toast-escape',
    video: 'https://youtu.be/udyNIv3OPvA?si=y1iEBOrNYk1IY2gl',
    images: ['/images/toast-escape-1.jpg', '/images/toast-escape-2.png', '/images/toast-escape-3.jpg', '/images/toast-escape-4.jpg', '/images/toast-escape-5.jpg'],
    role: '\n🏔️ Designed a dynamic difficulty system: pre-authored map segments of varying difficulty are selected at runtime based on the player\'s current speed.\n⚙️ Managed continuous map streaming using Object Pooling on map segments, enabling seamless level flow without runtime instantiation overhead.'
  },
  {
    badge: 'UNITY 2D',
    type: 'TEAM',
    title: 'High Tail',
    wip: true,
    description: 'A challenging 2D platformer set in an ancient world where movement is your greatest weapon.',
    tech: ['C#', 'FSM', 'Shader', 'Post processing', 'ScriptableObjects'],
    github: null,
    demo: null,
    video: null,
    images: ['images/high-tail-1.png', 'images/high-tail-2.png', 'images/high-tail-4.png', 'images/high-tail-5.png'],
    role: '\n🕹️ Built player movement with advanced game-feel techniques: buffer jump, coyote time, and corner correction.\n🍃 Developed custom shaders: Wind Shader for foliage animation and a camera distortion wave shader.\n✨ Implemented particle effects for visual polish.\n📺 Explored post-processing pipeline for visual effects.'
  },
]

const otherProjects = [
  {
    badge: 'GODOT 4',
    type: 'TEAM',
    title: 'Swap Masks',
    description: '2D puzzle platformer built in Godot. Player swaps between masked states to interact with the world differently. Designed with a full state machine and hand-crafted level design.',
    role: '\n🎮 Designed core gameplay and overall game concept.\n🕹️ Built player systems: state machine, movement, and animation.\n🧩 Designed 7/8 levels.\n⚙️ Implemented level mechanics: Ghost Tile, Laser, and Saw.',
    tech: ['GDScript', 'State Machine', 'Level Design', 'Godot 4'],
    github: 'https://github.com/Naathan404/UITxVNG-Group08-Swap-Masks',
    demo: 'https://naathan404.itch.io/swap-masks',
    video: 'https://youtu.be/YAY58Vo1z_0?si=bj7HfBGspmTQk-tf',
    images: ['/images/swap-masks-1.png', '/images/swap-masks-2.png', '/images/swap-masks-3.png', '/images/swap-masks-4.png']
  },
  {
    badge: 'DIRECT X',
    type: 'TEAM',
    wip: true,
    title: 'Super Mario Bros. 3',
    description: 'Work-in-progress remake of SMB3 in C++ with DirectX 10. Implemented rendering pipeline, sprite animation, collision system, and player movement from scratch — no game engine.',
    role: '\n🕹️ Owned player systems end-to-end: state machine, movement, and animation.\n🚩 Implemented \'?\' blocks, power-ups, goal box, and note block mechanics.\n🏔️ Built slope physics and slide behavior for World 2, designed World 2 layout.\n🎵 Integrated audio via irrKlang.',
    tech: ['C++', 'DirectX 10', 'Sprite Animation', 'AABB Collision', 'Game Loop'],
    github: null,
    demo: null,
    video: null,
    images: ['/images/smb3-1.png', '/images/smb3-2.png', '/images/smb3-5.png', '/images/smb3-4.png', '/images/smb3-3.png']
  },
]

{/* --- PROJECTS--- */}
export default function Projects() {
  // Quản lý hình ảnh đang được click chọn để phóng to (null nếu không chọn hình nào)
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="Projects" style={{ padding: '28px 32px', borderBottom: '2px solid #c8a96e', position: 'relative' }}>
      {/* Unity Projects */}
      <SectionLabel icon="🎮">Unity Projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        {unityProjects.map(p => (
          <ProjectCard key={p.title} {...p} onImageClick={setSelectedImg} />
        ))}
      </div>

      {/* Other Projects */}
      <SectionLabel icon="🛠️">Other Projects</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {otherProjects.map(p => (
          <ProjectCard key={p.title} {...p} onImageClick={setSelectedImg} />
        ))}
      </div>

      {/* --- POPUP MODAL PHÓNG TO HÌNH ẢNH --- */}
      {selectedImg && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(26, 18, 10, 0.85)', 
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 9999, cursor: 'zoom-out',
            backdropFilter: 'blur(4px)', 
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setSelectedImg(null)} // Click ra ngoài pop up để đonngs
        >
          {/* Nút đóng góc trên bên phải */}
          <button 
            style={{
              position: 'absolute', top: 20, right: 25,
              background: '#faf5e8', border: '2px solid #c8a96e',
              color: '#3d2e1a', borderRadius: '50%',
              width: 40, height: 40, fontSize: 18, fontWeight: 'bold',
              cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'transform 0.15s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>

          {/* Vùng chứa ảnh phóng to */}
          <div 
            style={{ position: 'relative', maxWidth: '85%', maxHeight: '85%' }}
            onClick={(e) => e.stopPropagation()} // Chống nổi bọt (click vào ảnh ko bị đóng)
          >
            <img 
              src={selectedImg} 
              alt="Project preview large" 
              style={{
                maxWidth: '100%', maxHeight: '85vh',
                objectFit: 'contain', borderRadius: 8,
                border: '3px solid #c8a96e',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                backgroundColor: '#faf5e8'
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

{/* --- THẺ DỰ ÁN --- */}
function ProjectCard({ badge, type, wip, title, images, description, role, tech, video, github, demo, onImageClick }: {
  badge: string; type: string; 
  title: string; 
  description: string; role?: string
  tech: string[]; 
  github: string | null; 
  video: string | null;
  demo: string | null;
  wip?: boolean,
  images?: string[];
  onImageClick: (src: string) => void;
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
        {[badge, type, ...(wip ? ['WORK-IN-PROGRESS'] : [])].map((b, index) => {
          const isWip = b === 'WORK-IN-PROGRESS';
          return (
            <span
              key={`${b}-${index}`}
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
          );
        })}
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
            <span key={t} style={{
              fontSize: 11, fontWeight: 700, color: '#7a6040',
              background: '#ede4cc', border: '1px solid #c8a96e',
              borderRadius: 4, padding: '3px 9px',
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
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
                fontSize: 11, fontWeight: 800,
                color: id === 'video' ? '#c05000' : '#3d6020',
                background: id === 'video' ? '#fff0e0' : '#e8f5d0',
                border: id === 'video' ? '1.5px solid #f0a060' : '1.5px solid #a0c870',
                borderRadius: 6, padding: '6px 14px',
                transition: 'background 0.15s', whiteSpace: 'nowrap' as const,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = id === 'video' ? '#ffd9b0' : '#d0ebb0')}
              onMouseLeave={e => (e.currentTarget.style.background = id === 'video' ? '#fff0e0' : '#e8f5d0')}
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
              // Thêm sự kiện onClick truyền ngược src lên component cha
              onClick={() => onImageClick(src)}
              style={{
                height: 140,
                borderRadius: 6,
                border: '1.5px solid #c8a96e',
                objectFit: 'cover',
                flexShrink: 0,
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
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