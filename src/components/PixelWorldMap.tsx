import { Link } from 'react-router-dom'
import { SectionLabel } from './SectionLabel'
import { theme } from '../theme'

type MapSpot = {
  id: string
  label: string
  subtitle: string
  icon: string
  target: string
  gridColumn: string
  gridRow: string
  color: string
  isRoute?: boolean
}

const spots: MapSpot[] = [
  {
    id: 'about',
    label: 'Farm House',
    subtitle: 'About Nathan',
    icon: '🏡',
    target: '#about',
    gridColumn: '2 / 4',
    gridRow: '2 / 4',
    color: theme.color.red,
  },
  {
    id: 'skills',
    label: 'Tool Shed',
    subtitle: 'Skills & stack',
    icon: '🛠️',
    target: '#skills',
    gridColumn: '6 / 8',
    gridRow: '2 / 4',
    color: theme.color.cropDark,
  },
  {
    id: 'featured',
    label: 'Quest Board',
    subtitle: 'Featured projects',
    icon: '📜',
    target: '#featured-projects',
    gridColumn: '4 / 6',
    gridRow: '5 / 7',
    color: theme.color.wood,
  },
  {
    id: 'all-projects',
    label: 'Town Gate',
    subtitle: 'All projects',
    icon: '🧭',
    target: '/projects',
    gridColumn: '8 / 10',
    gridRow: '6 / 8',
    color: theme.color.blue,
    isRoute: true,
  },
  {
    id: 'gallery',
    label: 'Museum',
    subtitle: 'Game gallery',
    icon: '🖼️',
    target: '/gallery',
    gridColumn: '8 / 10',
    gridRow: '3 / 5',
    color: theme.color.crop,
    isRoute: true,
  },
  {
    id: 'contact',
    label: 'Mailbox',
    subtitle: 'Contact links',
    icon: '📬',
    target: '#contact',
    gridColumn: '2 / 4',
    gridRow: '7 / 9',
    color: theme.color.grassDark,
  },
]

function ScrollToTarget(target: string) {
  const element = document.querySelector(target)

  if (!element) {
    return
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function MapSpotButton({ spot }: { spot: MapSpot }) {
  const sharedStyle = {
    gridColumn: spot.gridColumn,
    gridRow: spot.gridRow,
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minHeight: 86,
    color: theme.color.ink,
    background: `linear-gradient(180deg, ${theme.color.cream} 0%, ${theme.color.parchmentSoft} 100%)`,
    border: `4px solid ${theme.color.woodDark}`,
    boxShadow: theme.pixelShadow(5),
    cursor: 'pointer',
    transition: 'transform 0.12s, box-shadow 0.12s, filter 0.12s',
    zIndex: 2,
  }

  const content = (
    <>
      <span
        style={{
          position: 'absolute',
          inset: 5,
          border: `2px solid ${spot.color}`,
          pointerEvents: 'none',
        }}
      />
      <span style={{ fontSize: 26, lineHeight: 1 }}>{spot.icon}</span>
      <strong style={{ fontFamily: theme.font.pixel, fontSize: 14, color: theme.color.ink }}>{spot.label}</strong>
      <span style={{ fontSize: 11, fontWeight: 800, color: theme.color.inkSoft }}>{spot.subtitle}</span>
    </>
  )

  const hoverHandlers = {
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
      event.currentTarget.style.transform = 'translate(-3px, -5px)'
      event.currentTarget.style.boxShadow = theme.pixelShadow(8)
      event.currentTarget.style.filter = 'brightness(1.05)'
    },
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
      event.currentTarget.style.transform = 'translate(0, 0)'
      event.currentTarget.style.boxShadow = theme.pixelShadow(5)
      event.currentTarget.style.filter = 'brightness(1)'
    },
  }

  if (spot.isRoute) {
    return (
      <Link to={spot.target} style={sharedStyle} {...hoverHandlers} aria-label={`${spot.label}: ${spot.subtitle}`}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      style={{ ...sharedStyle, font: 'inherit' }}
      onClick={() => ScrollToTarget(spot.target)}
      {...hoverHandlers}
      aria-label={`${spot.label}: ${spot.subtitle}`}
    >
      {content}
    </button>
  )
}

export default function PixelWorldMap() {
  return (
    <section id="world-map" style={{ maxWidth: 1020, margin: '22px auto 0', padding: '0 18px' }}>
      <div className="pixel-panel" style={{ padding: '26px 28px 30px' }}>
        <SectionLabel icon="🗺️">World Map</SectionLabel>

        <p style={{ fontSize: 13, color: theme.color.inkSoft, fontWeight: 800, marginBottom: 18, lineHeight: 1.6 }}>
          Pick a place on the map to fast travel through this portfolio.
        </p>

        <div
          className="pixel-world-map-grid"
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(10, minmax(52px, 1fr))',
            gridTemplateRows: 'repeat(9, 54px)',
            gap: 6,
            minHeight: 520,
            padding: 16,
            overflow: 'hidden',
            background:
              `linear-gradient(90deg, rgba(40, 72, 31, 0.14) 0 2px, transparent 2px), linear-gradient(0deg, rgba(40, 72, 31, 0.14) 0 2px, transparent 2px), ${theme.color.grassLight}`,
            backgroundSize: '28px 28px',
            border: `5px solid ${theme.color.woodDark}`,
            boxShadow: `inset 5px 5px 0 rgba(255, 247, 220, 0.45), inset -5px -5px 0 rgba(40, 72, 31, 0.25)`,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              gridColumn: '1 / 11',
              gridRow: '4 / 6',
              alignSelf: 'center',
              height: 44,
              background:
                `repeating-linear-gradient(90deg, ${theme.color.soil} 0 18px, ${theme.color.soilDark} 18px 22px, ${theme.color.soil} 22px 40px)`,
              borderTop: `4px solid ${theme.color.wood}`,
              borderBottom: `4px solid ${theme.color.woodDark}`,
              zIndex: 1,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '5 / 7',
              gridRow: '1 / 10',
              justifySelf: 'center',
              width: 44,
              background:
                `repeating-linear-gradient(0deg, ${theme.color.soil} 0 18px, ${theme.color.soilDark} 18px 22px, ${theme.color.soil} 22px 40px)`,
              borderLeft: `4px solid ${theme.color.wood}`,
              borderRight: `4px solid ${theme.color.woodDark}`,
              zIndex: 1,
            }}
          />

          <div
            aria-hidden="true"
            style={{
              gridColumn: '8 / 11',
              gridRow: '1 / 4',
              background:
                'repeating-linear-gradient(135deg, #5bb6d5 0 14px, #4f9fc5 14px 28px)',
              border: `4px solid ${theme.color.blue}`,
              opacity: 0.92,
              zIndex: 0,
            }}
          />

          <div
            aria-hidden="true"
            style={{
              gridColumn: '1 / 4',
              gridRow: '5 / 7',
              background:
                `repeating-linear-gradient(90deg, ${theme.color.crop} 0 16px, #e5aa45 16px 32px)`,
              border: `4px solid ${theme.color.cropDark}`,
              zIndex: 0,
            }}
          />

          <div
            aria-hidden="true"
            style={{
              gridColumn: '7 / 10',
              gridRow: '8 / 10',
              background:
                `repeating-linear-gradient(90deg, ${theme.color.grass} 0 14px, ${theme.color.grassDark} 14px 28px)`,
              border: `4px solid ${theme.color.grassDarker}`,
              zIndex: 0,
            }}
          />

          {spots.map(spot => (
            <MapSpotButton key={spot.id} spot={spot} />
          ))}
        </div>
      </div>
    </section>
  )
}
