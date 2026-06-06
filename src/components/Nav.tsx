export default function Nav() {
  return (
    <nav style={{
      background: '#5a7a3a',
      padding: '14px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: '3px solid #3d5a28',
    }}>
      <div style={{ fontFamily: "'Pixelify Sans', monospace", fontSize: 16, color: '#f5ede0', letterSpacing: 1 }}>
        ★ NAATHAN CODE NONSENSE ★
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        {['About', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{ fontSize: 13, color: '#c8e6a0', fontWeight: 600, transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#c8e6a0')}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
