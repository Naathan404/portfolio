const links = [
  { label: 'Email', icon: '✉️', href: 'mailto:nathannguyen6002@gmail.com' },
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/Naathan404' },
  { label: 'Itch.io', icon: '🎮', href: 'https://naathan404.itch.io/' },
]

export default function Contact() {
  return (
    <section id="Contact" style={{ background: '#5a7a3a', padding: '36px 32px', textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Pixelify Sans', monospace",
        fontSize: 28, color: '#f5ede0', marginBottom: 8,
      }}>
        ★ "Code, Coffee and Game Dev Dream" ★
      </div>
      <p style={{ fontSize: 13, color: '#c8e6a0', marginBottom: 28, fontWeight: 600 }}>
        Looking for a Unity intern who ships fast and cares about game feel.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
        {links.map(({ label, icon, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 12, fontWeight: 800, color: '#3d5a28',
              background: '#c8e6a0', border: '2px solid #a0c870',
              borderRadius: 8, padding: '10px 20px',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#f5ede0')}
            onMouseLeave={e => (e.currentTarget.style.background = '#c8e6a0')}
          >
            {icon} {label}
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '24px 0 8px' }}>
        <img
          src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
          style={{ maxWidth: 800, width: '100%' }}
          alt="coding gif"
        />
      </div>
    </section>
  )
}
