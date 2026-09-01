import PixelButton from './PixelButton'
import { theme } from '../theme'

const DECO_TILES = [
  theme.color.grass,
  theme.color.crop,
  theme.color.red,
  theme.color.blue,
  theme.color.crop,
  theme.color.grassDark,
  theme.color.blue,
  theme.color.red,
]

const stats = [
  { num: '04', label: 'Projects' },
  { num: '1+', label: 'Year with Unity' },
  { num: 'C#', label: 'Main language' },
  { num: 'HCM City', label: 'Based in' },
]

export default function Hero() {
  return (
    <section
      className="pixel-panel"
      style={{
        margin: '28px auto 0',
        maxWidth: 1020,
        padding: '42px 40px 36px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(90deg, rgba(139, 87, 40, 0.08) 2px, transparent 2px), linear-gradient(0deg, rgba(139, 87, 40, 0.08) 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'absolute', right: 26, top: 22, display: 'grid', gridTemplateColumns: 'repeat(4, 12px)', gap: 6 }}>
        {DECO_TILES.map((color, i) => (
          <div key={i} style={{ width: 12, height: 12, background: color, border: `2px solid ${theme.color.woodDark}` }} />
        ))}
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
        <div style={{ flex: '1 1 320px', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: theme.color.grassLight,
              color: theme.color.grassDarker,
              fontFamily: theme.font.pixel,
              fontSize: 13,
              fontWeight: 700,
              padding: '6px 12px',
              marginBottom: 20,
              border: `3px solid ${theme.color.grassDarker}`,
              boxShadow: `3px 3px 0 ${theme.color.wood}`,
            }}
          >
            🌱 Unity Developer Intern
          </div>

          <h1
            style={{
              fontFamily: theme.font.pixel,
              fontSize: 'clamp(46px, 8vw, 76px)',
              fontWeight: 700,
              color: theme.color.ink,
              lineHeight: 0.9,
              marginBottom: 14,
              textShadow: `3px 3px 0 ${theme.color.crop}`,
            }}
          >
            Nathan
            <br />
            <span style={{ color: theme.color.grassDark, textShadow: `3px 3px 0 ${theme.color.parchmentDark}` }}>Dev.</span>
          </h1>

          <img
            src="/images/cats.png"
            alt=""
            aria-hidden="true"
            style={{
              width: 92,
              height: 92,
              objectFit: 'contain',
              imageRendering: 'pixelated',
              position: 'absolute',
              top: 24,
              right: 18,
              pointerEvents: 'none',
              filter: `drop-shadow(3px 3px 0 ${theme.color.wood})`,
            }}
          />

          <p style={{ fontSize: 15, color: theme.color.inkSoft, marginBottom: 28, fontWeight: 800, lineHeight: 1.65 }}>
            Game Dev · C# · Unity 2D · HCMC
            <br />
            <span style={{ color: theme.color.inkMuted }}>Building cozy mechanics, crisp controls, and tiny worlds.</span>
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <PixelButton to="/projects" variant="primary">
              View Projects
            </PixelButton>
            <PixelButton href="#contact" variant="ghost">
              Get in Touch
            </PixelButton>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '1 1 240px',
            maxWidth: 300,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              width: 270,
              height: 270,
              border: `5px solid ${theme.color.woodDark}`,
              background:
                'repeating-linear-gradient(45deg, #d9edb4 0 12px, #c7df9a 12px 24px)',
              overflow: 'hidden',
              boxShadow: theme.pixelShadow(6),
              padding: 8,
            }}
          >
            <img
              src="/images/avatar.jpg"
              alt="Nathan's Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover', border: `3px solid ${theme.color.parchment}` }}
            />
          </div>

          <img
            src="/images/chicken.png"
            alt="Pixel chicken"
            style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-18px',
              width: 112,
              height: 112,
              objectFit: 'contain',
              imageRendering: 'pixelated',
              filter: `drop-shadow(4px 4px 0 ${theme.color.woodDark})`,
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          background: theme.color.soil,
          margin: '38px -20px -16px',
          border: `4px solid ${theme.color.woodDark}`,
          boxShadow: `inset 0 4px 0 ${theme.color.woodLight}`,
        }}
      >
        {stats.map(({ num, label }, i) => (
          <div
            key={label}
            style={{
              padding: '17px 14px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? `3px solid ${theme.color.woodDark}` : 'none',
              background: i % 2 === 0 ? 'rgba(255, 240, 200, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            }}
          >
            <div style={{ fontFamily: theme.font.pixel, fontSize: 27, fontWeight: 700, color: theme.color.crop }}>{num}</div>
            <div style={{ fontSize: 11, color: theme.color.parchment, fontWeight: 800, marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
