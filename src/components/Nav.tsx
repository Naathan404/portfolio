import { Link, NavLink } from 'react-router-dom'
import { theme } from '../theme'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/#contact' },
]

export default function Nav() {
  return (
    <nav
      style={{
        background:
          'linear-gradient(180deg, #6f3f24 0%, #8b5728 52%, #5a321d 52%, #442614 100%)',
        padding: '12px 32px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `5px solid ${theme.color.woodDark}`,
        boxShadow: '0 5px 0 rgba(68, 38, 20, 0.35)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        gap: 20,
        flexWrap: 'wrap',
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: theme.font.pixel,
          fontSize: 17,
          color: theme.color.cream,
          letterSpacing: 1,
          textShadow: `2px 2px 0 ${theme.color.woodDark}`,
        }}
      >
        ◆ NAATHAN FARM DEV ◆
      </Link>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {navItems.map(({ label, to }) =>
          to.includes('#') ? (
            <a
              key={label}
              href={to}
              style={{
                fontFamily: theme.font.pixel,
                fontSize: 13,
                color: theme.color.grassLight,
                fontWeight: 700,
                background: 'rgba(40, 72, 31, 0.32)',
                border: `2px solid ${theme.color.woodLight}`,
                padding: '5px 12px',
                boxShadow: `2px 2px 0 ${theme.color.woodDark}`,
                transition: 'transform 0.08s, color 0.12s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = theme.color.cream
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = theme.color.grassLight
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {label}
            </a>
          ) : (
            <NavLink
              key={label}
              to={to}
              style={({ isActive }) => ({
                fontFamily: theme.font.pixel,
                fontSize: 13,
                color: isActive ? theme.color.cream : theme.color.grassLight,
                fontWeight: 700,
                background: isActive ? theme.color.grassDark : 'rgba(40, 72, 31, 0.32)',
                border: `2px solid ${isActive ? theme.color.crop : theme.color.woodLight}`,
                padding: '5px 12px',
                boxShadow: `2px 2px 0 ${theme.color.woodDark}`,
                transition: 'transform 0.08s, color 0.12s',
              })}
            >
              {label}
            </NavLink>
          )
        )}
      </div>
    </nav>
  )
}
