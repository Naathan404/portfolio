import PixelButton from './PixelButton'

const links = [
  { label: 'Email', icon: '📬', href: 'mailto:nathannguyen6002@gmail.com' },
  { label: 'LinkedIn', icon: '💻', href: 'https://www.linkedin.com/in/nathan-nguyen-892073329/'},
  { label: 'Facebook', icon: '📲', href: 'https://www.facebook.com/nguyennn0404/' },
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/Naathan404' },
  { label: 'Itch.io', icon: '🎮', href: 'https://naathan404.itch.io/' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#5a7a3a', padding: '36px 32px', textAlign: 'center' }}>
      <div
        style={{
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: 28,
          color: '#f5ede0',
          marginBottom: 8,
        }}
      >
        ★ "Code, Coffee and Game Dev Dream" ★
      </div>
      <p style={{ fontSize: 13, color: '#c8e6a0', marginBottom: 28, fontWeight: 600 }}>
        Looking for a Unity intern who ships fast and cares about game feel.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
        {links.map(({ label, icon, href }) => (
          <PixelButton key={label} href={href} variant="secondary" style={{ fontFamily: "'Pixelify Sans', monospace" }}>
            {icon} {label}
          </PixelButton>
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