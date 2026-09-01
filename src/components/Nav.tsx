import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/#contact' },
]

export default function Nav() {
  return (
    <nav
      style={{
        background: '#5a7a3a',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid #3d5a28',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: 16,
          color: '#f5ede0',
          letterSpacing: 1,
        }}
      >
        ★ NAATHAN CODE NONSENSE ★
      </Link>
      <div style={{ display: 'flex', gap: 24 }}>
        {navItems.map(({ label, to }) =>
          to.includes('#') ? (
            <a
              key={label}
              href={to}
              style={{ fontSize: 13, color: '#c8e6a0', fontWeight: 600, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#c8e6a0')}
            >
              {label}
            </a>
          ) : (
            <NavLink
              key={label}
              to={to}
              style={({ isActive }) => ({
                fontSize: 13,
                color: isActive ? '#fff' : '#c8e6a0',
                fontWeight: isActive ? 800 : 600,
                transition: 'color 0.15s',
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
