const DECO_COLORS = ['#7ab648','#e8a830','#c85050','#5890c8','#e8a830','#7ab648','#5890c8','#c85050']

export default function Hero() {
  return (
    <div style={{ background: '#eee4c8', padding: '48px 40px 40px', borderBottom: '2px solid #c8a96e', position: 'relative' }}>
      {/* Pixel deco dots */}
      <div style={{ position: 'absolute', right: 50, top: 20, display: 'grid', gridTemplateColumns: 'repeat(4, 10px)', gap: 6 }}>
        {DECO_COLORS.map((color, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
        ))}
      </div>

      {/* Main Layout Content: Chia đôi trái phải */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        
        {/* LEFT COLUMN: Text Info */}
        <div style={{ flex: '1 1 300px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#7ab648', color: '#2d4a18',
            fontSize: 11, fontWeight: 700, borderRadius: 20,
            padding: '4px 12px', marginBottom: 20,
            letterSpacing: 0.5, border: '1.5px solid #5a8a30',
          }}>
            🌿 Unity Developer Intern
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Pixelify Sans', monospace",
            fontSize: 'clamp(40px, 7vw, 64px)',
            fontWeight: 700, color: '#3d2e1a',
            lineHeight: 1, marginBottom: 10,
          }}>
            Nathan<br />
            <span style={{ color: '#7ab648' }}>
              Dev.
                <img 
                  src="/images/cats.png" 
                  alt="Pixel Cat"
                  style={{
                    width: '150px', 
                    height: '150px',
                    marginLeft: '30px',
                    marginBottom: '325px', 
                    objectFit: 'contain',
                    imageRendering: 'pixelated', 
                    bottom: '2px', 
                    position: 'absolute'
                  }}
                />
              </span>
          </h1>

          <p style={{ fontSize: 15, color: '#7a6040', marginBottom: 28, fontWeight: 600 }}>
            Game Dev · C# · Unity 2D · HCMC
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a
              href="#Projects"
              style={{
                background: '#7ab648', color: '#fff',
                border: '2px solid #5a8a30', borderRadius: 8,
                padding: '10px 22px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#5a8a30')}
              onMouseLeave={e => (e.currentTarget.style.background = '#7ab648')}
            >
              View Projects
            </a>
            <a
              href="#Contact"
              style={{
                background: 'transparent', color: '#7a6040',
                border: '2px solid #c8a96e', borderRadius: 8,
                padding: '10px 22px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#7ab648'
                e.currentTarget.style.color = '#5a8a30'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#c8a96e'
                e.currentTarget.style.color = '#7a6040'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Avatar + Stardew Valley Chicken */}
        <div style={{ 
          position: 'relative', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          flex: '1 1 200px',
          maxWidth: '260px',
          margin: '0 auto'
        }}>
          <div style={{
            width: '250px',
            height: '250px',
            borderRadius: 16,
            border: '4px solid #c8a96e',
            background: '#ede4cc',
            overflow: 'hidden',
            boxShadow: '4px 4px 0px #c8a96e'
          }}>
            <img 
              src="/images/avatar.jpg" 
              alt="Nathan's Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <img 
            src="/images/chicken.png" 
            alt="Stardew Valley Chicken"
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-20px',
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              imageRendering: 'pixelated', 
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))'
            }}
          />
        </div>

      </div>

      {/* Stats bar */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        background: '#d4c49a', margin: '40px -40px -48px',
        borderTop: '2px solid #c8a96e',
      }}>
        {[
          { num: '03', label: 'Projects' },
          { num: '1+', label: 'Year with Unity' },
          { num: 'C#', label: 'Main language' },
          { num: 'HCM', label: 'Based in' },
        ].map(({ num, label }, i) => (
          <div key={label} style={{
            padding: '18px 16px', textAlign: 'center',
            borderRight: i < 3 ? '1px solid #c8a96e' : 'none',
          }}>
            <div style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 24, fontWeight: 700, color: '#5a7a3a' }}>{num}</div>
            <div style={{ fontSize: 11, color: '#8a7050', fontWeight: 700, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}