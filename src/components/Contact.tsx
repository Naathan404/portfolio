import PixelButton from './PixelButton'
import { theme } from '../theme'

const links = [
  { label: 'Email', icon: '📬', href: 'mailto:nathannguyen6002@gmail.com' },
  { label: 'LinkedIn', icon: '💻', href: 'https://www.linkedin.com/in/nathan-nguyen-892073329/' },
  { label: 'Facebook', icon: '📲', href: 'https://www.facebook.com/nguyennn0404/' },
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/Naathan404' },
  { label: 'Itch.io', icon: '🎮', href: 'https://naathan404.itch.io/' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ maxWidth: 1020, margin: '22px auto 34px', padding: '0 18px', scrollMarginTop: 90 }}>
      <div
        className="pixel-panel"
        style={{
          background:
            `linear-gradient(180deg, rgba(40, 72, 31, 0.9), rgba(63, 107, 42, 0.94)), repeating-linear-gradient(90deg, ${theme.color.grassDark} 0 18px, ${theme.color.grassDarker} 18px 36px)`,
          padding: '34px 30px 30px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: theme.font.pixel,
            fontSize: 'clamp(24px, 4vw, 34px)',
            color: theme.color.cream,
            marginBottom: 10,
            textShadow: `3px 3px 0 ${theme.color.woodDark}`,
          }}
        >
          ◆ Code, Coffee and Game Dev Dream ◆
        </div>
        <p style={{ fontSize: 14, color: theme.color.grassLight, marginBottom: 28, fontWeight: 800 }}>
          Looking for a Unity intern who ships fast and cares about game feel.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          {links.map(({ label, icon, href }) => (
            <PixelButton key={label} href={href} variant="secondary">
              {icon} {label}
            </PixelButton>
          ))}
        </div>

        <div
          style={{
            width: 'min(100%, 800px)',
            margin: '30px auto 4px',
            padding: 10,
            background: theme.color.cream,
            border: `4px solid ${theme.color.woodDark}`,
            boxShadow: theme.pixelShadow(4),
          }}
        >
          <img
            src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              background: theme.color.parchmentSoft,
              border: `3px solid ${theme.color.wood}`,
              imageRendering: 'auto',
            }}
            alt="coding gif"
          />
        </div>
      </div>
    </section>
  )
}
